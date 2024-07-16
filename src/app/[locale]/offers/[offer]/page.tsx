import React from 'react'
import VerticalProductSlider from '@/components/Vertical-Product.Slider'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowDown } from 'lucide-react'
import abaya1 from '@/images/demo/products/abaya_1.png'
// import abaya2 from '@/images/demo/products/abaya_2.png'
// import abaya3 from '@/images/demo/products/abaya_3.png'
// import abaya4 from '@/images/demo/products/abaya_4.png'
// import abaya5 from '@/images/demo/products/abaya_5.png'
import { type Product } from '@/types/products'
import ProductOfferBadge from '@/components/Product-Offer-Badge'
import DiscountBadge from '@/components/Discount-Badge'
import Title from '@/components/Title'
import { getLangDir } from 'rtl-detect'
import AddToCart from '@/components/Product-Options'
import ScrollToSection from '@/components/Scroll-To-Section'
import OfferCollections from '@/components/Offer-Collections'
import MoreProductsSliders from '@/components/More-Products-Sliders'
import ProductNamePrice from '@/components/Product-Name-Price'

type Props = {}

export default function Product({}: Props) {
  const tp = useTranslations('Product')
  const tg = useTranslations('General')
  const locale = useLocale()
  const products: Product[] = [
    { id: 1, src: abaya1.src, alt: 'abaya1' },
    { id: 2, src: abaya1.src, alt: 'abaya2' },
    { id: 3, src: abaya1.src, alt: 'abaya3' },
    { id: 4, src: abaya1.src, alt: 'abaya4' },
    { id: 5, src: abaya1.src, alt: 'abaya5' },
  ]
  return (
    <main className='flex min-h-screen flex-col'>
      <Title
        title={tp('offer_collection')}
        className='flex md:hidden top-24'
        direction={getLangDir(locale)}
      />
      <section
        className='relative grid grid-cols-[1fr_300px] place-content-center sm:flex sm:items-center 
        sm:flex-row-reverse sm:rtl:flex-row mt-32 md:mt-16 xl:mt-8 pt-4 px-2 sm:px-5 md:p-10'
      >
        <div
          className='absolute -top-5 right-5 rtl:right-auto rtl:left-5 md:left-20 md:top-20 
        flex flex-col items-end md:items-start md:rtl:items-end space-y-3'
        >
          <ProductOfferBadge
            className='p-1 md:px-3'
            text={tp('with_free_scarf')}
          />
        </div>
        <VerticalProductSlider products={products} isThumbnails isOffer />
      </section>
      <section className='relative'>
        <Title
          title={tp('offer_collection')}
          className='hidden md:flex top-8 xl:top-0'
          direction={getLangDir(locale)}
        />
        <ProductNamePrice
          name={tp('abaya_collection')}
          price={99}
          discount={20}
          className='[&>div_h3:nth-of-type(1)]:lg:invisible [&>div]:xl:mt-0'
        />
      </section>
      <section className='mt-2 px-5 sm:px-5'>
        <OfferCollections />
      </section>
      <section className='flex items-center justify-center md:mt-20'>
        <div
          className='flex flex-col items-center justify-center 
      w-full md:w-[calc(100vw-8rem)] py-5 px-4 lg:px-14 max-w-screen-2xl'
        >
          <MoreProductsSliders />
        </div>
      </section>
    </main>
  )
}
