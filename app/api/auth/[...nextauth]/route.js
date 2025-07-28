import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";


const handler = NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      // The name to display on the sign in form (e.g. "Sign in with...")
      name: "Credentials",
      // `credentials` is used to generate a form on the sign in page.
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      // You can pass any HTML attribute to the <input> tag through the object.
      credentials: {
        email: { label: "Email", type: "email", placeholder: "Enter your email id" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const url = process.env.MONGODB_URL;
        const client = new MongoClient(url);

        const dbName = 'SignUp';

        client.connect()
        // Add logic here to look up the user from the credentials supplied
        const db = client.db(dbName);
        const collection = db.collection('documents');
        const user = await collection.findOne({ email: credentials.email })
        console.log("User found :",user._id);
        
        if (user) {
          // Any object returned will be saved in `user` property of the JWT

          return user
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      }
    }),
    // ...add more providers here
  ],
  session: {
    strategy: "jwt", // Use JSON Web Tokens for session management
    maxAge: 60 * 60 * 24 * 30,
  },
  jwt:{
    maxAge: 60 * 60 * 24 * 30,
  },
  secret: process.env.NEXTAUTH_SECRET,
  // Callbacks to customize JWT and session objects
  callbacks: {
    // This callback is called whenever a JWT is created or updated.
    async jwt({ token, user }) {
      // If a user object is present (during sign-in), add the phone number to the token.
      if (user) {
        token.id=user._id
        token.email=user.email
        token.image=user.image
        token.name=user.name
        token.number=user.number
        token.address=user.address
        token.cart=user.cart
      }
      return token;
    },
    // This callback is called whenever a session is checked.
    async session({ session, token }) {
      // If the token has a phone number, add it to the session user object.
      if (token) {
        session.user.email=token.email
        session.user.id=token.id
        session.user.image=token.image
        session.user.name=token.name
        session.user.number=token.number
        session.user.address=token.address
        session.user.cart=token.cart
      }
      return session;
    },
  },
  pages: {
    signIn: '/login', // Redirects unauthenticated users to this page
  // Displays error messages on this page
  },
  // Enable debug mode in development for more verbose logging
  debug: process.env.NODE_ENV === 'development',
})

export { handler as GET, handler as POST }
