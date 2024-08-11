import { AuthOptions } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Credentials from 'next-auth/providers/credentials'
import prisma from './lib/prisma'

export const authConfig = {
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        user: {},
      },
      async authorize(credentials) {
        const user = JSON.parse(credentials!.user as string)
        return user
      },
    }),
  ],
  callbacks: {
    session: async ({ session, user, token }) => {
      session.user.id = token.sub!
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.AUTH_SECRET,
  pages: {
    signIn: '/login',
  },
} satisfies AuthOptions
