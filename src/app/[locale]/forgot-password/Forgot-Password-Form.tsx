'use client'
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { type Value } from 'react-phone-number-input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PhoneInput } from '@/components/Phone-Input'
import { cn } from '@/lib/utils'
import OTPVerification from '@/components/OTP-Verification'
import { ResetPasswordForm } from '@/components/Reset-Password-Form'
import { forgotPasswordAction } from './actions'
import { toast } from 'sonner'
import { getUserByPhoneNumber } from '@/actions/user'
import { sendVerificationCode } from '@/sms'
import LoginWith from '@/components/Login-With'

type Props = {}

export default function ForgotPasswordForm({}: Props) {
  const [state, setState] = React.useState<any>()
  const [resetType, setResetType] = React.useState<string>('email')
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [phoneNo, setPhoneNo] = React.useState<Value>()
  const [isOTP, setIsOTP] = React.useState(false)
  const [isOTPVerified, setIsOTPVerified] = React.useState(false)
  const [isResetPass, setIsResetPass] = React.useState(false)
  const [userId, setUserId] = React.useState<string | null>()
  const [pending, setPending] = React.useState(false)
  const t = useTranslations()

  const resetPasswordHandler = async () => {
    setPending(true)
    let response = null
    if (resetType === 'email' && inputRef.current) {
      const email = inputRef.current?.value
      const data = new FormData()
      data.set('email', email)
      response = await forgotPasswordAction(state, data)
    }
    if (resetType === 'phone') {
      response = await getUserByPhoneNumber(phoneNo!)
      if (response?.response === 'OK') {
        const resetCode = await sendVerificationCode({ phone: phoneNo! })
        resetCode?.response === 'pending' && setIsOTP(true)
      }
    }
    setState(response)
    setPending(false)
  }

  React.useEffect(() => {
    if (state && state.message && state.response === 'error') {
      toast.error(state.message, {
        description: state.description || '',
      })
    }
    if (state && state.response === 'OK') {
      inputRef?.current && (inputRef.current.value = '')
      if (state.message) {
        toast.success(state.message, {
          description: state.description || '',
        })
      }
      if (state?.data) {
        setUserId(state.data.id)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])

  React.useEffect(() => {
    if (isOTPVerified) {
      setIsOTP(false)
      setIsResetPass(true)
    }
  }, [isOTPVerified])
  return (
    <div
      className={cn(
        'flex flex-col items-center mt-10 space-y-10 min-w-[22rem] sm:min-w-96',
        { 'space-y-5': isOTP }
      )}
    >
      <div className='flex flex-col w-full space-y-2'>
        <div className={cn('block', { hidden: isOTP || isResetPass })}>
          {/* RESET PASSWORD WITH EMAIL OR PHONE OTP */}
          <LoginWith
            resetType={resetType}
            setResetType={setResetType}
            className='mb-5'
          />
          {resetType === 'email' ? (
            <Input
              ref={inputRef}
              type='email'
              id='email'
              name='email'
              placeholder={t('Profile.enter_email')}
              className='w-full'
            />
          ) : (
            <div className='grid gap-2'>
              <PhoneInput name='phone' onChange={setPhoneNo} />
            </div>
          )}
        </div>
        {/* OTP TO RESET PASSWORD */}
        <OTPVerification
          message={t('Profile.reset_code_sent_phone')}
          label={t('Profile.enter_reset_pass_code')}
          className={isOTP && !isResetPass ? 'flex' : 'hidden'}
          triggerVerificationOnComplete={true}
          loading={setPending}
          isVerified={setIsOTPVerified}
          phone={phoneNo!}
          userId={userId!}
        />
        {/* RESET PASSWORD FORM */}
        <div className={cn('hidden', { block: isResetPass })}>
          <ResetPasswordForm id={userId!} />
        </div>
      </div>
      <Button
        type='button'
        onClick={resetPasswordHandler}
        disabled={pending}
        loading={pending}
        className={cn(
          'w-full mt-3 bg-primary text-white text-sm font-bold hover:bg-primary',
          {
            hidden: isResetPass,
          }
        )}
      >
        {isOTP
          ? t('General.continue')
          : resetType === 'email'
          ? t('Profile.send_reset_link')
          : t('Profile.send_reset_code')}
      </Button>
      <ResetPasswordFooter />
    </div>
  )
}

function ResetPasswordFooter() {
  const t = useTranslations()
  return (
    <div className='flex items-center space-x-5 rtl:space-x-auto'>
      <Link
        href='/login'
        className='text-xs text-secondary underline underline-offset-2 font-bold rtl:ml-5'
      >
        {t('Profile.login')}
      </Link>
      <Link
        href='/register'
        className='text-xs text-secondary underline underline-offset-2 font-bold'
      >
        {t('Profile.signup')}
      </Link>
    </div>
  )
}
