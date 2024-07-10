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
      {isOffer && (
        <h3
          className={cn(
            `text-3xl md:text-6xl absolute top-0 md:top-8 left-8 md:-left-40`
          )}
        >
          {t('special_offer')
            .split(' ')
            .map((st: string, idx: number) => (
              <p
                key={idx}
                className='first:text-secondary rtl:first:text-black rtl:last:text-secondary last:translate-x-3'
              >
                {st}
              </p>
            ))}
        </h3>
      )}
      {isLogo && (
        <div className='absolute h-full w-full flex items-center justify-center'>
          <Logo className='h-full absolute w-72 sm:w-96 z-0' />
          <LogoTransparent className='h-full absolute w-72 sm:w-96 z-20 transparent-slider-logo' />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className='relative z-10 h-[25rem] md:h-[35rem] object-contain'
        // className={cn(
        //   'relative h-[90%] w-[85%] sm:h-full sm:w-full z-10 object-contain rtl:-translate-x-10 sm:rtl:translate-x-0',
        //   className
        // )}
        unoptimized
      />
    </div>
  )
}
