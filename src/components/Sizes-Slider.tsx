import React from 'react'
import { useLocale, useTranslations } from 'next-intl'
import { getLangDir } from 'rtl-detect'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
type Props = {}

export default function SizesSlider({}: Props) {
  const locale = useLocale()
  return (
    <Carousel
      opts={{
        align: 'start',
        direction: getLangDir(locale),
      }}
      className='w-full max-w-sm -translate-x-5 rtl:translate-x-5 md:rtl:translate-x-0 md:-translate-x-0'
    >
      <CarouselContent>
        {Array.from({ length: 20 }).map((_, index) => (
          <CarouselItem key={index} className='basis-10 flex items-center'>
            <div className='cursor-pointer hover:text-secondary text-lg'>
              {index}5
            </div>
            <span className='block ml-2'>-</span>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='hidden md:flex' />
      <CarouselNext className='hidden md:flex' />
    </Carousel>
  )
}
