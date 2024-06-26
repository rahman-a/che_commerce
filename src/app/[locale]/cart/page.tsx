import * as React from 'react'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getLangDir } from 'rtl-detect'
import Title from '@/components/Title'
import OrderProductCard from '@/components/Order-Product-Card'
import CartItemsTotal from '@/components/Cart-Items-Total'

export interface ICartProps {
  params: {
    locale: string
  }
}

export default function Cart({ params: { locale } }: ICartProps) {
  const t = useTranslations('Cart')
  unstable_setRequestLocale(locale)
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-2 sm:px-5 md:p-10'>
      <Title title={t('cart')} direction={getLangDir(locale)} />
      <h2 className='text-xl md:text-3xl space-x-1 rtl:space-x-0 mt-5'>
        {t('cart_items')}&nbsp;:
      </h2>
      <section className='py-5 space-y-5 flex flex-col 2xl:items-center'>
        <OrderProductCard />
        <OrderProductCard />
        <OrderProductCard />
      </section>
      <section className='flex justify-end py-5'>
        <CartItemsTotal />
      </section>
    </main>
  )
}
