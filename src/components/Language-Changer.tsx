'use client'
import * as React from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import { cn } from '@/lib/utils'

export interface ILanguageChangerProps {
  className?: string
}
type Locale = 'en' | 'ar'

export default function LanguageChanger({ className }: ILanguageChangerProps) {
  const router = useRouter()
  const locale = useLocale() as Locale
  const language = {
    en: 'English',
    ar: 'العربية',
  }
  // change html direction based on locale
  const changeDirection = () => {
    document.cookie = `NEXT_LOCALE=${
      locale === 'en' ? 'ar' : 'en'
    }; path=/; max-age=31536000; SameSite=Lax`
    router.push('/')
    router.refresh()
  }
  return (
    <button
      className={cn('bg-primary px-1 rounded-sm', className)}
      onClick={changeDirection}
    >
      {language[locale]}
    </button>
  )
}
