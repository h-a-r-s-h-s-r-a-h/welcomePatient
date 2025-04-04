# 🏥 Welcome Patient

Welcome to Welcome Patient - Your Gateway to Modern Healthcare Management! 

## 🌟 Overview

Welcome Patient is a modern, user-friendly healthcare management platform designed to bridge the gap between patients and medical services. Our platform provides an intuitive interface for both patients and healthcare administrators, making healthcare management more accessible and efficient.

## ✨ Key Features

### 👤 For Patients
- **Secure Authentication**: Easy and secure login/registration system
- **Personal Dashboard**: Manage your medical appointments and records
- **Profile Management**: Update your personal information and preferences
- **Responsive Design**: Access the platform seamlessly on any device

### 👨‍⚕️ For Administrators
- **Admin Dashboard**: Comprehensive overview of platform statistics
- **User Management**: Monitor and manage user accounts
- **Real-time Analytics**: Track platform usage and user engagement
- **Role-based Access**: Secure administrative controls

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/h-a-r-s-h-s-r-a-h/welcomePatient.git
   cd welcome-patient
   ```

2. **Install dependencies**
   ```bash
   # Install client dependencies
   cd client
   npm install

   # Install server dependencies
   cd ../server
   npm install
   ```

3. **Set up environment variables**
   ```bash
   # In the server directory
   cp .env.example .env
   # Update the .env file with your configurations
   ```

4. **Start the development servers**
   ```bash
   # Start the backend server
   cd server
   npm run dev

   # In a new terminal, start the frontend
   cd client
   npm run dev
   ```

5. **Access the application**
   - Frontend: http://localhost:3000
   - Backend: http://localhost:8000

## 🛠️ Tech Stack

### Frontend
- **Next.js**: React framework for production
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For modern, responsive styling
- **Axios**: For API requests
- **React Context**: For state management

### Backend
- **Node.js**: Runtime environment
- **Express**: Web framework
- **MongoDB**: Database
- **JWT**: Authentication

## 🔐 Security Features

- Secure user authentication
- JWT token-based authorization
- Password encryption
- Protected API endpoints
- Role-based access control

## 📱 Responsive Design

The platform is fully responsive and works seamlessly across:
- 💻 Desktop computers
- 📱 Mobile phones
- 📟 Tablets
- 🖥️ Various screen sizes

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Thanks to all contributors who have helped shape Welcome Patient
- Special thanks to our early users for their valuable feedback
- Shoutout to the amazing open-source community


## 💻 Code Examples

### Authentication Implementation
```typescript
// Login functionality using the Auth Context
const handleLogin = async (email: string, password: string) => {
  try {
    const { data } = await axios.post('/api/login', {
      email,
      password,
    });
    
    // Save user data
    localStorage.setItem('user', JSON.stringify(data));
    await fetchCurrentUser();
    
    // Redirect based on role
    if (data.role.includes('Admin')) {
      router.push('/admin');
    } else {
      router.push('/dashboard');
    }
  } catch (error) {
    toast.error('Invalid credentials');
  }
};
```

**Explanation:**
- The login function handles user authentication using email and password
- Upon successful login:
  - User data is stored in localStorage for persistence
  - Context is updated with the latest user data via `fetchCurrentUser()`
  - User is redirected based on their role (Admin or regular user)
- Error handling shows user-friendly toast notifications
- Uses axios for API requests and Next.js router for navigation

### Protected Route Component
```typescript
// HOC for protecting routes
const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return user ? <>{children}</> : null;
};
```

**Explanation:**
- Higher-Order Component (HOC) that wraps protected pages/routes
- Checks authentication status using the auth context
- Features:
  - Shows loading spinner during authentication check
  - Redirects to login page if user is not authenticated
  - Only renders the protected content when user is authenticated
  - Handles loading states gracefully
- Used to protect routes that require authentication

### API Integration Example
```typescript
// User management in Admin Dashboard
const AdminDashboard = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get("/api/admin/users");
      setUsers(data);
    } catch (error) {
      toast.error("Failed to fetch users");
    }
  };

  const handleVerifyUser = async (userId: string) => {
    try {
      await axios.put(`/api/admin/users/${userId}/verify`);
      toast.success("User verified successfully");
      // Update local state
      setUsers(users.map(user => 
        user._id === userId ? { ...user, isVerified: true } : user
      ));
    } catch (error) {
      toast.error("Verification failed");
    }
  };
};
```

**Explanation:**
- Admin dashboard component with user management functionality
- Features:
  - Fetches list of all users from the API
  - Provides user verification functionality
  - Implements optimistic UI updates
  - Handles errors with user-friendly notifications
- Uses React's useState for local state management
- Demonstrates proper error handling and success notifications

### Responsive Component Example
```typescript
// Responsive Navbar with Tailwind CSS
const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-indigo-600">
              Welcome Patient
            </Link>
          </div>
          {user ? (
            <div className="flex items-center space-x-4">
              <span>Welcome, {user.name}</span>
              <button onClick={logout}>Logout</button>
            </div>
          ) : (
            <Link href="/login">Login</Link>
          )}
        </div>
        
        {/* Mobile Menu */}
        <div className="sm:hidden">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span className="sr-only">Open menu</span>
            {/* Menu icon */}
          </button>
        </div>
      </div>
    </nav>
  );
};
```

**Explanation:**
- Responsive navigation bar built with Tailwind CSS
- Features:
  - Different layouts for desktop and mobile views
  - Conditional rendering based on authentication status
  - Hamburger menu for mobile devices
  - Smooth transitions and animations
- Uses Tailwind's responsive classes (sm:, lg:, etc.)
- Integrates with auth context for user status and logout

### Context Provider Setup
```typescript
// Auth Context Implementation
interface AuthContextType {
  user: User | null;
  loading: boolean;
  logout: () => Promise<void>;
  fetchCurrentUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchCurrentUser = async () => {
    try {
      const { data } = await axios.get('/api/current-user');
      setUser(data);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.get('/api/logout');
      setUser(null);
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, logout, fetchCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
```

**Explanation:**
- Global authentication context using React Context API
- Features:
  - TypeScript interfaces for type safety
  - Loading state management
  - User data persistence
  - Centralized auth-related functions
- Key functions:
  - `fetchCurrentUser`: Retrieves and updates user data
  - `logout`: Handles user logout and cleanup
- Provides auth state and functions to entire application
- Implements proper error handling and loading states

### API Endpoints Example
```typescript
// Backend API Routes
import express from 'express';
const router = express.Router();

// Authentication middleware
const requireAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) throw new Error('No token');
    
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ error: 'Please login' });
  }
};

// Protected admin route
router.get('/admin/users', requireAuth, async (req, res) => {
  try {
    if (!req.user.role.includes('Admin')) {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    const users = await User.find({}).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// User verification endpoint
router.put('/admin/users/:userId/verify', requireAuth, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(
      req.params.userId,
      { isVerified: true },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Verification failed' });
  }
});
```

**Explanation:**
- Backend API routes implementation using Express
- Security features:
  - JWT-based authentication middleware
  - Role-based access control
  - Protected admin routes
  - Secure cookie handling
- API endpoints:
  - GET `/admin/users`: Fetch all users (admin only)
  - PUT `/admin/users/:userId/verify`: Verify user (admin only)
- Implements proper error handling and status codes
- Uses MongoDB for data persistence
- Excludes sensitive data (password) from responses

---

<p align="center">Made with ❤️ by the Welcome Patient Team</p> 