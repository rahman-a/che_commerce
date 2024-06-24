import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
type Props = {
  discount?: number
  src: string
  alt: string
  name: string
  description: string
  price: number
  className?: string
}

export default function ProductCard({
  discount,
  src,
  alt,
  name,
  description,
  price,
  className,
}: Props) {
  const t = useTranslations('General')
  return (
    <Card className={cn('w-56 h-96 md:h-80 relative bg-card', className)}>
      <CardContent className='h-full !p-0'>
        <div className='relative flex flex-col items-center justify-between h-full p-1'>
          {discount && (
            <div className='absolute bg-red-500 text-white rounded-lg top-2 left-2 z-10 px-2'>
              <p className='tracking-widest'>-{discount}%</p>
            </div>
          )}
          <figure className='relative w-full h-3/4 rounded-md overflow-hidden'>
            <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
          </figure>
          <div className='flex justify-center w-full space-x-2 pb-1 mt-1'>
            <div className='flex flex-col space-y-2  w-2/3'>
              <h3 className='text-md font-bold'>{name}</h3>
              <p className='text-sm'>{description}</p>
            </div>
            <div className='flex flex-col space-y-2'>
              {discount && (
                <p className='line-through decoration-red-500 decoration-2 text-sm'>
                  {(price * discount) / 100} {t('kw')}
                </p>
              )}
              <h3 className='text-md font-bold'>
                {price} {t('kw')}
              </h3>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
