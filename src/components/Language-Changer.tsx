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
import kwFlag from '../images/flag_of_kw.png'
import usFlag from '../images/flag_of_usa.png'
import Image from 'next/image'

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
        <DropdownMenuItem onClick={() => changeDirection('ar')}>
          <div className='flex items-center space-x-2 rtl:flex-row-reverse cursor-pointer'>
            <p className='rtl:ml-2'>العربية</p>
            <Image src={kwFlag} alt='kuwait Flag' width={24} height={17} />
          </div>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => changeDirection('en')}>
          <div className='flex items-center space-x-2 rtl:flex-row-reverse cursor-pointer'>
            <p className='rtl:ml-2'>English</p>
            <Image src={usFlag} alt='US Flag' width={24} height={17} />
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
