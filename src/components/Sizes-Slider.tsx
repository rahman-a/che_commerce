import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
type Props = {}

export default function SizesSlider({}: Props) {
  return (
    <Carousel
      opts={{
        align: 'start',
      }}
      className='w-full max-w-sm'
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
