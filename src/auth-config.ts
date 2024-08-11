import { NextAuthConfig } from 'next-auth'
import { PrismaAdapter } from '@auth/prisma-adapter'
import Credentials from 'next-auth/providers/credentials'
import prisma from './lib/prisma'

export const authConfig = {
  trustHost: true,
  adapter: PrismaAdapter(prisma),
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        user: {},
      },
      async authorize(credentials) {
        const user = JSON.parse(credentials.user as string)
        return user
      },
    }),
  ],
  callbacks: {
    jwt: async ({ token, user }) => {
      console.log('jwt', { token, user })
      return token
    },
    session: async ({ session, user, token }) => {
      session.user.id = token.sub!
      console.log('session', { session, user, token })
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
  pages: {
    signIn: '/login',
  },
} satisfies NextAuthConfig
