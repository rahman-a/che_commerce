'use server'
import { type Value } from 'react-phone-number-input'
import { getTranslations } from 'next-intl/server'
import prisma from '@/lib/prisma'

export async function getUserByPhoneNumber(phone: Value) {
  const t = await getTranslations()
  if (!phone) {
    return { response: 'error', message: t('Profile.enter_phone_number') }
  }
  try {
    const user = await prisma.user.findUnique({
      where: { phone },
    })
    if (!user) {
      return { response: 'error', message: t('Form.account_not_exist') }
    }
    return { response: 'OK', data: user }
  } catch (error) {
    if (error) {
      return { response: 'error', message: t('Form.something_went_wrong') }
    }
  }
}
