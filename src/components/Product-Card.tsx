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
        `w-44 sm:w-48 h-72 md:h-80 relative bg-card shadow-sm md:shadow-md hover:shadow-none 
        transition-all duration-300 ease-in-out border-none`,
        className
      )}
    >
      <CardContent className='h-full !p-0'>
        <div className='relative flex flex-col items-center justify-between h-full p-1'>
          {discount && (
            <DiscountBadge
              discount={discount}
              className='[&>p]:!text-sm absolute top-2 left-2'
            />
          )}
          <figure className='relative w-full h-[85%] rounded-md overflow-hidden'>
            <Image src={src} alt={alt} fill style={{ objectFit: 'contain' }} />
          </figure>
          <div className='flex justify-center w-full space-x-2 pb-1 mt-1'>
            <div className='flex flex-col justify-end space-y-0  w-2/3'>
              <h3 className='text-lg font-dubia font-medium'>{name}</h3>
              <p className='text-xs sm:text-sm font-dubia font-light'>
                {description}
              </p>
            </div>
            <div
              className={cn(
                `flex flex-col justify-center`,
                discount ? 'translate-y-[7px]' : 'translate-y-auto'
              )}
            >
              {discount && (
                <p
                  className='font-dubia line-through decoration-red-500 
                decoration-1 text-end text-[10px]'
                >
                  {(price * discount) / 100} {t('kw')}
                </p>
              )}
              <h3 className='font-dubia text-lg text-end w-max'>
                {price} {t('kw')}
              </h3>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
