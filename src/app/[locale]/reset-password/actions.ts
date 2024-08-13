'use server'

import prisma from '@/lib/prisma'
import { getTranslations } from 'next-intl/server'
import bcrypt from 'bcryptjs'

type PrevStateType =
  | { message: string; response: string; description?: string }
  | undefined

export async function resetPasswordAction(
  id: string,
  prevState: PrevStateType,
  formData: FormData
) {
  const t = await getTranslations()
  const password = formData.get('password')
  const confirmPassword = formData.get('confirmPassword')
  if (!password || !confirmPassword) {
    return { response: 'error', message: t('Form.please_fill_all_fields') }
  }
  if (password !== confirmPassword) {
    return { response: 'error', message: t('Form.password_mismatch') }
  }
  if ((password as string).length < 6) {
    return {
      response: 'error',
      message: t('Form.min_characters', { count: 6, name: t('Form.password') }),
    }
  }
  try {
    const hashedPassword = await bcrypt.hash(password as string, 10)
    await prisma.user.update({
      where: {
        id,
      },
      data: {
        password: hashedPassword,
        resetToken: null,
        resetTokenExpiry: null,
      },
    })
    return {
      response: 'OK',
      message: t('Form.password_reset_successful'),
      description: t('Form.redirecting_to_login'),
    }
  } catch (error) {
    if (error) {
      return { response: 'error', message: t('Form.something_went_wrong') }
    }
  }
}
