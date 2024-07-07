'use client'
import React from 'react'
import Image from 'next/image'
import { getLangDir } from 'rtl-detect'
import Autoplay from 'embla-carousel-autoplay'
import { useTranslations, useLocale } from 'next-intl'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import SliderImage from './Slider-Image'
import abaya1 from '../images/demo/products/abaya_1.png'
import abaya2 from '../images/demo/products/abaya_2.png'
import abaya3 from '../images/demo/products/abaya_3.png'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {}

const products = [
  { id: 1, src: abaya1, alt: 'abaya1', url: '/products/1' },
  { id: 2, src: abaya2, alt: 'abaya2', url: '/offers/1', isOffer: true },
  { id: 3, src: abaya3, alt: 'abaya3', url: '/products/1' },
]

export default function HorizontalProductSlider({}: Props) {
  const t = useTranslations('Slider')
  const tp = useTranslations('Product')
  const locale = useLocale()
  return (
    <section className='flex flex-col items-center justify-center'>
      <Carousel
        className='min-w-[50%] h-[80%] sm:h-[calc(100vh-130px)] mt-4'
        opts={{
          loop: true,
          direction: getLangDir(locale),
        }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
      >
        <CarouselContent className='h-full'>
          {products.map((product) => (
            <CarouselItem key={product.id} className='h-full'>
              <Link
                href={product.url}
                className='relative flex items-center justify-center h-full w-full'
              >
                {product.isOffer && (
                  <h3
                    className={cn(
                      `text-2xl md:text-4xl font-bold absolute top-0 md:top-8 left-8 sm:left-48 md:left-24 lg:left-48 xl:left-24`
                    )}
                  >
                    {tp('special_offer')
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
                <SliderImage
                  src={product.src}
                  alt={product.alt}
                  isLogo
                  isOffer={product.isOffer}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious
          className='[&>svg]:w-12 [&>svg]:h-12 w-12 h-12 text-secondary 
        bg-transparent border-0 translate-x-12 sm:translate-x-auto'
        />
        <CarouselNext
          className='[&>svg]:w-12 [&>svg]:h-12 w-12 h-12 text-secondary 
        bg-transparent border-0 -translate-x-12 sm:translate-x-auto'
        />
      </Carousel>
      <div>
        <p className='text-3xl sm:text-4xl py-2'>
          {t('more_than')}{' '}
          <span className='text-secondary italic'>{t('a_clause')}</span>
        </p>
      </div>
    </section>
  )
}
