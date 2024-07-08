import React from 'react'
import { Card, CardContent } from '@/components/ui/card'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'
import DiscountBadge from './Discount-Badge'
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
    <Card
      className={cn(
        `w-44 sm:w-48 h-72 md:h-80 relative bg-card shadow-md hover:shadow-none 
        transition-all duration-300 ease-in-out`,
        className
      )}
    >
      <CardContent className='h-full !p-0'>
        <div className='relative flex flex-col items-center justify-between h-full p-1'>
          {discount && (
            <DiscountBadge
              discount={discount}
              className='text-sm sm:text-md absolute top-2 left-2'
            />
          )}
          <figure className='relative w-full h-[85%] rounded-md overflow-hidden'>
            <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
          </figure>
          <div className='flex justify-center w-full space-x-2 pb-1 mt-1'>
            <div className='flex flex-col justify-end space-y-2  w-2/3'>
              <h3 className='text-sm sm:text-md font-bold'>{name}</h3>
              <p className='text-xs sm:text-sm font-light'>{description}</p>
            </div>
            <div className='flex flex-col justify-center space-y-2'>
              {discount && (
                <p className='line-through decoration-red-500 decoration-2 text-end text-sm'>
                  {(price * discount) / 100} {t('kw')}
                </p>
              )}
              <h3 className='text-sm sm:text-md text-end font-bold w-max'>
                {price} {t('kw')}
              </h3>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
