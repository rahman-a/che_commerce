import React from 'react'
import { getTranslations } from 'next-intl/server'
import ForgotPasswordForm from './Forgot-Password-Form'

type Props = {}

export default async function ForgetPassword({}: Props) {
  const t = await getTranslations()
  return (
    <main className='relative flex min-h-screen flex-col items-center my-10 py-10 px-3 sm:px-5 md:p-10 mt-20'>
      <ForgotPasswordForm />
    </main>
  )
}
