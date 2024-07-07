import Title from '@/components/Title'
import React from 'react'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import CheckoutOrderDetails from '@/components/Checkout-Order-Details'
import CheckoutOrderSummary from '@/components/Checkout-Order-Summary'

type Props = {}

export default function Checkout({}: Props) {
  const locale = useLocale()
  const t = useTranslations('Cart')
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-2 sm:px-5 md:p-10'>
      <Title
        title={t('checkout')}
        direction={getLangDir(locale)}
        className='[&>h1]:-translate-x-4'
      />
      <div className='flex flex-col xl:flex-row gap-10 my-10'>
        <section className='w-full lg:basis-3/4'>
          <CheckoutOrderDetails />
        </section>
        <section className='w-full lg:basis-1/4'>
          <CheckoutOrderSummary />
        </section>
      </div>
    </main>
  )
}
