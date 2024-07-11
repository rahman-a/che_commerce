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
  const [showOffer, setShowOffer] = React.useState(false)
  const t = useTranslations('Slider')
  const tp = useTranslations('Product')
  const locale = useLocale()

  React.useEffect(() => {
    setCurrentSrc(abaya1.src)
    let offerTimer: NodeJS.Timeout
    if (isOffer) {
      offerTimer = setTimeout(() => {
        setShowOffer(true)
      }, 500)
    }
    return () => {
      clearTimeout(offerTimer)
    }
  }, [isOffer])
  return (
    <>
      <Carousel
        className={cn(
          'h-[30rem] sm:min-w-28 xl:h-[calc(100vh-200px)] mt-2 [&>div]:md:relative justify-self-start',
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
      <div
        className='relative flex items-center justify-center 
      sm:grow-[2] sm:grid sm:place-content-center sm:place-items-end sm:rtl:place-items-start'
      >
        <figure className='relative mt-20 md:mt-10 xl:mt-0 h-full -translate-x-10 md:translate-x-5 rtl:translate-x-5'>
          <h3
            className={cn(
              `hidden text-2xl rtl:text-4xl md:text-4xl lg:text-5xl xl:text-6xl md:rtl:text-4xl lg:rtl:text-5xl xl:rtl:text-6xl font-bold 
              xl:font-normal absolute top-2 md:top-20 lg:top-14 xl:top-0 left-40 md:left-60 rtl:left-auto rtl:right-40 md:rtl:right-60`,
              showOffer ? 'block' : 'hidden'
            )}
          >
            {tp('special_offer')
              .split(' ')
              .map((st, idx) => (
                <p
                  key={idx}
                  className='first:text-secondary rtl:first:text-black rtl:last:text-secondary first:translate-x-5'
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
              loadingIndicator: <div></div>,
            }}
          />
          {/* <h3
          className={cn(
            `hidden items-center text-xl md:text-4xl absolute -bottom-5
         md:-bottom-10 -right-9 -0 md:left-auto md:right-0 xl:right-40 xl:bottom-16 space-x-1 rtl:space-x-reverse`,
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
        </h3> */}
        </figure>
      </div>
    </>
  )
}
