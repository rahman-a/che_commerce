import React, { Fragment } from 'react'
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
// max-w-sm -translate-x-5 rtl:translate-x-5 md:rtl:translate-x-0 md:-translate-x-0
export default function SizesSlider({}: Props) {
  const locale = useLocale()
  return (
    <Carousel
      opts={{
        align: 'start',
        direction: getLangDir(locale),
      }}
      className='w-full max-w-[16rem] md:max-w-sm'
    >
      <CarouselContent className='[&>div:last-child]:invisible'>
        {Array.from({ length: 20 }).map((_, index) => (
          <Fragment key={index}>
            <CarouselItem className='basis-8 flex items-center'>
              <div className='cursor-pointer hover:text-primary text-lg'>
                {index}5
              </div>
            </CarouselItem>
            <CarouselItem className='basis-1 flex items-center'>
              <div className='cursor-pointer hover:text-primary text-lg'>-</div>
            </CarouselItem>
          </Fragment>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
