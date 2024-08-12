'use client'
import React from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from '@/components/ui/input-otp'
import { type Value } from 'react-phone-number-input'
import { DialogClose } from '@radix-ui/react-dialog'
import { XIcon } from 'lucide-react'
import LoadingOverlay from './Loading-Overlay'
import { cn } from '@/lib/utils'
import { PhoneInput } from './Phone-Input'
import { useLocale, useTranslations } from 'next-intl'
import { checkVerificationCode, sendVerificationCode } from '@/sms'
import { getLangDir } from 'rtl-detect'
import { toast } from 'sonner'
type Props = {
  open: boolean
  setOpen: (open: boolean) => void
  phone: Value
  userId: string
}

export default function PhoneVerification({
  open,
  setOpen,
  phone,
  userId,
}: Props) {
  const [isPhoneInput, setIsPhoneInput] = React.useState(false)
  const [phoneNo, setPhoneNo] = React.useState<Value>(phone)
  const [pending, setPending] = React.useState(false)
  const [isPhoneVerified, setIsPhoneVerified] = React.useState(false)
  const t = useTranslations()
  const sendVerificationCodeHandler = async () => {
    setPending(true)
    const verification = await sendVerificationCode({ phone: phoneNo })
    if (verification?.response === 'pending') {
      toast.success(t('Form.phone_verification_send'))
      isPhoneInput && setIsPhoneInput(false)
    }
    if (verification?.response === 'error') {
      toast.error(t('Form.something_went_wrong'))
    }
    setPending(false)
  }
  const checkVerificationCodeHandler = async (code: string) => {
    setPending(true)
    const verification = await checkVerificationCode({
      phone: phoneNo,
      code,
      userId,
    })
    if (verification?.response === 'pending') {
      toast.error(t('Form.phone_verification_code_wrong'))
    }
    if (verification?.response === 'error') {
      toast.error(t('Form.phone_verification_code_expired'))
    }
    if (verification?.response === 'approved') {
      setIsPhoneVerified(true)
    }
    setPending(false)
  }
  return (
    <Dialog open={open} onOpenChange={setOpen} defaultOpen={true}>
      <DialogContent
        className='sm:max-w-[425px] overflow-hidden space-y-3'
        onInteractOutside={(e) => e.preventDefault()}
      >
        <LoadingOverlay show={pending} />
        <DialogHeader className='flex justify-center items-center'>
          <DialogTitle>
            {isPhoneVerified
              ? t('Form.phone_verification_code_success')
              : t('Form.Phone_verification')}
          </DialogTitle>
          <DialogDescription className='rtl:text-start'>
            {isPhoneVerified
              ? t('Form.verification_process_msg')
              : t('Form.phone_verification_msg')}
          </DialogDescription>
        </DialogHeader>
        <div
          className={cn(`flex flex-col space-y-2`, { hidden: isPhoneVerified })}
        >
          <div>
            <div
              className={cn(
                `flex items-center justify-center space-x-2 rtl:space-x-reverse`,
                {
                  hidden: isPhoneInput,
                }
              )}
            >
              <p style={{ direction: 'ltr' }}>{phoneNo}</p>
              <Button
                variant='outline'
                size='icon'
                className='w-4 h-4'
                onClick={() => setIsPhoneInput(true)}
              >
                <XIcon />
              </Button>
            </div>
            <div
              className={cn(`flex flex-col space-y-2 mb-2`, {
                hidden: !isPhoneInput,
              })}
            >
              <PhoneInput phone={phoneNo} onChange={setPhoneNo} />
              <div className='flex items-center space-x-1 rtl:space-x-reverse self-start rtl:self-end'>
                <Button
                  variant='outline'
                  onClick={() => sendVerificationCodeHandler()}
                >
                  {t('Form.send_code')}
                </Button>
                <Button
                  variant='outline'
                  onClick={() => setIsPhoneInput(false)}
                >
                  {t('General.close')}
                </Button>
              </div>
            </div>
          </div>
          <div
            className='flex flex-col items-center justify-center'
            style={{ direction: 'ltr' }}
          >
            <InputOTP
              maxLength={6}
              onComplete={(value) => checkVerificationCodeHandler(value)}
              disabled={pending || isPhoneInput}
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
            <Button
              disabled={pending || isPhoneInput}
              variant='link'
              className='text-blue-500 py-2'
              onClick={sendVerificationCodeHandler}
            >
              {t('Form.send_code_again')}
            </Button>
          </div>
        </div>
        <DialogFooter>
          <DialogClose>
            <Button variant='outline'>{t('General.close')}</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
