import User from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import jwt from "jsonwebtoken";
import { nanoid } from "nanoid";
import nodemailer from "nodemailer";
import bcrypt from "bcrypt";

export const registerAdmin = async (req, res) => {
  const { name, email, password } = req.body; // Removed 'role' from destructuring
  const encryptedPassword = await bcrypt.hash(password, 10);

  try {
    const oldUser = await User.findOne({ email });
    if (oldUser) {
      return res.json({ error: "User Exists" });
    }

    // Explicitly set the role to "Admin"
    await User.create({
      name,
      email,
      password: encryptedPassword,
      role: ["Admin"], // Ensure the role is set to Admin
    });

    res.send({ status: "ok" });
  } catch (error) {
    console.error("Error registering admin:", error);
    res.send({ status: "error" });
  }
};

export const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(400).json({ error: "Email already exists" });

    // Generate email verification code
    const verificationCode = nanoid(6).toUpperCase();
    const hashedPassword = await bcrypt.hash(password, 10);

    // Store the user in a temporary collection (or store `isVerified: false`)
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      isVerified: false, // New field to track verification
      verificationCode,
    });
    await newUser.save();

    // Send verification email
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Email Verification for DevStream",
      html: `
        <html>
          <h1>Email Verification</h1>
          <p>Use this code to verify your email:</p>
          <h2 style="color:red;">${verificationCode}</h2>
          <i>devStream.org</i>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);
    return res.json({ message: "Verification code sent to email" });
  } catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { email, code } = req.body;

    // Find user with the code
    const user = await User.findOne({ email, verificationCode: code });
    if (!user) return res.status(400).json({ error: "Invalid code or email" });

    // Mark user as verified
    user.isVerified = true;
    user.verificationCode = "";
    await user.save();

    return res.json({ message: "Email verified successfully!" });
  } catch (error) {
    console.error("Error verifying email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate input
    if (!email || !password) {
      return res.status(400).send("Email and password are required.");
    }

    // Check if the user exists
    const user = await User.findOne({ email }).exec();
    if (!user) {
      return res.status(400).send("No user found.");
    }

    if (!user.isVerified)
      return res.status(400).json({ error: "Email not verified" });

    // Check password
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(400).send("Incorrect password."); // Respond before proceeding further
    }

    // Create signed JWT
    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    // Exclude sensitive data
    user.password = undefined;

    // Send token in cookie
    res.cookie("token", token, {
      httpOnly: true,
      // secure: true, // only works on https
    });

    // Send user as JSON response
    res.json(user);
  } catch (err) {
    console.error("Login Error:", err); // Log the error for debugging
    res.status(500).send("Something went wrong. Please try again.");
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.json({ message: "Signout success" });
  } catch (err) {
    console.log(err);
  }
};

export const currentUser = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id).select("-password").exec();
    return res.json(user);
  } catch (err) {
    console.log(err);
  }
};

export const sendTestEmail = async (req, res) => {
  const params = {
    Source: process.env.EMAIL_FROM,
    Destination: {
      ToAddresses: ["harshvirat894@gmail.com"],
    },
    ReplyToAddresses: [process.env.EMAIL_FROM],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: `
              <html>
                <h1>Reset password link</h1>
                <p>Please use the following link to reset your password</p>
              </html>
            `,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: "Password reset link",
      },
    },
  };

  try {
    const command = new SendEmailCommand(params);
    const response = await sesClient.send(command);
    console.log("Email sent successfully:", response);
    res.json({ ok: true });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email", error);
  }
};

export const forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const shortCode = nanoid(6).toUpperCase();

    const user = await User.findOneAndUpdate(
      { email },
      { passwordResetCode: shortCode },
      { new: true }
    );
    if (!user) {
      return res.status(400).send("User not found");
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailDetails = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Reset Password",
      html: `
        <html>
          <h1>Reset Password</h1>
          <p>Use this code to reset your password:</p>
          <h2 style="color:red;">${shortCode}</h2>
          <i>devStream.org</i>
        </html>
      `,
    };

    // Send the email
    await transporter.sendMail(mailDetails);
    console.log("Email sent successfully");

    // Respond to the client
    res.json({ ok: true, message: "Reset code sent to email successfully." });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email");
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { email, code, newPassword } = req.body;

    // Validate input
    if (!email || !code || !newPassword) {
      return res.status(400).send("All fields are required.");
    }

    // Check if user exists and code matches
    const user = await User.findOne({ email, passwordResetCode: code });
    if (!user) {
      return res.status(400).send("Wrong code entered or user not found.");
    }

    // Hash the new password
    const hashedPassword = await hashPassword(newPassword);

    // Update the user's password and clear the reset code
    await User.findOneAndUpdate(
      { email },
      {
        password: hashedPassword,
        passwordResetCode: "",
      }
    );

    res.json({ ok: true, message: "Password reset successful." });
  } catch (err) {
    console.error("Error resetting password:", err);
    res.status(500).send("Error! Try again.");
  }
};

export const allAdminUsers = async (req, res) => {
  try {
    const user = await User.findById(req.auth._id);
    if (user.role.includes("Admin")) {
      const adminUsers = await User.find({}).select("-password");
      res.json(adminUsers);
    } else {
      return res.status(400).send("Only admin is allowed to this!");
    }
  } catch (error) {
    console.error("Error fetching admin users:", error);
    res.status(500).json({ message: "Server error" });
  }
};
