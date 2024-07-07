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
      <div className='flex w-full items-center justify-center space-x-10 py-10'>
        <button className='text-xl md:text-3xl font-light rtl:ml-10'>
          {t('trending')}
        </button>
        <button className='text-xl md:text-3xl font-bold rtl:ml-10'>
          {t('best_selling')}
        </button>
        <button className='text-xl md:text-3xl font-light rtl:!ml-0'>
          {t('newest')}
        </button>
      </div>
      <div
        className='grid place-items-center grid-cols-2 md:grid-cols-4
      lg:grid-cols-5 2xl:grid-cols-6 grid-flow-row gap-4'
      >
        {products(t).map((product, index) => (
          <Link href='/products/1' key={product.id}>
            <ProductCard
              src={product.src.src}
              alt={product.alt}
              name={product.name}
              description={product.description}
              price={product.price}
              discount={product.discount}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

// function CarouselComponents() {
//   return (
//     <Carousel
//         opts={{
//           align: 'start',
//           direction: getLangDir(locale),
//         }}
//         plugins={[
//           Autoplay({
//             delay: 3500,
//             stopOnMouseEnter: true,
//             stopOnInteraction: false,
//           }),
//         ]}
//         className='w-full'
//       >
//         <CarouselContent className='space-x-3 justify-between'>
//           {products(t).map((product, index) => (
//             <CarouselItem key={product.id} className='basis-56 rtl:ml-3'>
//               <Link href='/products/1'>
//                 <ProductCard
//                   src={product.src.src}
//                   alt={product.alt}
//                   name={product.name}
//                   description={product.description}
//                   price={product.price}
//                   discount={product.discount}
//                 />
//               </Link>
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         <CarouselPrevious className='hidden md:flex' />
//         <CarouselNext className='hidden md:flex' />
//       </Carousel>
//   )
// }
