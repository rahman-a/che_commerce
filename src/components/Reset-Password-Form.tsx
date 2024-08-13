'use client'
import * as React from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { resetPasswordAction } from '@/app/[locale]/reset-password/actions'
import { toast } from 'sonner'
import { useRouter } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { cn } from '@/lib/utils'

export interface IResetPasswordFormProps {
  id: string
  className?: string
}

export function ResetPasswordForm({ id, className }: IResetPasswordFormProps) {
  const t = useTranslations()
  const formRef = React.useRef<HTMLFormElement>(null)
  const router = useRouter()
  const [state, formAction] = useFormState(resetPasswordAction.bind(null, id), {
    response: '',
    message: '',
    description: '',
  })
  React.useEffect(() => {
    if (state && state.response === 'error') {
      console.log('Error: ', state.message)
      toast.error(state.message, {
        description: state.description || '',
      })
    }
    if (state && state.response === 'OK') {
      formRef.current?.reset()
      toast.success(state.message, {
        description: state.description || '',
      })
      router.push('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  return (
    <form
      action={formAction}
      ref={formRef}
      className={cn('flex flex-col space-y-5', className)}
    >
      <div className='flex flex-col space-y-2'>
        <Label>{t('Form.password')}</Label>
        <Input
          type='password'
          name='password'
          placeholder={t('Profile.enter_password')}
        />
      </div>
      <div className='flex flex-col space-y-2'>
        <Label>{t('Form.confirm_password')}</Label>
        <Input
          type='password'
          name='confirmPassword'
          placeholder={t('Form.confirm_password')}
        />
      </div>
      <SubmitButton />
    </form>
  )
}

function SubmitButton() {
  const { pending } = useFormStatus()
  const t = useTranslations()
  return (
    <Button
      disabled={pending}
      loading={pending}
      className='w-full mt-5 bg-primary text-white text-sm font-bold hover:bg-primary'
    >
      {t('Form.reset_password')}
    </Button>
  )
}
