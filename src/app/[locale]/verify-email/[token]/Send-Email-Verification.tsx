'use client'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useTranslations } from 'next-intl'
import React from 'react'
import { sendEmailVerificationToken } from '../actions'
import { toast } from 'sonner'
import { isEmailValid } from '@/lib/utils'

type Props = {}

export default function SendEmailVerification({}: Props) {
  const [email, setEmail] = React.useState('')
  const [loading, setLoading] = React.useState(false)
  const [isEmailInput, setIsEmailInput] = React.useState(false)
  const t = useTranslations()
  const sendVerificationEmailLink = async () => {
    if (!email) {
      toast.error(t('Profile.enter_email'))
      return
    }
    if (!isEmailValid(email)) {
      toast.error(t('Form.enter_valid_email'))
      return
    }
    setLoading(true)
    try {
      const emailResponse = await sendEmailVerificationToken({ email })
      if (emailResponse?.response === 'error') {
        toast.error(emailResponse.message)
      }
      if (emailResponse?.response === 'success') {
        toast.success(emailResponse.message)
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message)
      }
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className='min-w-80'>
      {isEmailInput ? (
        <div className='flex flex-col justify-center items-center space-y-2'>
          <Input
            type='email'
            placeholder={t('Profile.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
          />
          <div className='w-full flex items-center space-x-2 rtl:space-x-reverse'>
            <Button
              onClick={sendVerificationEmailLink}
              variant='outline'
              loading={loading}
              disabled={loading}
            >
              {t('General.send')}
            </Button>
            <Button
              variant='outline'
              disabled={loading}
              onClick={() => setIsEmailInput(false)}
            >
              {t('General.cancel')}
            </Button>
          </div>
        </div>
      ) : (
        <Button
          className='w-full'
          variant='outline'
          onClick={() => setIsEmailInput(true)}
        >
          {t('Form.send_link_again')}
        </Button>
      )}
    </div>
  )
}
