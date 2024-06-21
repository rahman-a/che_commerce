import LanguageChanger from '@/components/Language-Changer'
import ProductSlider from '@/components/Product-Slider'
import { Logo } from '@/icons'
import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'

type Props = {
  params: {
    locale: string
  }
}

export default function Home({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale)
  const t = useTranslations('Index')
  return (
    <main className='flex min-h-screen flex-col items-center'>
      <ProductSlider />
    </main>
  )
}
