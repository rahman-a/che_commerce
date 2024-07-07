import React from 'react'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import { getLangDir } from 'rtl-detect'
import Title from '@/components/Title'
import SortBy, { SortItem } from '@/components/SortBy'
import OrderProductCard from '@/components/Order-Product-Card'

type Props = {
  params: {
    locale: string
  }
}

export default function Orders({ params: { locale } }: Props) {
  const t = useTranslations('Orders')
  const tg = useTranslations('Category')
  const tm = useTranslations('Main_Page')
  unstable_setRequestLocale(locale)
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-2 sm:px-5 md:p-10'>
      <Title title={t('orders')} direction={getLangDir(locale)} />
      <section className='flex items-center space-x-5 rtl:space-x-0 py-5'>
        <SortBy>
          <SortItem>{tm('newest')}</SortItem>
          <SortItem>{tg('price_low_high')}</SortItem>
          <SortItem>{tg('price_high_low')}</SortItem>
        </SortBy>
      </section>
      <section className='py-5 space-y-5 flex flex-col 2xl:items-center'>
        <OrderProductCard />
        <OrderProductCard />
        <OrderProductCard />
      </section>
    </main>
  )
}
