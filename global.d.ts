import en from './messages/en.json'
import { DefaultSession } from 'next-auth'

// type Messages = typeof en

type FilterMessageNotStartWith__<
  Set,
  Needle extends string
> = Set extends `${Needle}${infer __X}` ? never : Set

type FilteredKeys = FilterMessageNotStartWith__<keyof typeof en, '__'>

type Messages = Pick<typeof en, FilteredKeys>

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
