import React, { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

// Define the User type
interface User {
  role: any;
  _id: string;
  name: string;
  email: string;
  isVerified: boolean;
  createdAt?: string;
  // Add other user properties as needed
}

// Define the AuthContext type
interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  logout: () => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
}

// Create the context with a default value
const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Create a provider component
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Initialize axios with credentials
  axios.defaults.withCredentials = true;
  axios.defaults.baseURL = "http://localhost:8000";

  // Function to fetch the current user
  const fetchCurrentUser = async () => {
    // Check if we have a user in localStorage first
    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      console.log("No stored user found, skipping fetchCurrentUser");
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      

      const response = await axios.get("/api/current-user");
    //   console.log("Current user response:", response.data);

      if (response.data) {
        
        setUser(response.data);
        // Update localStorage with fresh data
        localStorage.setItem("user", JSON.stringify(response.data));
      } else {
        console.log("No user data in response");
      }
    } catch (err) {
      console.error("Error fetching current user:", err);

      // Handle different types of errors
      if (err.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.error("Error response data:", err.response.data);
        console.error("Error response status:", err.response.status);

        // For 401 errors, just keep the user from localStorage
        if (err.response.status === 401) {
          console.log("401 Unauthorized - keeping user data from localStorage");
          try {
            const parsedUser = JSON.parse(storedUser);
            setUser(parsedUser);
          } catch (parseErr) {
            console.error("Error parsing stored user:", parseErr);
            localStorage.removeItem("user");
            setUser(null);
          }
          return;
        }

        // For other errors, set the error message
        setError(
          "Failed to fetch user data: " +
            (err.response.data?.error || "Server error")
        );
      } else if (err.request) {
        // The request was made but no response was received
        console.error("No response received:", err.request);
        setError(
          "Network error: Could not connect to the server. Is it running?"
        );
      } else {
        // Something happened in setting up the request that triggered an Error
        console.error("Error setting up request:", err.message);
        setError("Error setting up request: " + err.message);
      }

      console.log("Clearing user data due to error");
      setUser(null);
      localStorage.removeItem("user");
    } finally {
      setLoading(false);
    }
  };

  // Function to handle logout
  const logout = async () => {
    try {
      setLoading(true);
      await axios.get("/api/logout");
      setUser(null);
      localStorage.removeItem("user");
      router.push("/");
    } catch (err) {
      console.error("Logout error:", err);
      setError("Logout failed");
    } finally {
      setLoading(false);
    }
  };

  // Check for user in localStorage on initial load and fetch from server
  useEffect(() => {
    const initializeAuth = async () => {
    //   console.log("Initializing auth...");
      // First check localStorage
      const storedUser = localStorage.getItem("user");
      

      if (storedUser) {
        try {
          const parsedUser = JSON.parse(storedUser);
        //   console.log("Parsed user from localStorage:", parsedUser);
          setUser(parsedUser);
          // Then try to fetch fresh data from server
          await fetchCurrentUser();
        } catch (err) {
          console.error("Error parsing stored user:", err);
          localStorage.removeItem("user");
          setUser(null);
        }
      } else {
        // No stored user, so we're not logged in
        console.log("No stored user found in localStorage");
        setLoading(false);
      }
    };

    initializeAuth();
  }, []);

  // Create the context value
  const value = {
    user,
    loading,
    error,
    logout,
    fetchCurrentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Create a custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export default AuthContext;
