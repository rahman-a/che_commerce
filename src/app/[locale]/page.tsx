import LanguageChanger from '@/components/Language-Changer'
import { Logo } from '@/icons'
import { useTranslations } from 'next-intl'

export default function Home() {
  const t = useTranslations('Index')
  return (
    <main className='flex min-h-screen flex-col items-center space-y-36 p-10 md:p-24'>
      <h1 className='text-2xl xl:text-3xl md:text-4xl font-bold text-center'>
        {t('opening')}
      </h1>
      <Logo className='w-48 h-48' />
      <LanguageChanger />
    </main>
  )
}
