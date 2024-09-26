// import { NextRequest, NextResponse } from "next/server";

 
// export function middleware(request: NextRequest) {
//   const currentUser = request.cookies.get('authToken')?.value
 
//   if (request.nextUrl.pathname.startsWith('/register')) {
//     return NextResponse.next();
//   }

//   if (currentUser && !request.nextUrl.pathname.startsWith('/')) {
//     return NextResponse.redirect(new URL('/', request.url));
//   }

//   if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
//     const loginUrl = new URL('/login', request.url);
//     return NextResponse.redirect(loginUrl);
//   }

//   return NextResponse.next();
// }
 
// export const config = {
//   // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
//   matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// };