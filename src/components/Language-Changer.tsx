import * as React from 'react'
import { useLocale } from 'next-intl'
import Link from 'next/link'

export interface ILanguageChangerProps {}
type Locale = 'en' | 'ar'

export default function LanguageChanger(props: ILanguageChangerProps) {
  const locale = useLocale() as Locale
  const language = {
    en: 'English',
    ar: 'العربية',
  }
  return (
    <Link
      href={locale === 'en' ? '/ar' : '/en'}
      className='bg-primary px-1 rounded-sm'
    >
      {language[locale]}
    </Link>
  )
}
