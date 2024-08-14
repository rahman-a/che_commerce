'use server'
import jwt from 'jsonwebtoken'
import { sendEmail } from '@/emails'
import prisma from '@/lib/prisma'
import { getLocale, getTranslations } from 'next-intl/server'

export async function sendEmailVerificationToken({
  email,
}: {
  email: string
  id?: string
}) {
  const t = await getTranslations()
  const locale = await getLocale()
  try {
    const isExist = await prisma.user.findUnique({
      where: {
        email,
      },
    })
    if (!isExist) {
      return { response: 'error', message: t('Form.account_not_exist') }
    }
    const token = jwt.sign(
      { _id: isExist.id.toString() },
      process.env.JWT_SECRET!,
      {
        expiresIn: '1d',
      }
    )

    const user = await prisma.user.update({
      where: {
        id: isExist.id,
      },
      data: {
        emailVerificationToken: token as string,
      },
    })

    const url = `${process.env.APP_URL}/${locale}/verify-email/${token}`
    const sendEmailProcess = await sendEmail({
      emails: [email],
      subject: t('Form.email_verification'),
      template: 'email-verification',
      payload: {
        name: user.name!,
        link: url,
      },
    })
    if (sendEmailProcess?.response === 'error') {
      console.log('Error-Email: ', sendEmailProcess.message)
      return { response: 'error', message: sendEmailProcess.message }
    }
    console.log('Email Verification Sent')
    return { response: 'success', message: t('Form.email_verification_send') }
  } catch (error) {
    if (error instanceof Error) {
      console.log('Error-catch: ', error.message)
      return { response: 'error', message: t('Form.something_went_wrong') }
    }
  }
}

export async function verifyEmail(token: string) {
  const t = await getTranslations()
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as {
      _id: string
    }
    if (decoded._id === undefined) {
      return { response: 'error', message: t('Form.invalid_token') }
    }
    const user = await prisma.user.findFirst({
      where: {
        AND: [
          {
            id: decoded._id,
          },
          {
            emailVerificationToken: token,
          },
        ],
      },
    })
    if (!user) {
      return { response: 'error', message: t('Form.invalid_token') }
    }
    await prisma.user.update({
      where: {
        id: decoded._id,
      },
      data: {
        emailVerified: new Date(),
        emailVerificationToken: null,
      },
    })
    return {
      response: 'success',
      message: t('Form.email_verification_success'),
      data: user.id,
    }
  } catch (error) {
    if (error instanceof Error) {
      return { response: 'error', message: t('Form.something_went_wrong') }
    }
  }
}
