import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  // Get the auth cookie
  const authCookie = request.cookies.get("authToken")?.value;

  // Check if trying to access admin routes
  if (request.nextUrl.pathname.startsWith("/admin")) {
    // If no auth cookie exists, redirect to check-email
    if (!authCookie) {
      const checkEmailUrl = new URL("/check-email", request.url);
      return NextResponse.redirect(checkEmailUrl);
    }

    try {
      // Parse the cookie value
      const authData = JSON.parse(authCookie);

      // Check if user is admin
      if (!authData.isAdmin) {
        // If user is not admin, redirect to check-email
        const checkEmailUrl = new URL("/check-email", request.url);
        return NextResponse.redirect(checkEmailUrl);
      }
    } catch (error) {
      // If cookie is invalid, redirect to check-email
      const checkEmailUrl = new URL("/check-email", request.url);
      return NextResponse.redirect(checkEmailUrl);
    }
  }

  // Allow all other routes to proceed normally
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Match all admin routes
    "/admin/:path*",
  ],
};
