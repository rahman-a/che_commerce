'use client'
import React from 'react'
import Image from 'next/image'
import { getLangDir } from 'rtl-detect'
import { useTranslations, useLocale } from 'next-intl'
import { cn } from '@/lib/utils'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import { Product } from '@/types/products'
import abayaZoom1 from '@/images/demo/products/abaya_zoom_1.png'
import InnerImageZoom from 'react-inner-image-zoom'
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css'

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
  const [currentZoomSrc, setCurrentZoomSrc] = React.useState('')
  const [showOffer, setShowOffer] = React.useState(false)
  const tp = useTranslations('Product')
  const t = useTranslations('Slider')

  React.useEffect(() => {
    // setCurrentSrc(products[0].src)
    // setCurrentZoomSrc(products[0].src)
    setCurrentSrc(abayaZoom1.src)
    setCurrentZoomSrc(abayaZoom1.src)
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
      <ProductImagesThumbnails
        products={products}
        isThumbnails={isThumbnails}
        setCurrentSrc={setCurrentSrc}
      />
      <div
        className='relative flex items-center justify-center 
      sm:grow-[2] sm:grid sm:place-content-center sm:place-items-end sm:rtl:place-items-start'
      >
        <div
          className='flex justify-center relative mt-10 md:mt-10 xl:mt-8 h-full 
         rtl:translate-x-5'
        >
          <FloatTitle title={tp('special_offer')} showOffer={showOffer} />
          <InnerImageZoom
            src={currentSrc}
            zoomSrc={currentZoomSrc}
            className='!mt-8 !max-w-[60%] md:!max-w-[30%] xl:!max-w-[35%] 
            [&>span]:w-2/4 [&>span]:bottom-[15%] [&>span]:lg:bottom-[10%] 
            [&>span]:right-[20%] [&>span]:rounded-xl'
          />
        </div>
      </div>
    </>
  )
}

type ProductImagesThumbnailsProps = {
  products: Product[]
  isThumbnails?: boolean
  setCurrentSrc: (src: string) => void
}

function ProductImagesThumbnails({
  products,
  isThumbnails,
  setCurrentSrc,
}: ProductImagesThumbnailsProps) {
  const locale = useLocale()
  return (
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
        md:left-4 md:overflow-y-scroll rtl:right-4 rtl:left-0 space-y-1 md:space-y-4'
      >
        {products.map((product, index) => (
          <CarouselItem
            key={index}
            className='grid place-content-center h-20 w-full shrink cursor-pointer'
            onClick={() => setCurrentSrc(abayaZoom1.src)}
          >
            <Image
              src={abayaZoom1.src}
              alt='abaya'
              width={160}
              height={160}
              className='w-20 h-20 object-contain'
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}

function FloatTitle({
  title,
  showOffer,
}: {
  title: string
  showOffer: boolean
}) {
  return (
    <h3
      className={cn(
        `hidden text-2xl rtl:text-4xl md:text-4xl lg:text-5xl xl:text-6xl md:rtl:text-4xl lg:rtl:text-5xl xl:rtl:text-6xl font-bold 
              xl:font-normal absolute top-2 md:top-20 lg:top-14 xl:top-0 right-52 sm:left-[25rem] rtl:left-auto  sm:rtl:right-[25rem]`,
        showOffer ? 'block' : 'hidden'
      )}
    >
      {title.split(' ').map((st, idx) => (
        <p
          key={idx}
          className='first:text-primary rtl:first:text-black rtl:last:text-primary first:translate-x-5'
        >
          {st}
        </p>
      ))}
    </h3>
  )
}

// Second title
{
  /* <h3
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
        </h3> */
}
