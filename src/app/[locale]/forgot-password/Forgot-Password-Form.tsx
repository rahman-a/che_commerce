'use client'
import React from 'react'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { type Value } from 'react-phone-number-input'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { PhoneInput } from '@/components/Phone-Input'
import { cn } from '@/lib/utils'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { ResetPasswordForm } from '@/components/Reset-Password-Form'
import { useFormState } from 'react-dom'
import { forgotPasswordAction } from './actions'
import { toast } from 'sonner'
type Props = {}

export default function ForgotPasswordForm({}: Props) {
  const [state, setState] = React.useState<any>()
  const [resetType, setResetType] = React.useState<string>('email')
  const inputRef = React.useRef<HTMLInputElement>(null)
  const [phoneNo, setPhoneNo] = React.useState<Value>()
  const [isOTP, setIsOTP] = React.useState(false)
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
      console.log('Response: ', response)
    }
    setState(response)
    setPending(false)
  }

  React.useEffect(() => {
    if (state && state.response === 'error') {
      toast.error(state.message, {
        description: state.description || '',
      })
    }
    if (state && state.response === 'OK') {
      inputRef?.current && (inputRef.current.value = '')
      toast.success(state.message, {
        description: state.description || '',
      })
      if (state?.data) {
        setUserId(state.data)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
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
        <div
          className={cn('hidden flex-col items-center space-y-5', {
            flex: isOTP && !isResetPass,
          })}
        >
          <Label>{t('Profile.enter_reset_pass_code')}</Label>
          <InputOTPComponent />
        </div>
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

type LoginWithProps = {
  resetType: string
  setResetType: React.Dispatch<React.SetStateAction<string>>
  className?: string
}

function LoginWith({ resetType, setResetType, className }: LoginWithProps) {
  const t = useTranslations()
  return (
    <div className={cn('flex flex-col space-y-4 my-2', className)}>
      <Label>{t('Form.reset_with')}</Label>
      <RadioGroup
        defaultValue={resetType}
        onValueChange={setResetType}
        className='flex rtl:flex-row-reverse items-center space-x-2'
      >
        <div
          className='flex rtl:flex-row-reverse items-center space-x-2 
              rtl:space-x-reverse cursor-pointer'
        >
          <RadioGroupItem value='email' id='r1' />
          <Label htmlFor='r1'>{t('Profile.email')}</Label>
        </div>
        <div
          className='flex rtl:flex-row-reverse items-center space-x-2 
              rtl:space-x-reverse cursor-pointer'
        >
          <RadioGroupItem value='phone' id='r2' />
          <Label htmlFor='r2'>{t('Profile.phone')}</Label>
        </div>
      </RadioGroup>
    </div>
  )
}

function InputOTPComponent() {
  const t = useTranslations()
  return (
    <div className='w-full flex justify-center' style={{ direction: 'ltr' }}>
      <InputOTP maxLength={6}>
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
