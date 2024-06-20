import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <html>
      <body>
        <main className='min-h-screen flex flex-col items-center justify-center'>
          <h1 className='text-2xl font-bold'>404 | The Page is not found</h1>
          <Link href='/'>Go back to home</Link>
        </main>
      </body>
    </html>
  )
}
