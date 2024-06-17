import { Logo } from '@/icons'

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center space-y-36 p-10 md:p-24'>
      <h1 className='text-2xl xl:text-3xl md:text-4xl font-bold text-center'>
        Welcome to Che Commerce Website
      </h1>
      <Logo className='w-48 h-48' />
    </main>
  )
}
