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
      className='w-40 h-32 md:w-80 md:h-56 rounded-2xl bg-primary p-2 md:p-5 
       md:space-y-2 shadow-md hover:shadow-none transition-all duration-300 ease-in-out'
    >
      <div className='flex flex-col items-center justify-between md:space-y-2 text-secondary'>
        <Logo className='w-24 h-20 md:w-full md:h-32' />
        <StrokeLine className='w-4/5' />
      </div>
      <h2
        className='flex items-center justify-center text-[13px] font-medium sm:text-sm md:text-2xl md:font-bold 
      space-x-1 rtl:flex-row-reverse rtl:space-x-0'
      >
        <span className='text-secondary rtl:mr-1'>{t(category)}</span>
        <span>{t('abayas')}</span>
      </h2>
    </Link>
  )
}
