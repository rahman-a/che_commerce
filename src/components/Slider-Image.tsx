import React from 'react'
import Image, { type StaticImageData } from 'next/image'
import { cn } from '@/lib/utils'
import { Logo, LogoTransparent } from '../icons'
import abaya1 from '../images/demo/products/abaya_1.png'

type Props = {
  src: StaticImageData
  alt: string
  className?: string
  isLogo?: boolean
}
export default function SliderImage({ src, alt, className, isLogo }: Props) {
  return (
    <div className='relative h-full'>
      {isLogo && (
        <div className='absolute h-full w-full flex items-center justify-center'>
          <Logo className='h-full absolute w-96 z-0' />
          <LogoTransparent
            className='h-full absolute w-96 z-20'
            style={{ transform: 'translate(-10px, 76px)' }}
          />
        </div>
      )}
      <Image
        src={src}
        alt={alt}
        className={cn('relative h-full z-10', className)}
        unoptimized
      />
    </div>
  )
}
