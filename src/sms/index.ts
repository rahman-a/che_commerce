'use server'
import twilio from 'twilio'
import dotenv from 'dotenv'
import prisma from '@/lib/prisma'
import { sendEmailVerificationToken } from '@/app/[locale]/verify-email/actions'
import { getTranslations } from 'next-intl/server'
dotenv.config()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN
const serviceSid = process.env.TWILIO_SERVICE_SID
const client = twilio(accountSid, authToken)

type SendVerification = {
  phone: string
}

type CheckVerification = {
  phone: string
  code: string
  userId?: string
}
export async function sendVerificationCode({ phone }: SendVerification) {
  try {
    const verification = await client.verify.v2
      .services(serviceSid!)
      .verifications.create({
        channel: 'sms',
        to: phone,
      })
    // pending => code sent,
    console.log('Send Status: ', verification.status)
    return { response: verification.status }
  } catch (error: any) {
    if (error) {
      console.log('Error: ', error)
      console.log('Send Error: ', error.message)
      return { response: 'error', message: error.message }
    }
  }
}

export async function checkVerificationCode({
  phone,
  code,
  userId,
}: CheckVerification) {
  const t = await getTranslations()
  try {
    const verificationCheck = await client.verify.v2
      .services(serviceSid!)
      .verificationChecks.create({
        code,
        to: phone,
      })
    // pending => incorrect code, approved =>  correct code
    if (verificationCheck.status === 'approved' && userId) {
      const user = await prisma.user.update({
        where: {
          id: userId,
        },
        data: {
          phone,
          phoneVerified: new Date(),
        },
      })
    }
    console.log('Check Status: ', verificationCheck.status)
    return { response: verificationCheck.status }
  } catch (error: any) {
    if (error) {
      console.log('Check Error: ', error.message)
      return { response: 'error', message: t('Form.something_went_wrong') }
    }
  }
}
