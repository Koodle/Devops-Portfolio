import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],   // the matcher option from Middleware to specify that it should run on specific paths.
};

// Use the file middleware.ts (or .js) in the root of your project to define Middleware. 
// The advantage of employing Middleware for this task is that the protected routes will not even start rendering until 
// the Middleware verifies the authentication, enhancing both the security and performance of your application.
// middleware runs on the Edge runtime not the Node.js runtime