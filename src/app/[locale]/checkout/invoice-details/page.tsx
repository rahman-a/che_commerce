import React from 'react'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import Title from '@/components/Title'
import { unstable_setRequestLocale } from 'next-intl/server'
import ProfileInfo from '@/components/Profile-Info'
import ProfileAddress from '@/components/Profile-Address'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type Props = {}

export default function GuestCheckout({}: Props) {
  const locale = useLocale()
  const t = useTranslations('Orders')
  const tn = useTranslations('Navigation')
  const tp = useTranslations('Profile')
  const tc = useTranslations('Cart')
  unstable_setRequestLocale(locale)

  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-8 md:p-10'>
      <Title
        title={t('invoice_details')}
        direction={getLangDir(locale)}
        className='[&>h1]:-translate-x-4'
      />
      <div
        className='absolute top-16 md:top-3 left-2 md:left-72 flex items-center justify-center
      space-x-1 rtl:space-x-0 rtl:left-auto rtl:right-2 md:rtl:right-56'
      >
        <span className='mr-2 rtl:mr-0 rtl:ml-2'>{t('have_account?')}</span>
        <Link href='/login' className='text-primary'>
          {tn('login')}
        </Link>
        <span className='block !mx-1'>{tn('or')}</span>
        <Link href='/register' className='text-primary'>
          {tp('register')}
        </Link>
      </div>
      <Title
        title={t('shipping_address')}
        direction={getLangDir(locale)}
        className='top-[30rem] md:top-60 [&>h1]:-translate-x-4'
      />
      <section className='flex flex-col space-y-5 pt-8 pb-5 mt-10 md:mt-0'>
        <h2>{t('create_order_once')}</h2>
        <div
          className='flex md:items-center flex-col md:flex-row space-x-0 
      md:space-x-5 space-y-8 md:space-y-0 justify-between'
        >
          <ProfileInfo />
        </div>
      </section>

      <section className='flex items-center flex-wrap space-y-6 justify-between py-5 mt-20'>
        <ProfileAddress />
      </section>
      <section className='py-5'>
        <Button
          variant='secondary'
          className='text-white hover:bg-secondary'
          asChild
        >
          <Link href='/checkout/order-details'>{tc('checkout')}</Link>
        </Button>
      </section>
    </main>
  )
}
