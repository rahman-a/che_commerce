import React from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

type Props = {
  name: string
  price: number
  discount: number
  className?: string
}

export default function ProductNamePrice({
  name,
  price,
  discount,
  className,
}: Props) {
  const t = useTranslations('General')

  return (
    <div className={cn(`pt-4 px-5 md:p-10 md:pt-20`, className)}>
      <h3
        className='absolute top-2 right-4 md:right-16 rtl:left-8 rtl:md:left-16 rtl:right-auto line-through
         decoration-red-500 decoration-1 md:decoration-2 text-[13px] md:text-2xl'
      >
        {discount} {t('kw')}
      </h3>
      <div className='relative flex items-center justify-between mt-4 xl:mt-8'>
        <h3 className='text-xl sm:text-3xl md:text-4xl xl:text-5xl'>{name}</h3>
        <h3 className='text-xl sm:text-3xl md:text-4xl xl:text-5xl text-primary'>
          {price} {t('kw')}
        </h3>
      </div>
    </div>
  )
}
