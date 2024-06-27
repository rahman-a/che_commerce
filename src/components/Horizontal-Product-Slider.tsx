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

type Props = {}

const products = [
  { id: 1, src: abaya1, alt: 'abaya1' },
  { id: 2, src: abaya2, alt: 'abaya2' },
  { id: 3, src: abaya3, alt: 'abaya3' },
]

export default function HorizontalProductSlider({}: Props) {
  const t = useTranslations('Slider')
  const locale = useLocale()
  return (
    <section className='flex flex-col items-center justify-center'>
      <Carousel
        className='min-w-[50%] h-[calc(100vh-130px)] mt-4'
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
                href={`/products/${product.id}`}
                className='relative flex items-center justify-center h-full w-full'
              >
                <SliderImage src={product.src} alt={product.alt} isLogo />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='text-secondary w-12 h-12 hidden md:flex' />
        <CarouselNext className='text-secondary w-12 h-12 hidden md:flex' />
      </Carousel>
      <div>
        <p className='text-4xl py-2'>
          {t('more_than')}{' '}
          <span className='text-secondary italic'>{t('a_clause')}</span>
        </p>
      </div>
    </section>
  )
}
