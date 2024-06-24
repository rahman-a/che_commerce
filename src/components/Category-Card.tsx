import React from 'react'
import { useTranslations } from 'next-intl'
import { Logo, StrokeLine } from '../icons'
import Link from 'next/link'
type Props = {
  category: string
}

export default function CategoryCard({ category }: Props) {
  const t = useTranslations('Main_Page')
  return (
    <Link
      href={`/categories/${category}`}
      className='w-80 h-56 rounded-xl bg-primary p-5 space-y-2'
    >
      <div className='flex flex-col justify-between space-y-2 text-secondary'>
        <Logo className='w-full h-32' />
        <StrokeLine className='w-full' />
      </div>
      <h2
        className='flex items-center justify-center text-2xl font-bold 
      space-x-1 rtl:flex-row-reverse rtl:space-x-0'
      >
        <span className='text-secondary rtl:mr-1'>{t(category)}</span>
        <span>{t('abayas')}</span>
      </h2>
    </Link>
  )
}
