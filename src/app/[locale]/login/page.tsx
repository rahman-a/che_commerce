import React from 'react'
import { unstable_setRequestLocale } from 'next-intl/server'
import { useTranslations } from 'next-intl'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

type LoginProps = {
  params: {
    locale: string
  }
}

export default function Login({ params: { locale } }: LoginProps) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Profile')
  return (
    <main className='relative flex min-h-screen flex-col items-center my-10 py-10 px-3 sm:px-5 md:p-10 mt-20'>
      <div className='flex flex-col items-center mt-10 space-y-10 min-w-[22rem] sm:min-w-96'>
        <div className='flex flex-col w-full space-y-2'>
          <Label htmlFor='email' className='text-center text-sm'>
            {t('email/phone')}
          </Label>
          <Input
            type='email'
            id='email'
            name='email'
            placeholder={t('enter_email_mobile')}
            className='w-full'
          />
        </div>
        <div className='flex flex-col w-full space-y-2'>
          <Label htmlFor='password' className='text-center text-sm'>
            {t('password')}
          </Label>
          <Input
            type='password'
            id='password'
            name='password'
            placeholder={t('enter_password')}
            className='w-full'
          />
          <Link
            href='/forgot-password'
            className='text-xs text-primary font-bold'
          >
            {t('forgot_password')}
          </Link>
        </div>
        <Button
          type='submit'
          className='w-full mt-5 bg-primary text-white text-sm font-bold hover:bg-primary'
        >
          {t('login')}
        </Button>
        <div className='flex items-center space-x-5 rtl:space-x-auto'>
          <p className='text-xs font-bold rtl:ml-5'>{t('dont_have_account')}</p>
          <Link
            href='/register'
            className='text-xs text-secondary underline underline-offset-1 font-bold'
          >
            {t('signup')}
          </Link>
        </div>
      </div>
    </main>
  )
}
