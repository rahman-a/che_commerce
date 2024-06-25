import React from 'react'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import Title from '@/components/Title'

type Props = {}

export default function Profile({}: Props) {
  const locale = useLocale()
  const t = useTranslations('Profile')
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-2 sm:px-5 md:p-10'>
      <Title
        title={t('account_info')}
        direction={getLangDir(locale)}
        className='[&>h1]:-translate-x-4'
      />
    </main>
  )
}
