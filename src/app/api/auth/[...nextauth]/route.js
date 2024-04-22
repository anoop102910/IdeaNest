import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import User from "@/models/user.model";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      async authorize(credentials) {
        try {
          const user = await User.findOne({ where: { email: credentials.email } });
          console.log(user);
          if (!user) throw new Error("User not found");

          const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password);
          console.log(isPasswordCorrect);
          if (!isPasswordCorrect) throw new Error("Wrong Credentials!");

          return {
            id: user.id,
            name: user.username,
            email: user.email,
            role: user.role,
          };
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    signIn: "/auth/signin",
    error: "/error",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.role = token.role;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
});

export { handler as GET, handler as POST };
