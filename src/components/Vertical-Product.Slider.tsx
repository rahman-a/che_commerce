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
    setCurrentSrc(abaya1.src)
  }, [])
  return (
    <>
      <figure
        className='grow-[2] grid place-content-center 
      w-48 h-96 md:w-auto md:h-auto'
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
      </figure>
      <Carousel
        className='min-w-28 h-[calc(100vh-130px)] mt-2 [&>div]:md:relative'
        orientation='vertical'
        opts={{
          direction: getLangDir(locale),
        }}
      >
        <CarouselContent
          className='h-full w-full md:absolute md:inset-y-0 
        md:left-4 md:overflow-y-scroll rtl:right-4 rtl:left-0'
        >
          {products.map((product) => (
            <CarouselItem
              key={product.id}
              className='grid place-content-center h-20 w-full shrink cursor-pointer'
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
