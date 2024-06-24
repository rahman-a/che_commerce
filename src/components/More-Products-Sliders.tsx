'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { getLangDir } from 'rtl-detect'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

import abaya1 from '@/images/demo/products/abaya_1.png'
import abaya2 from '@/images/demo/products/abaya_2.png'
import abaya3 from '@/images/demo/products/abaya_3.png'
import abaya4 from '@/images/demo/products/abaya_4.png'
import abaya5 from '@/images/demo/products/abaya_5.png'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ProductCard from './Product-Card'
type Props = {}

export default function MoreProductsSliders({}: Props) {
  const t = useTranslations('Main_Page')
  const locale = useLocale()
  const products = [
    {
      id: 1,
      src: abaya1,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
    },
    {
      id: 2,
      src: abaya2,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
      discount: 20,
    },
    {
      id: 3,
      src: abaya3,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
    },
    {
      id: 4,
      src: abaya4,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
      discount: 20,
    },
    {
      id: 5,
      src: abaya5,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
    },
    {
      id: 6,
      src: abaya3,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
    },
    {
      id: 7,
      src: abaya1,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
    },
    {
      id: 8,
      src: abaya4,
      alt: 'abaya',
      name: t('white_abaya'),
      description: t('special_design'),
      price: 100,
      discount: 20,
    },
  ]
  return (
    <div className='flex flex-col items-center w-full'>
      <div className='flex items-center space-x-10 py-10 rtl:space-x-0'>
        <button className='text-3xl font-bold rtl:ml-10'>
          {t('best_selling')}
        </button>
        <button className='text-3xl font-light'>{t('newest')}</button>
      </div>
      <Carousel
        opts={{
          align: 'start',
          direction: getLangDir(locale),
        }}
        plugins={[
          Autoplay({
            delay: 3500,
            stopOnMouseEnter: true,
            stopOnInteraction: false,
          }),
        ]}
        className='w-full'
      >
        <CarouselContent className='space-x-3 justify-between'>
          {products.map((product, index) => (
            <CarouselItem key={product.id} className='basis-56 rtl:ml-3'>
              <Link href='/products/1'>
                <ProductCard
                  src={product.src.src}
                  alt={product.alt}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  discount={product.discount}
                />
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className='hidden md:flex' />
        <CarouselNext className='hidden md:flex' />
      </Carousel>
    </div>
  )
}
