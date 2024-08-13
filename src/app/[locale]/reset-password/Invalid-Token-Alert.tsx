import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Link2Off } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'
import React from 'react'

type Props = {}

const InvalidTokenAlert = (props: Props) => {
  const t = useTranslations()
  return (
    <main>
      <Alert>
        <Link2Off className='h-4 w-4' />
        <AlertTitle className='mb-2'>{t('Form.invalid_link')}</AlertTitle>
        <AlertDescription>{t('Form.invalid_link_msg')}</AlertDescription>
      </Alert>
      <div className='my-2'>
        <Link href='/forgot-password' className='text-blue-500 hover:underline'>
          {t('Form.reset_password')}
        </Link>
      </div>
    </main>
  )
}

export default InvalidTokenAlert
