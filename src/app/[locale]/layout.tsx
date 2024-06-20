import React from 'react'
import Header from '@/components/Header'

type Props = {}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode
  params: { locale: string }
}>) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}
