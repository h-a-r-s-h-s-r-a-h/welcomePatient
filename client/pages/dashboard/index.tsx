import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '../../contexts';

const DashboardPage = () => {
  const { user, loading, logout, fetchCurrentUser } = useAuth();
  const router = useRouter();
  const [debugInfo, setDebugInfo] = useState<string>('');
  const [localUser, setLocalUser] = useState<any>(null);

  // Check localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setLocalUser(parsedUser);
        setDebugInfo(`Local user found: ${parsedUser.name} (${parsedUser.email})`);
      } catch (err) {
        console.error('Error parsing stored user:', err);
        setDebugInfo('Error parsing stored user');
      }
    } else {
      setDebugInfo('No user found in localStorage');
    }
  }, []);

  // Redirect to login if not authenticated
  useEffect(() => {
    console.log('Dashboard useEffect - user:', user);
    console.log('Dashboard useEffect - loading:', loading);
    console.log('Dashboard useEffect - localUser:', localUser);
    
    if (!loading && !user && !localUser) {
      console.log('No user found, redirecting to login');
      router.push('/login');
    } else if (user) {
      console.log('User found in dashboard:', user);
      setDebugInfo(`User loaded: ${user.name} (${user.email})`);
    } else if (localUser) {
      console.log('Using local user data:', localUser);
      setDebugInfo(`Using local user data: ${localUser.name} (${localUser.email})`);
    }
  }, [user, loading, router, localUser]);

  // Try to fetch user data if we don't have it
  useEffect(() => {
    if (!user && !loading && localUser) {
      console.log('No user data from context, but local user exists, attempting to fetch');
      fetchCurrentUser().catch(err => {
        console.error('Error fetching user in dashboard:', err);
        setDebugInfo(`Error fetching user: ${err.message}. Using local data.`);
      });
    }
  }, [user, loading, fetchCurrentUser, localUser]);

  const handleLogout = async () => {
    try {
      await logout();
      setLocalUser(null);
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-indigo-500 mb-4"></div>
        <p className="text-gray-600">Loading user data...</p>
      </div>
    );
  }

  // Use either the user from context or the local user
  const displayUser = user || localUser;

  if (!displayUser) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <p className="text-gray-600 mb-4">No user data available</p>
        <button
          onClick={() => router.push('/login')}
          className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
        >
          Go to Login
        </button>
        {debugInfo && (
          <div className="mt-4 p-4 bg-gray-100 rounded text-sm text-gray-700">
            <p>Debug Info: {debugInfo}</p>
            <p>LocalStorage user: {localStorage.getItem('user') ? 'Present' : 'Not found'}</p>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6 flex justify-between items-center">
              <div>
                <h3 className="text-lg leading-6 font-medium text-gray-900">User Profile</h3>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">Personal details and account information.</p>
                {localUser && !user && (
                  <p className="mt-1 text-sm text-yellow-600">
                    Using cached data. Some information may be outdated.
                  </p>
                )}
              </div>
              <button
                onClick={handleLogout}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Logout
              </button>
            </div>
            <div className="border-t border-gray-200">
              <dl>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Full name</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{displayUser.name}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email address</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{displayUser.email}</dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Account ID</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">{displayUser._id}</dd>
                </div>
                <div className="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Email verification status</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {displayUser.isVerified ? (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                        Verified
                      </span>
                    ) : (
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Not Verified
                      </span>
                    )}
                  </dd>
                </div>
                <div className="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                  <dt className="text-sm font-medium text-gray-500">Account created</dt>
                  <dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
                    {displayUser.createdAt ? new Date(displayUser.createdAt).toLocaleDateString() : 'N/A'}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
