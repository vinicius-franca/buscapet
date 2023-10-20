import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import { PrismaClient } from "@prisma/client";
import { compare, hash } from 'bcrypt'

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = await prisma.users.findFirst({
          where: { email: credentials.email },
        });
        if (!user) return null;

        //TO-DO Verificar encriptação.
        const passwordValid = credentials.password === user.password;

        if (!passwordValid) return null;
        return { id: user.id, email: user.email };
      },
    }),
  ],
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async session(session, user) {
      if (user) session.user.id = user.id;
      return session;
    },
    async jwt(token, user) {
      if (user) token.id = user.id;
      return token;
    },
  }
});