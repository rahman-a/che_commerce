import React from 'react'
import VerticalProductSlider from '@/components/Vertical-Product.Slider'
import { useTranslations, useLocale } from 'next-intl'
import { ArrowDown } from 'lucide-react'
import abaya1 from '@/images/demo/products/abaya_1.png'
import abaya2 from '@/images/demo/products/abaya_2.png'
import abaya3 from '@/images/demo/products/abaya_3.png'
import abayaAlt1 from '@/images/demo/products/product_1/abaya_1.jpg'
import abayaAlt2 from '@/images/demo/products/product_1/abaya_2.jpg'
import abayaAlt3 from '@/images/demo/products/product_1/abaya_3.jpg'
// import abaya4 from '@/images/demo/products/abaya_4.png'
// import abaya5 from '@/images/demo/products/abaya_5.png'
import { type Product } from '@/types/products'
import ProductOfferBadge from '@/components/Product-Offer-Badge'
import DiscountBadge from '@/components/Discount-Badge'
import Title from '@/components/Title'
import { getLangDir } from 'rtl-detect'
import MoreProductsSliders from '@/components/More-Products-Sliders'
import ProductOptions from '@/components/Product-Options'
import ProductNamePrice from '@/components/Product-Name-Price'

type Props = {}

export default function Product({}: Props) {
  const t = useTranslations('Main_Page')
  const tg = useTranslations('General')
  const tp = useTranslations('Product')
  const locale = useLocale()
  const products: Product[] = [
    { id: 1, src: abayaAlt1.src, alt: 'abaya1' },
    { id: 2, src: abayaAlt2.src, alt: 'abaya2' },
    { id: 3, src: abayaAlt3.src, alt: 'abaya3' },
    { id: 4, src: abayaAlt1.src, alt: 'abaya4' },
    { id: 5, src: abayaAlt2.src, alt: 'abaya5' },
    { id: 6, src: abayaAlt3.src, alt: 'abaya6' },
    { id: 7, src: abayaAlt1.src, alt: 'abaya7' },
    { id: 8, src: abayaAlt2.src, alt: 'abaya8' },
    { id: 9, src: abayaAlt3.src, alt: 'abaya9' },
  ]
  return (
    <main className='flex min-h-screen flex-col'>
      <Title
        title={tp('classic_abaya')}
        className='flex md:hidden top-24'
        direction={getLangDir(locale)}
      />
      <section
        className='relative grid grid-cols-[1fr_300px] place-content-center sm:flex sm:items-center 
        sm:flex-row-reverse sm:rtl:flex-row mt-32 md:mt-16 xl:mt-8 pt-4 px-2 sm:px-5 md:p-10'
      >
        <div className='absolute top-0 left-0 w-full h-full opacity-10 pattern' />
        <div
          className='absolute -top-5 right-5 rtl:right-auto rtl:left-5 md:left-20 md:top-20 
        flex flex-col items-end md:items-start md:rtl:items-end space-y-3'
        >
          <ProductOfferBadge
            className='p-1 md:px-3'
            text={tp('with_free_scarf')}
          />
          <DiscountBadge discount={20} />
        </div>
        <VerticalProductSlider products={products} isThumbnails />
      </section>
      <section className='relative' id='product_info'>
        <Title
          title={tp('classic_abaya')}
          className='hidden md:flex top-4'
          direction={getLangDir(locale)}
        />
        <ProductNamePrice
          price={70}
          discount={50}
          name={tp('golden_embroidery_abaya')}
        />
      </section>
      <section className='pt-6 px-5 xl:px-16'>
        <ProductOptions />
      </section>
      <section className='flex items-center justify-center md:mt-16'>
        <div
          className='flex flex-col items-center justify-center 
      w-full md:w-[calc(100vw-8rem)] px-4 lg:px-14 max-w-screen-2xl'
        >
          <MoreProductsSliders />
        </div>
      </section>
    </main>
  )
}
