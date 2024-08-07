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
      <section className='flex md:items-center flex-col md:flex-row space-x-0 md:space-x-5 space-y-8 md:space-y-0 justify-between pt-8 pb-5'>
        <ProfileInfo />
      </section>
      <Title
        title={t('address')}
        direction={getLangDir(locale)}
        className='top-[25rem] md:top-48'
      />
      <section className='flex items-center flex-wrap space-y-6 justify-between py-5 mt-20'>
        <ProfileAddress />
      </section>
      <section className='py-5'>
        <Button
          variant='secondary'
          className='text-white bg-primary hover:bg-primary'
        >
          {t('save_continue')}
        </Button>
      </section>
    </main>
  )
}
