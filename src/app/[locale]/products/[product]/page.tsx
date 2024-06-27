import React from 'react'
import VerticalProductSlider from '@/components/Vertical-Product.Slider'

import abaya1 from '@/images/demo/products/abaya_1.png'
import abaya2 from '@/images/demo/products/abaya_2.png'
import abaya3 from '@/images/demo/products/abaya_3.png'
import abaya4 from '@/images/demo/products/abaya_4.png'
import abaya5 from '@/images/demo/products/abaya_5.png'
import { type Product } from '@/types/products'

type Props = {}

export default function Product({}: Props) {
  const products: Product[] = [
    { id: 1, src: abaya1.src, alt: 'abaya1' },
    { id: 2, src: abaya2.src, alt: 'abaya2' },
    { id: 3, src: abaya3.src, alt: 'abaya3' },
    { id: 4, src: abaya4.src, alt: 'abaya4' },
    // { id: 5, src: abaya5.src, alt: 'abaya5' },
  ]
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-2 sm:px-5 md:p-10'>
      <section className='flex items-center'>
        <VerticalProductSlider products={products} />
      </section>
    </main>
  )
}
