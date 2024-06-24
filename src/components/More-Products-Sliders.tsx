'use client'
import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import { getLangDir } from 'rtl-detect'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import ProductCard from './Product-Card'
import { products } from '@/demo/products'
type Props = {}

export default function MoreProductsSliders({}: Props) {
  const t = useTranslations('Main_Page')
  const locale = useLocale()
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
          {products(t).map((product, index) => (
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
