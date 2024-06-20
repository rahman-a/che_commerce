import LanguageChanger from '@/components/Language-Changer'
import * as React from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'

export interface ICartProps {
  params: {
    locale: string
  }
}

export default function Cart({ params: { locale } }: ICartProps) {
  unstable_setRequestLocale(locale)
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <h1>The Cart is Empty</h1>
      <LanguageChanger />
    </main>
  )
}
