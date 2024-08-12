'use client'
import React from 'react'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
import { Value } from 'react-phone-number-input'
import { useRouter } from 'next/navigation'
import { useFormState } from 'react-dom'
import { toast } from 'sonner'
import { login } from './actions'
import { signIn, useSession } from 'next-auth/react'

type Props = {}

const LoginForm = (props: Props) => {
  const t = useTranslations()
  const [loginType, setLoginType] = React.useState('email')
  const [phoneNo, setPhoneNo] = React.useState<Value>()
  const [pending, setPending] = React.useState(false)
  const formRef = React.useRef<HTMLFormElement>(null)
  const session = useSession()
  const router = useRouter()
  const [state, formAction] = useFormState(login, {
    message: '',
    description: '',
    response: '',
  })
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setPending(true)
    const formData = new FormData(e.currentTarget)
    if (loginType === 'phone') {
      formData.set('identifier', phoneNo as string)
    }
    formAction(formData)
  }

  const signInHandler = async (user: any) => {
    const response = await signIn('credentials', {
      redirect: false,
      callbackUrl: '/',
      user: JSON.stringify({
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      }),
    })
    if (!response?.ok) {
      setPending(false)
      toast.error(t('Form.error_sign_in'))
    } else {
      setPending(false)
      formRef.current?.reset()
      toast.success(t('Form.login_successful'))
      router.replace('/')
      router.refresh()
    }
  }
  React.useEffect(() => {
    if (state && state.response === 'error') {
      setPending(false)
      toast.error(state.message, {
        description: state.description,
        duration: 5000,
      })
    }
    if (state && state.response === 'proceed') {
      signInHandler(state.data)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  return (
    <form
      onSubmit={submitHandler}
      className='flex flex-col items-center mt-10 space-y-10 min-w-[22rem] sm:min-w-96'
    >
      <div className='flex flex-col w-full space-y-2'>
        <Label htmlFor='email' className='text-center text-sm'>
          {t('Profile.email/phone')}
        </Label>
        <Input
          type='email'
          id='email'
          name='identifier'
          placeholder={t('Profile.enter_email_mobile')}
          className='w-full'
        />
      </div>
      <div className='flex flex-col w-full space-y-2'>
        <Label htmlFor='password' className='text-center text-sm'>
          {t('Profile.password')}
        </Label>
        <Input
          type='password'
          id='password'
          name='password'
          placeholder={t('Profile.enter_password')}
          className='w-full'
        />
        <Input type='hidden' name='type' value={loginType} />
        <Link
          href='/forgot-password'
          className='text-xs text-primary font-bold'
        >
          {t('Profile.forgot_password')}
        </Link>
      </div>
      <Button
        type='submit'
        disabled={pending}
        loading={pending}
        className='w-full mt-5 bg-primary text-white text-sm font-bold hover:bg-primary'
      >
        {t('Profile.login')}
      </Button>
      <div className='flex items-center space-x-5 rtl:space-x-auto'>
        <p className='text-xs font-bold rtl:ml-5'>
          {t('Profile.dont_have_account')}
        </p>
        <Link
          href='/register'
          className='text-xs text-secondary underline underline-offset-1 font-bold'
        >
          {t('Profile.signup')}
        </Link>
      </div>
    </form>
  )
}

export default LoginForm
