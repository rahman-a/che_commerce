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
import AddToCart from '@/components/Add-To-Cart'
import ScrollToSection from '@/components/Scroll-To-Section'
import OfferCollections from '@/components/Offer-Collections'

type Props = {}

export default function Product({}: Props) {
  const t = useTranslations('Main_Page')
  const tg = useTranslations('General')
  const tp = useTranslations('Product')
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
        className='flex md:hidden top-24 [&>h1]:-translate-x-4'
        direction={getLangDir(locale)}
      />
      <section className='relative flex items-center rtl:flex-row-reverse mt-20 md:mt-0 pt-4 px-2 sm:px-5 md:p-10'>
        <div className='absolute top-5 left-2 md:left-20 md:top-20 flex flex-col items-start rtl:items-end space-y-3'>
          <ProductOfferBadge
            className='p-1 md:px-3'
            text={tp('with_free_scarf')}
          />
        </div>
        <VerticalProductSlider products={products} isThumbnails isOffer />
        <ScrollToSection
          section='offer-collections'
          className='flex md:hidden'
        />
      </section>
      <section className='relative'>
        <Title
          title={tp('offer_collection')}
          className='hidden md:flex top-4 [&>h1]:-translate-x-4'
          direction={getLangDir(locale)}
        />
      </section>
      <section className='mt-8 mb-10 md:my-20 px-2 sm:px-5'>
        <OfferCollections />
      </section>
    </main>
  )
}
