'use client'
import React from 'react'
import Image from 'next/image'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import dynamic from 'next/dynamic'
import { cn } from '@/lib/utils'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Product } from '@/types/products'
import abaya1 from '@/images/demo/products/abaya_1.png'
import abaya2 from '@/images/demo/products/abaya_2.png'
const EasyZoomOnHover = dynamic(() => import('./ImageMagnify'), { ssr: false })

type Props = {
  products: Product[]
  isThumbnails?: boolean
  isOffer?: boolean
}

export default function VerticalProductSlider({
  products,
  isThumbnails,
  isOffer,
}: Props) {
  const [currentSrc, setCurrentSrc] = React.useState('')
  const imageRef = React.useRef<HTMLImageElement>(null)
  const t = useTranslations('Slider')
  const tp = useTranslations('Product')
  const locale = useLocale()

  React.useEffect(() => {
    setCurrentSrc(abaya1.src)
  }, [])
  return (
    <>
      <figure
        className='relative grow-[2] grid place-content-center place-items-end rtl:place-items-start
      w-48 h-96 md:w-auto md:h-auto'
      >
        <h3
          className={cn(
            `hidden text-2xl md:text-4xl font-bold absolute -top-4 md:top-20 right-3/4 md:left-24 lg:left-48 xl:left-[30rem]`,
            isOffer ? 'block' : 'hidden'
          )}
        >
          {tp('special_offer')
            .split(' ')
            .map((st, idx) => (
              <p
                key={idx}
                className='first:text-secondary rtl:first:text-black rtl:last:text-secondary last:translate-x-3'
              >
                {st}
              </p>
            ))}
        </h3>
        <EasyZoomOnHover
          mainImage={{
            src: currentSrc,
            alt: 'abaya',
          }}
          zoomImage={{
            src: currentSrc,
            alt: 'abaya',
          }}
          options={{
            delayTimer: 0,
          }}
        />
        <h3
          className={cn(
            `hidden items-center text-2xl md:text-4xl font-bold absolute 
        -bottom-28 md:-bottom-10 -right-9 -0 md:left-auto md:right-0 xl:right-40 xl:bottom-16`,
            isOffer ? 'flex' : 'hidden'
          )}
        >
          {tp('abaya_collection')
            .split(' ')
            .map((st, idx) => (
              <p
                key={idx}
                className='first:text-secondary rtl:first:text-black 
                rtl:last:text-secondary last:translate-x-3 rtl:first:ml-3'
              >
                {st}
              </p>
            ))}
        </h3>
      </figure>
      <Carousel
        className={cn(
          'min-w-max h-[32rem] sm:min-w-28 xl:h-[calc(100vh-130px)] mt-2 [&>div]:md:relative',
          isThumbnails ? 'block' : 'hidden'
        )}
        orientation='vertical'
        opts={{
          direction: getLangDir(locale),
        }}
      >
        <CarouselContent
          className='h-full w-full md:absolute md:inset-y-0 
        md:left-4 md:overflow-y-scroll rtl:right-4 rtl:left-0 space-y-2 md:space-y-5'
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
