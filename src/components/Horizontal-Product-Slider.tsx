'use client'
import React from 'react'
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
import Link from 'next/link'

type Props = {}

const products = [
  { id: 1, src: abaya1, alt: 'abaya1', url: '/products/1' },
  { id: 2, src: abaya2, alt: 'abaya2', url: '/offers/1', isOffer: true },
]

export default function HorizontalProductSlider({}: Props) {
  const t = useTranslations('Slider')
  const locale = useLocale()

  return (
    <section className='relative w-full flex flex-col mt-8 items-center justify-center'>
      <Carousel
        className='mt-8 w-full'
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
        <CarouselContent>
          {products.map((product) => (
            <CarouselItem key={product.id}>
              <Link
                href={product.url}
                className='relative flex items-center justify-center'
              >
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
        bg-transparent border-0 translate-x-12 sm:translate-x-auto md:left-4'
        />
        <CarouselNext
          className='[&>svg]:w-12 [&>svg]:h-12 w-12 h-12 text-secondary 
        bg-transparent border-0 -translate-x-12 sm:translate-x-auto md:right-4'
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
