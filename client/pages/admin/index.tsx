import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import axios from "axios";
import { useAuth } from "../../contexts";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string[];
  isVerified: boolean;
  createdAt: string;
  picture?: string;
}

const AdminDashboard = () => {
  const router = useRouter();
  const { user, loading } = useAuth();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState({
    totalUsers: 0,
    verifiedUsers: 0,
    unverifiedUsers: 0,
    subscribers: 0,
    admins: 0,
  });

  useEffect(() => {
    // Check if user is admin
    if (!loading && user) {
      if (!user.role || !user.role.includes('Admin')) {
        toast.error('Access denied. Admin privileges required.');
        router.push('/');
        return;
      }
    }

    // Only fetch users if we have a valid admin user
    if (!loading && user && user.role && user.role.includes('Admin')) {
      const fetchUsers = async () => {
        try {
          const { data } = await axios.get("/api/admin/users");
          setUsers(data);

          // Calculate stats
          const verifiedUsers = data.filter(
            (user: User) => user.isVerified
          ).length;
          const subscribers = data.filter((user: User) =>
            user.role.includes("Subscriber")
          ).length;
          const admins = data.filter((user: User) =>
            user.role.includes("Admin")
          ).length;

          setStats({
            totalUsers: data.length,
            verifiedUsers,
            unverifiedUsers: data.length - verifiedUsers,
            subscribers,
            admins,
          });
        } catch (error) {
          console.error("Error fetching users:", error);
          toast.error("Failed to fetch user data");
        } finally {
          setIsLoading(false);
        }
      };

      fetchUsers();
    }
  }, [user, loading, router]);

  // const handleVerifyUser = async (userId: string) => {
  //   try {
  //     await axios.put(`/api/admin/users/${userId}/verify`);
  //     toast.success("User verified successfully");

  //     // Update local state
  //     setUsers(
  //       users.map((user) =>
  //         user._id === userId ? { ...user, isVerified: true } : user
  //       )
  //     );

  //     // Update stats
  //     setStats((prev) => ({
  //       ...prev,
  //       verifiedUsers: prev.verifiedUsers + 1,
  //       unverifiedUsers: prev.unverifiedUsers - 1,
  //     }));
  //   } catch (error) {
  //     console.error("Error verifying user:", error);
  //     toast.error("Failed to verify user");
  //   }
  // };

  // const handleDeleteUser = async (userId: string) => {
  //   if (!window.confirm("Are you sure you want to delete this user?")) return;

  //   try {
  //     await axios.delete(`/api/admin/users/${userId}`);
  //     toast.success("User deleted successfully");

  //     // Update local state
  //     setUsers(users.filter((user) => user._id !== userId));

  //     // Update stats
  //     const deletedUser = users.find((user) => user._id === userId);
  //     if (deletedUser) {
  //       setStats((prev) => ({
  //         ...prev,
  //         totalUsers: prev.totalUsers - 1,
  //         verifiedUsers: deletedUser.isVerified
  //           ? prev.verifiedUsers - 1
  //           : prev.verifiedUsers,
  //         unverifiedUsers: deletedUser.isVerified
  //           ? prev.unverifiedUsers
  //           : prev.unverifiedUsers - 1,
  //         subscribers: deletedUser.role.includes("Subscriber")
  //           ? prev.subscribers - 1
  //           : prev.subscribers,
  //         admins: deletedUser.role.includes("Admin")
  //           ? prev.admins - 1
  //           : prev.admins,
  //       }));
  //     }
  //   } catch (error) {
  //     console.error("Error deleting user:", error);
  //     toast.error("Failed to delete user");
  //   }
  // };

  if (loading || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="py-10">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
              Admin Dashboard
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            {/* Stats */}
            <div className="mt-8">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Total Users
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-indigo-600">
                      {stats.totalUsers}
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Verified Users
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-green-600">
                      {stats.verifiedUsers}
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Unverified Users
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-yellow-600">
                      {stats.unverifiedUsers}
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Subscribers
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-blue-600">
                      {stats.subscribers}
                    </dd>
                  </div>
                </div>
                <div className="bg-white overflow-hidden shadow rounded-lg">
                  <div className="px-4 py-5 sm:p-6">
                    <dt className="text-sm font-medium text-gray-500 truncate">
                      Admins
                    </dt>
                    <dd className="mt-1 text-3xl font-semibold text-purple-600">
                      {stats.admins}
                    </dd>
                  </div>
                </div>
              </div>
            </div>

            {/* Users Table */}
            <div className="mt-8">
              <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">
                    User Management
                  </h3>
                </div>
                <div className="border-t border-gray-200">
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            User
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Role
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Status
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Joined
                          </th>
                          {/* <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Actions
                          </th> */}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((user) => (
                          <tr key={user._id}>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="flex items-center">
                                <div className="flex-shrink-0 h-10 w-10">
                                  <img
                                    className="h-10 w-10 rounded-full"
                                    src={user.picture || "/avatar.png"}
                                    alt=""
                                  />
                                </div>
                                <div className="ml-4">
                                  <div className="text-sm font-medium text-gray-900">
                                    {user.name}
                                  </div>
                                  <div className="text-sm text-gray-500">
                                    {user.email}
                                  </div>
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm text-gray-900">
                                {user.role.map((role, index) => (
                                  <span
                                    key={index}
                                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                      role === "Admin"
                                        ? "bg-purple-100 text-purple-800"
                                        : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    {role}
                                  </span>
                                ))}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span
                                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                                  user.isVerified
                                    ? "bg-green-100 text-green-800"
                                    : "bg-yellow-100 text-yellow-800"
                                }`}
                              >
                                {user.isVerified ? "Verified" : "Unverified"}
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              {new Date(user.createdAt).toLocaleDateString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                              {/* {!user.isVerified && (
                                <button
                                  onClick={() => handleVerifyUser(user._id)}
                                  className="text-indigo-600 hover:text-indigo-900 mr-4"
                                >
                                  Verify
                                </button>
                              )} */}
                              {/* <button
                                onClick={() => handleDeleteUser(user._id)}
                                className="text-red-600 hover:text-red-900"
                              >
                                Delete
                              </button> */}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
