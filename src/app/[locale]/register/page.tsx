import React from 'react'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import Title from '@/components/Title'
import ProfileForm from '@/components/Profile-Form'

type Props = {}

export default function Register({}: Props) {
  const locale = useLocale()
  const t = useTranslations('Profile')
  unstable_setRequestLocale(locale)
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-8 md:p-10 mt-20'>
      <Title title={t('create_account')} direction={getLangDir(locale)} />
      <ProfileForm />
    </main>
  )
}
