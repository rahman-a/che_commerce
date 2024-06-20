import React from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'

type LoginProps = {
  params: {
    locale: string
  }
}

export default function Login({ params: { locale } }: LoginProps) {
  unstable_setRequestLocale(locale)
  return <div>Login</div>
}
