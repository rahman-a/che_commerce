import React from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getTranslations } from 'next-intl/server'
import LoginForm from './LoginForm'
import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'

type LoginProps = {
  params: {
    locale: string
  }
}

export default async function Login({ params: { locale } }: LoginProps) {
  unstable_setRequestLocale(locale)
  const t = await getTranslations()
  const session = await getSession()
  const user = session?.user
  if (user) {
    redirect('/')
  }
  return (
    <main className='relative flex min-h-screen flex-col items-center my-10 py-10 px-3 sm:px-5 md:p-10 mt-20'>
      <LoginForm />
    </main>
  )
}
