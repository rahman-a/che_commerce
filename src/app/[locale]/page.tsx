import CategoryCard from '@/components/Category-Card'
import MoreProductsSliders from '@/components/More-Products-Sliders'

import ProductSlider from '@/components/Product-Slider'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
  params: {
    locale: string
  }
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Main_Page')
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <ProductSlider />
      <section
        className='flex flex-col items-center justify-center space-y-10 
       py-5 px-6 lg:px-14 w-full mt-10 max-w-screen-2xl'
      >
        <h2 className='text-4xl font-bold'>{t('categories')}</h2>
        <div
          className='w-full grid grid-rows-6 sm:grid-rows-3 lg:grid-rows-2 
        grid-flow-col gap-5 place-items-center'
        >
          <CategoryCard category={t('blank')} />
          <CategoryCard category={t('embroidery')} />
          <CategoryCard category={t('practical')} />
          <CategoryCard category={t('occasions')} />
          <CategoryCard category={t('shak')} />
          <CategoryCard category={t('underwear')} />
        </div>
      </section>
      <section
        className='flex flex-col items-center justify-center 
      w-full md:w-[calc(100vw-8rem)] py-5 px-6 lg:px-14 mt-10 max-w-screen-2xl'
      >
        <MoreProductsSliders />
      </section>
    </main>
  )
}
