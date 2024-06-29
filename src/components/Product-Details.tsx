import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
type Props = {
  className?: string
  description: {
    en: {
      title: string
      points: { id: number; text: string }[]
    }
    ar: {
      title: string
      points: { id: number; text: string }[]
    }
  }
}

export default function ProductDetails({ className, description }: Props) {
  const t = useTranslations('Product')
  const locale = useLocale() as 'en' | 'ar'
  return (
    <div className={cn('flex flex-col space-y-3', className)}>
      <h3 className='text-2xl min-w-fit'>{t('design_details')}:</h3>
      <article className='bg-primary p-2 rounded-md'>
        <h4>{description[locale].title}</h4>
        <ul>
          {description[locale].points.map((point) => (
            <li key={point.id}>{point.text}</li>
          ))}
        </ul>
      </article>
    </div>
  )
}
