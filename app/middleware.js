import { NextRequest, NextResponse } from 'next/server';


// Middleware function to handle route protection
export function middleware(request) {
  const token = request.cookies.get('XSRF-TOKEN'); // Adjust the cookie name as per your Laravel setup
    
   // Define protected routes
//   const protectedRoutes = ['/', '/profile'];

  // Check if the current route is protected
//   const isProtectedRoute = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

  if (!token) {
    // Redirect unauthenticated users to the login page
    const loginUrl = new URL('/login', request.url);
   
    return NextResponse.redirect(loginUrl);
  }
 
  // Allow the request to continue for non-protected routes or authenticated users
  return NextResponse.next();
}

