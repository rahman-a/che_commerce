import React from 'react'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
type Props = {
  discount: number
  className?: string
}

export default function DiscountBadge({ discount, className }: Props) {
  const t = useTranslations('General')

  return (
    <div
      className={cn('bg-red-500 text-white rounded-lg z-10 px-2', className)}
    >
      <p className='tracking-widest flex items-center md:text-lg xl:text-xl rtl:flex-row-reverse'>
        <span>-</span>
        <span>{discount}%</span>
      </p>
    </div>
  )
}
