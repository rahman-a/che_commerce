import * as React from 'react'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getLangDir } from 'rtl-detect'
import Title from '@/components/Title'
import CartProductCard from '@/components/Cart-Product-Card'
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
    <main className='relative flex  flex-col mt-10 pt-10 px-4 md:p-10'>
      <Title title={t('cart')} direction={getLangDir(locale)} />
      <h2 className='text-xl md:text-3xl space-x-1 rtl:space-x-0 mt-5'>
        {t('cart_items')}&nbsp;:
      </h2>
      <section className=' px-2 py-5 space-y-5 flex flex-col 2xl:items-center'>
        <CartProductCard />
        <CartProductCard />
        <CartProductCard />
      </section>
      <section className='w-full sm:w-auto'>
        <div className='flex sm:justify-end bg-primary sm:bg-transparent px-4 py-5 rounded-xl'>
          <CartItemsTotal />
        </div>
      </section>
    </main>
  )
}
