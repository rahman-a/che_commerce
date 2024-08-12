import React from 'react'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import Title from '@/components/Title'
import { unstable_setRequestLocale } from 'next-intl/server'
import ProfileInfo from '@/components/Profile-Info'
import ProfileAddress from '@/components/Profile-Address'
import { Button } from '@/components/ui/button'

type Props = {}

export default function Profile({}: Props) {
  const locale = useLocale()
  const t = useTranslations('Profile')
  unstable_setRequestLocale(locale)

  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-8 md:p-10 mt-20'>
      <Title title={t('account_info')} direction={getLangDir(locale)} />
      <Title
        title={t('address')}
        direction={getLangDir(locale)}
        className='top-[25rem] md:top-48'
      />
      <ProfileInfo />
    </main>
  )
}
