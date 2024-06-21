'use client'
import React from 'react'
import Image from 'next/image'
import { type UseEmblaCarouselType } from 'embla-carousel-react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from './ui/carousel'
import abaya1 from '../images/demo/products/abaya_1.png'
import abaya2 from '../images/demo/products/abaya_2.png'
import abaya4 from '../images/demo/products/abaya_4.png'
import abaya5 from '../images/demo/products/abaya_5.png'

type Props = {}

type CarouselApi = UseEmblaCarouselType[1]

const products = [
  { id: 1, src: abaya1, alt: 'abaya1' },
  { id: 2, src: abaya2, alt: 'abaya2' },
  { id: 3, src: abaya5, alt: 'abaya3' },
]

export default function ProductSlider({}: Props) {
  const [api, setApi] = React.useState<CarouselApi | undefined>(undefined)

  React.useEffect(() => {
    if (api) {
      console.log('api', api)
    }
  }, [api])
  return (
    <Carousel
      className='min-w-[50%] h-[calc(100vh-56px)] mt-4'
      setApi={(api) => setApi(api)}
      opts={{}}
    >
      <CarouselContent className='h-full'>
        {products.map((product) => (
          <CarouselItem key={product.id} className='h-full'>
            <div className='relative flex items-center justify-center h-full w-full'>
              <Image src={product.src} alt={product.alt} className='h-full' />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='text-secondary' />
      <CarouselNext className='text-secondary' />
    </Carousel>
  )
}
