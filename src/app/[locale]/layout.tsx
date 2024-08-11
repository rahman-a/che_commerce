import type { Metadata } from 'next'
import { Almarai } from 'next/font/google'
import localFont from 'next/font/local'
import { getLangDir } from 'rtl-detect'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import { unstable_setRequestLocale } from 'next-intl/server'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SessionProviderWrapper from '@/components/Session-Provider'
import getSession from '@/lib/getSession'
import { Toaster } from 'sonner'

const almarai = Almarai({
  subsets: ['arabic'],
  weight: ['300', '400', '700', '800'],
})
const dubia = localFont({
  weight: 'regular',
  src: [
    {
      path: '../../../public/assets/fonts/Dubai-Regular.woff',
      weight: '400',
      style: 'regular',
    },
    {
      path: '../../../public/assets/fonts/Dubai-Bold.woff',
      weight: '700',
      style: 'bold',
    },
    {
      path: '../../../public/assets/fonts/Dubai-Light.woff',
      weight: '300',
      style: 'light',
    },
    {
      path: '../../../public/assets/fonts/Dubai-Medium.woff',
      weight: '500',
      style: 'medium',
    },
  ],
  variable: '--font-dubai',
})

export const metadata: Metadata = {
  title: 'Che Commerce Website',
  description: 'Welcome to Che Commerce Website',
}

type Props = {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<Props>) {
  unstable_setRequestLocale(locale)
  const direction = getLangDir(locale)
  const messages = await getMessages()
  const session = await getSession()
  return (
    <html lang={locale} dir={direction}>
      <body className={`${dubia.variable} ${almarai.className}`}>
        <SessionProviderWrapper session={session}>
          <NextIntlClientProvider messages={messages}>
            <Toaster richColors position='top-center' />
            <Header />
            {children}
            <Footer />
          </NextIntlClientProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  )
}
