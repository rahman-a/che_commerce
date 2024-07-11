import Title from '@/components/Title'
import React from 'react'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'

type Props = {}

export default function Payment({}: Props) {
  const locale = useLocale()
  const t = useTranslations('Orders')
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-2 sm:px-5 md:p-10 mt-20'>
      <Title
        title={t('payment')}
        direction={getLangDir(locale)}
        className='[&>h1]:-translate-x-4'
      />
    </main>
  )
}
