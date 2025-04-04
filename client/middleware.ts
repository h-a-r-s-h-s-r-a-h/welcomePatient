import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // Check if the path is the admin page
  if (path.startsWith('/admin')) {
    // Get the user from cookies
    const userCookie = request.cookies.get('user');
    
    if (!userCookie) {
      // Redirect to login if no user is found
      return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
      // Parse the user data
      const userData = JSON.parse(userCookie.value);
      
      // Check if the user has the Admin role
      if (!userData.role || !userData.role.includes('Admin')) {
        // Redirect to home if user is not an admin
        return NextResponse.redirect(new URL('/', request.url));
      }
    } catch (error) {
      // If there's an error parsing the user data, redirect to login
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  // Continue with the request if all checks pass
  return NextResponse.next();
}

// Configure the middleware to run on specific paths
export const config = {
  matcher: ['/admin/:path*'],
}; 