'use client'
import * as React from 'react'
import { useLocale } from 'next-intl'
import { useRouter } from 'next/navigation'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { cn } from '@/lib/utils'

export interface ILanguageChangerProps {
  className?: string
}
type Locale = 'en' | 'ar'

export default function LanguageChanger({ className }: ILanguageChangerProps) {
  const router = useRouter()
  const locale = useLocale() as Locale
  const language = {
    ar: 'English',
    en: 'العربية',
  }
  // change html direction based on locale
  const changeDirection = (locale: Locale) => {
    document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`
    router.push('/')
    router.refresh()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <button className={cn('bg-primary px-1 rounded-sm', className)}>
          {language[locale]}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => changeDirection('en')}>
          English
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeDirection('ar')}>
          العربية
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
