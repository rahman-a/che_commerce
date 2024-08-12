import en from './messages/en.json'
import { DefaultSession } from 'next-auth'

type Messages = typeof en

declare global {
  interface IntlMessages extends Messages {}
}

declare module 'next-auth' {
  interface User {
    id: string
    role: 'manager' | 'employee' | 'user'
  }
  interface Session {
    user: User & DefaultSession['user']
  }
}
