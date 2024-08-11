import React from 'react'
import { LogOutIcon } from 'lucide-react'
import { useTranslations, useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { signOut } from 'next-auth/react'

type LogoutProps = {
  className?: string
}

export default function LogoutBtn({ className }: LogoutProps) {
  const t = useTranslations('Navigation')
  const locale = useLocale()
  return (
    <button
      onClick={() => signOut({ redirect: true, callbackUrl: '/login' })}
      className={cn('flex items-center md:justify-center', className)}
    >
      <LogOutIcon size={24} className='w-6 h-6 text-primary' />
      <span className='block text-[16px] font-bold ml-4 md:ml-2 rtl:ml-0 rtl:mr-4 capitalize'>
        {t('logout')}
      </span>
    </button>
  )
}
