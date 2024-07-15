import CategoryCard from '@/components/Category-Card'
import MoreProductsSliders from '@/components/More-Products-Sliders'

import HorizontalProductSlider from '@/components/Horizontal-Product-Slider'
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
    <main className='flex min-h-screen flex-col items-center mt-5'>
      <HorizontalProductSlider />
      <section
        className='flex flex-col items-center justify-center space-y-5
       md:py-5 px-4 lg:px-14 w-full md:mt-10 max-w-screen-2xl'
      >
        <h2 className='text-xl md:text-3xl sm:text-4xl md:font-bold mt-4'>
          {t('categories')}
        </h2>
        <div
          className='w-full grid grid-rows-3 lg:grid-rows-2 
        grid-flow-col gap-7 md:gap-10 xl:gap-20 place-content-center place-items-center'
        >
          <CategoryCard category='blank' />
          <CategoryCard category='embroidery' />
          <CategoryCard category='practical' />
          <CategoryCard category='occasions' />
          <CategoryCard category='shak' />
          <CategoryCard category='underwear' />
        </div>
      </section>
      <section
        className='flex flex-col items-center justify-center 
      w-full px-3 md:py-5 xs:px-6 lg:px-14 md:mt-10 max-w-screen-2xl'
      >
        <MoreProductsSliders isMainPage={true} />
      </section>
    </main>
  )
}
