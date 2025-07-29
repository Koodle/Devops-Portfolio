import type { NextAuthConfig } from 'next-auth';

export const authConfig = { // This object will contain the configuration options for NextAuth.js.
    pages: {
        signIn: '/login',
    },
    callbacks: {
        // logic to protect your routes. This will prevent users from accessing the dashboard pages unless they are logged in.
        // The authorized callback is used to verify if the request is authorized to access a page with Next.js Middleware. 
        // It is called before a request is completed, and it receives an object with the auth and request properties. 
        // The auth property contains the user's session, and the request property contains the incoming request.
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
            if (isOnDashboard) {
                if (isLoggedIn) return true;
                return false; // Redirect unauthenticated users to login page
            } else if (isLoggedIn) {
                return Response.redirect(new URL('/dashboard', nextUrl));
            }
            return true;
        },
    },
    providers: [], // The providers option is an array where you list different login options.
} satisfies NextAuthConfig;