import NextAuth from 'next-auth';
import Auth0Provider from 'next-auth/providers/auth0';

export default NextAuth({
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID || '',
      clientSecret: process.env.AUTH0_CLIENT_SECRET || '',
      issuer: process.env.AUTH0_DOMAIN,
    }),
  ],
  callbacks: {
    async session({ session, token, user }: { session: any; token: any; user: any }) {
      session.user.role = user.role || 'USER'; 
      return session;
    },
  },
});