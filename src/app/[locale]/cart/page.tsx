import LanguageChanger from '@/components/Language-Changer'
import * as React from 'react'

export interface ICartProps {}

export default function Cart(props: ICartProps) {
  return (
    <main className='min-h-screen flex items-center justify-center'>
      <h1>The Cart is Empty</h1>
      <LanguageChanger />
    </main>
  )
}
