'use server'
import { Resend } from 'resend'
import { PasswordReset, EmailVerification } from './templates'
import { getLocale, getTranslations } from 'next-intl/server'

type DataType = {
  template: 'email-verification' | 'password-reset'
  emails: string[]
  subject: string
  from?: string
}

type PasswordResetAndEmailVerificationPayloadType = {
  payload: {
    name: string
    link: string
  }
}

type SendEmailType = DataType & PasswordResetAndEmailVerificationPayloadType

const resend = new Resend(process.env.RESEND_API_KEY)

const Templates = {
  'email-verification': EmailVerification,
  'password-reset': PasswordReset,
}

export async function sendEmail({
  emails,
  subject,
  payload,
  template,
  from,
}: SendEmailType) {
  try {
    const t = await getTranslations()
    const locale = await getLocale()
    const { data, error } = await resend.emails.send({
      from: from ?? 'Che Commerce <noreplay@gnem.me>',
      to: emails,
      subject: subject,
      react: Templates[template]({ payload, locale }),
    })
    if (error) {
      return { response: 'error', message: error.message }
    }
    console.log('Email sent: ', data)
    return { response: 'OK', message: t('Form.email_sent') }
  } catch (error) {
    console.log('Resend Error: ', error)
    if (error instanceof Error) {
      return { response: 'error', message: error.message }
    }
  }
}
