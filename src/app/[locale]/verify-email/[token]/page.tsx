import React from 'react'
import { verifyEmail } from '../actions'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { AlertCircle, CheckCheck } from 'lucide-react'
import { getTranslations } from 'next-intl/server'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import SendEmailVerification from './Send-Email-Verification'
type Props = {
  params: {
    token: string
  }
}

export default async function VerifyEmail({ params: { token } }: Props) {
  const t = await getTranslations()
  const verifyEmailToken = await verifyEmail(token)
  return (
    <main className='relative flex min-h-screen flex-col my-10 py-10 px-8 md:p-10 mt-20'>
      {verifyEmailToken?.response === 'success' ? (
        <SuccessEmailVerification />
      ) : (
        <ErrorEmailVerification />
      )}
    </main>
  )
}

async function SuccessEmailVerification() {
  const t = await getTranslations()
  return (
    <div className='flex flex-col space-y-4'>
      <Alert variant='success'>
        <CheckCheck className='h-4 w-4' />
        <AlertTitle>{t('Form.verification_successful')}</AlertTitle>
        <AlertDescription>
          {t('Form.email_verification_success')}
        </AlertDescription>
      </Alert>
      <div className='w-full text-center'>
        <Button variant='outline'>
          <Link className='hover:underline' href='/login'>
            {t('Form.go_to_login_page')}
          </Link>
        </Button>
      </div>
    </div>
  )
}

async function ErrorEmailVerification() {
  const t = await getTranslations()
  return (
    <div className='flex flex-col space-y-4'>
      <Alert variant='destructive'>
        <AlertCircle className='h-4 w-4' />
        <AlertTitle>{t('Form.error')}</AlertTitle>
        <AlertDescription>
          {t('Form.email_verification_token_wrong')}
        </AlertDescription>
      </Alert>
      <div className='w-full flex justify-center'>
        <SendEmailVerification />
      </div>
    </div>
  )
}
