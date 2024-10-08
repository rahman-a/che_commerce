'use server'
import prisma from '@/lib/prisma'
import { getTranslations } from 'next-intl/server'
import bcrypt from 'bcryptjs'
import { sendVerificationCode } from '@/sms'
import { sendEmailVerificationToken } from '../verify-email/actions'
import jwt from 'jsonwebtoken'

export async function login(prevState: any, formData: FormData) {
  const t = await getTranslations()
  const identifier = formData.get('identifier')
  const password = formData.get('password')
  const type = formData.get('type')
  if (!identifier || !password) {
    return { message: t('Form.please_fill_all_fields'), response: 'error' }
  }
  try {
    const user = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: identifier as string,
          },
          {
            phone: (identifier as string).replace(/\s/g, ''),
          },
        ],
      },
    })
    if (!user) {
      return {
        response: 'error',
        message:
          type === 'email'
            ? t('Form.email_password_invalid')
            : t('Form.phone_password_invalid'),
      }
    }

    const isMatch = await bcrypt.compare(password as string, user.password)
    if (!isMatch) {
      return {
        response: 'error',
        message:
          type === 'email'
            ? t('Form.email_password_invalid')
            : t('Form.phone_password_invalid'),
      }
    }
    if (user.status === 'inactive') {
      return { response: 'error', message: t('Profile.account_inactive') }
    }
    if (user.phoneVerified === null) {
      const verification = await sendVerificationCode({ phone: user.phone })
      if (verification?.response === 'error') {
        return { response: 'error', message: t('Form.something_went_wrong') }
      }
      if (verification?.response === 'pending') {
        return {
          response: 'phone-verification',
          message: t('Profile.phone_not_verified'),
          description: t('Profile.phone_not_verified_description'),
          data: {
            id: user.id,
            name: user.name,
            phone: user.phone,
            email: user.email,
            image: user.image,
          },
        }
      }
    }
    if (user.emailVerified === null) {
      let isValid = false
      if (user.emailVerificationToken) {
        const decoded = jwt.verify(
          user.emailVerificationToken,
          process.env.JWT_SECRET!,
          function (err, decoded) {
            if (err) {
              return { _id: '' }
            }
            return decoded as { _id: string }
          }
        ) as unknown as { _id: string }

        if (decoded?._id.toString() === user.id.toString()) {
          isValid = true
        }
      }
      !isValid &&
        (await sendEmailVerificationToken({ id: user.id, email: user.email! }))
      return {
        response: 'error',
        message: t('Profile.email_not_verified'),
        description: t('Profile.email_not_verified_description'),
      }
    }

    return {
      response: 'proceed',
      data: {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
      },
    }
  } catch (error: any) {
    console.log('Error: ', error)
    return { response: 'error', message: error.message }
  }
}
