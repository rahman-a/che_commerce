'use client'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useFormState } from 'react-dom'
import ProfileInfo from './Profile-Info'
import ProfileAddress from './Profile-Address'
import { zodResolver } from '@hookform/resolvers/zod'
import { userSchema } from '@/schema'
import { useLocale, useTranslations } from 'next-intl'
import { Form } from './ui/form'
import { User } from '@/types'
import { Button } from './ui/button'
import { type Value } from 'react-phone-number-input'
import { registerUser } from '@/app/[locale]/register/actions'
import { toast } from 'sonner'
import Title from './Title'
import PhoneVerification from './Phone-Verification'
import { getLangDir } from 'rtl-detect'

type Props = {
  data?: User
}

export default function ProfileForm({ data }: Props) {
  const t = useTranslations()
  const formRef = React.useRef<HTMLFormElement>(null)
  const [pending, setPending] = React.useState(false)
  const [userId, setUserId] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [phoneVerificationProcess, setPhoneVerificationProcess] =
    React.useState(false)
  const locale = useLocale()
  const [state, formAction] = useFormState(registerUser, {
    message: '',
    response: '',
    data: { id: '', phone: '' },
  })
  const form = useForm({
    resolver: zodResolver(userSchema(t)),
    defaultValues: {
      name: data?.name || '',
      email: data?.email || '',
      phone: data?.phone || ('' as Value),
      password: '********',
      address: {
        country: data?.address?.country || '',
        governorate: data?.address?.governorate || '',
        region: data?.address?.region || '',
        block: data?.address?.block || '',
        street: data?.address?.street || '',
        neighborhood: data?.address?.neighborhood || '',
        building: data?.address?.building || '',
        floor: data?.address?.floor || '',
        apartment: data?.address?.apartment || '',
        type: data?.address?.type || 'home',
        primary: data?.address?.primary || true,
        note: data?.address?.note || '',
      },
    },
  })
  const submitHandler = form.handleSubmit((payload: User) => {
    setPending(true)
    formAction(payload)
  })
  React.useEffect(() => {
    if (state && state.response === 'error') {
      setPending(false)
      toast.error(state.message)
    }
    if (state && state.response === 'success') {
      setPending(false)
      formRef.current?.reset()
      toast.success(state.message)
      if (typeof state.data === 'object') {
        console.log('state.data: ', state.data)
        setUserId(state.data?.id!)
        setPhone(state.data.phone)
      }
      setPhoneVerificationProcess(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state])
  return (
    <Form {...form}>
      {phoneVerificationProcess && (
        <PhoneVerification
          open={phoneVerificationProcess}
          setOpen={setPhoneVerificationProcess}
          phone={phone! as Value}
          userId={userId!}
        />
      )}
      <form onSubmit={submitHandler} ref={formRef}>
        <section className='flex items-center flex-wrap space-y-6 justify-between'>
          <ProfileInfo />
        </section>
        <section className='relative flex flex-col md:flex-row items-center flex-wrap space-y-6 justify-between py-5 mt-20'>
          <Title
            title={t('Profile.address')}
            direction={getLangDir(locale)}
            className='-right-14 -top-4'
          />
          <ProfileAddress />
        </section>
        <section className='py-5'>
          <Button
            disabled={pending}
            loading={pending}
            variant='secondary'
            className='text-white hover:bg-primary bg-primary'
          >
            {t('Form.save_continue')}
          </Button>
        </section>
      </form>
    </Form>
  )
}
