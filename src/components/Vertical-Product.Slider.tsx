'use client'
import React from 'react'
import Image from 'next/image'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import { Product } from '@/types/products'
import abaya1 from '@/images/demo/products/abaya_1.png'
import abaya2 from '@/images/demo/products/abaya_2.png'
import { EasyZoomOnHover } from 'easy-magnify'

type Props = {
  products: Product[]
}

export default function VerticalProductSlider({ products }: Props) {
  const [currentSrc, setCurrentSrc] = React.useState('')
  const imageRef = React.useRef<HTMLImageElement>(null)
  const t = useTranslations('Slider')
  const locale = useLocale()

  React.useEffect(() => {
    setCurrentSrc(abaya2.src)
  }, [])
  return (
    <>
      <figure
        className='grow-[2] grid place-content-center 
      w-48 h-96 md:w-auto md:h-auto translate-x-9 md:translate-x-0'
      >
        <EasyZoomOnHover
          mainImage={{
            src: currentSrc,
            alt: 'abaya',
          }}
          zoomImage={{
            src: currentSrc,
            alt: 'abaya',
          }}
          delayTimer={0}
          ref={imageRef}
        />
        {/* <Image
          src={currentSrc}
          alt='abaya'
          width={270}
          height={660}
          className='object-contain'
          unoptimized
        /> */}
      </figure>
      <Carousel
        className='min-w-60 h-[calc(100vh-130px)] mt-2 [&>div]:md:relative'
        orientation='vertical'
        opts={{
          direction: getLangDir(locale),
        }}
      >
        <CarouselContent
          className='h-full md:absolute md:inset-y-0 md:left-0 
        md:-right-4 md:overflow-y-scroll'
        >
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className='grid place-content-center h-full shrink cursor-pointer'
              onClick={() => setCurrentSrc(product.src)}
            >
              <Image
                src={product.src}
                alt={product.alt}
                width={160}
                height={160}
                className='w-20 h-20 object-contain'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  )
}
