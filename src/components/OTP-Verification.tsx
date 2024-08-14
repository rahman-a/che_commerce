'use client'
import { cn } from '@/lib/utils'
import React from 'react'
import { Label } from './ui/label'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { type Value } from 'react-phone-number-input'
import { useTranslations } from 'next-intl'
import { checkVerificationCode, sendVerificationCode } from '@/sms'
import { toast } from 'sonner'
import { Button } from './ui/button'

type CommonProps = {
  label: string
  message?: string
  className?: string
  isVerified?: React.Dispatch<React.SetStateAction<boolean>>
  loading?: React.Dispatch<React.SetStateAction<boolean>>
  otp?: string
  setOTP?: React.Dispatch<React.SetStateAction<string>>
  pendingError?: string
  errorMessage?: string
  approvedMessage?: string
}

type FalseTriggerProps = {
  phone?: Value
  userId?: string
  triggerVerificationOnComplete: false
}
type TriggerOnCompeleteType = {
  phone: Value
  userId: string
  triggerVerificationOnComplete: true
}
type Props = CommonProps & (FalseTriggerProps | TriggerOnCompeleteType)

export default function OTPVerification({
  className,
  message,
  label,
  phone,
  userId,
  triggerVerificationOnComplete,
  otp,
  setOTP,
  loading,
  isVerified,
  pendingError,
  errorMessage,
  approvedMessage,
}: Props) {
  const t = useTranslations()
  const [pending, setPending] = React.useState(false)

  const codeVerificationHandler = async (code: string) => {
    if (triggerVerificationOnComplete && phone && userId) {
      setPending(true)
      const verification = await checkVerificationCode({
        phone,
        code,
        userId,
      })
      if (verification?.response === 'pending') {
        toast.error(pendingError || t('Form.phone_verification_code_wrong'))
      }
      if (verification?.response === 'error') {
        toast.error(errorMessage || t('Form.phone_verification_code_expired'))
      }
      if (verification?.response === 'approved') {
        toast.success(approvedMessage || t('Form.verification_successful'))
        isVerified && isVerified(true)
      }
      setPending(false)
      return
    }
    setOTP && setOTP(code)
  }

  const sendCodeAgainHandler = async () => {
    console.log('phone', phone)
    if (!phone) return
    setPending(true)
    const verification = await sendVerificationCode({ phone })
    if (verification?.response === 'pending') {
      toast.success(t('Form.phone_code_sent_again'))
    }
    if (verification?.response === 'error') {
      toast.error(t('Form.something_went_wrong'))
    }
    setPending(false)
  }

  React.useEffect(() => {
    loading && loading(pending)
  }, [pending])

  return (
    <div className={cn('flex-col items-center space-y-5', className)}>
      {message && <p>{message}</p>}
      <Label>{label}</Label>
      <div className='w-full flex justify-center' style={{ direction: 'ltr' }}>
        <InputOTP
          maxLength={6}
          onComplete={(value) => codeVerificationHandler(value)}
        >
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>
      <Button
        variant='link'
        className='text-blue-500'
        onClick={sendCodeAgainHandler}
        disabled={pending}
        loading={pending}
      >
        {t('Form.send_code_again')}
      </Button>
    </div>
  )
}
