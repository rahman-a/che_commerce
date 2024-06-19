import type { Metadata } from 'next'
import { Almarai } from 'next/font/google'
import { getLangDir } from 'rtl-detect'
import { NextIntlClientProvider } from 'next-intl'
import { getMessages } from 'next-intl/server'
import Header from '@/components/Header'
import './globals.css'

const almarai = Almarai({ subsets: ['arabic'], weight: ['300', '400', '700'] })

export const metadata: Metadata = {
  title: 'Che Commerce Website',
  description: 'Welcome to Che Commerce Website',
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  const direction = getLangDir(locale)
  const messages = await getMessages()

  return (
    <html lang={locale} dir={direction}>
      <body className={almarai.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
