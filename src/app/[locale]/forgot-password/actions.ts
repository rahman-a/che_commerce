'use server'
import prisma from '@/lib/prisma'
import { addDays } from 'date-fns'
import { getTranslations, getLocale } from 'next-intl/server'
import jwt from 'jsonwebtoken'
import { sendEmail } from '@/emails'

export async function forgotPasswordAction(prevState: any, formData: FormData) {
  const t = await getTranslations()
  const locale = await getLocale()
  const email = formData.get('email')
  if (!email) {
    return {
      response: 'error',
      message: t('Form.field_required_value', { field: t('Profile.email') }),
    }
  }
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: email as string,
      },
    })
    if (!user) {
      return { response: 'error', message: t('Form.account_not_exist') }
    }
    const token = jwt.sign(
      { _id: user.id.toString() },
      process.env.JWT_SECRET!,
      {
        expiresIn: '1d',
      }
    )
    await prisma.user.update({
      where: {
        id: user.id,
      },
      data: {
        resetToken: token as string,
        resetTokenExpiry: addDays(new Date(), 1),
      },
    })
    const sendEmailRes = await sendEmail({
      emails: [user.email!],
      subject: t('Form.reset_password'),
      template: 'password-reset',
      payload: {
        name: user.name!,
        link: `${process.env.APP_URL}/${locale}/reset-password/${token}`,
      },
    })
    if (sendEmailRes?.response === 'error') {
      return { response: 'error', message: sendEmailRes?.message }
    }
    return {
      response: 'OK',
      message: t('Form.reset_link_sent'),
      description: t('Form.link_expiry_at', { date: 1 }),
      data: user.id,
    }
  } catch (error: any) {
    if (error) {
      return { response: 'error', message: t('Form.something_went_wrong') }
    }
    return { response: 'error', message: t('Form.something_went_wrong') }
  }
}
