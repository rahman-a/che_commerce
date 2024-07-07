import React from 'react'
import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'
import { Logo, LogoTransparent } from '../icons'
import abaya1 from '../images/demo/products/abaya_1.png'
import { useTranslations } from 'next-intl'

type Props = {
  src: StaticImageData
  alt: string
  className?: string
  isLogo?: boolean
  isOffer?: boolean
}
export default function SliderImage({
  src,
  alt,
  className,
  isLogo,
  isOffer,
}: Props) {
  const t = useTranslations('Product')

  return (
    <div className='relative h-full'>
      {isLogo && (
        <div className='absolute h-full w-full flex items-center justify-center'>
          <Logo className='h-full absolute w-80 sm:w-96 z-0' />
          <LogoTransparent className='h-full absolute w-80 sm:w-96 z-20 transparent-slider-logo' />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={cn(
          'relative h-[90%] w-[85%] sm:h-full sm:w-full z-10 object-contain rtl:-translate-x-10 sm:rtl:translate-x-0',
          className
        )}
        unoptimized
      />
    </div>
  )
}
