import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type Props = {}

export default function ForgetPassword({}: Props) {
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
        <Button
          type='submit'
          className='w-full mt-5 bg-primary text-white text-sm font-bold hover:bg-primary'
        >
          {t('send_reset_link')}
        </Button>
        <div className='flex items-center space-x-5 rtl:space-x-auto'>
          <Link
            href='/login'
            className='text-xs text-secondary underline underline-offset-2 font-bold rtl:ml-5'
          >
            {t('login')}
          </Link>
          <Link
            href='/register'
            className='text-xs text-secondary underline underline-offset-2 font-bold'
          >
            {t('signup')}
          </Link>
        </div>
      </div>
    </main>
  )
}
