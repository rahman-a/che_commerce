'use server'
import bcrypt from 'bcryptjs'
import prisma from '@/lib/prisma'
import { User } from '@/types'
import { getTranslations } from 'next-intl/server'

export async function registerUser(prevState: any, data: User) {
  const t = await getTranslations()
  try {
    const { name, password, email, phone } = data
    // some user could be created without direct registration (e.g. by admin)
    // or just by entering his data on checkout page
    // the system will create the user but will not register him
    const isExistAndRegistered = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            phone: phone,
          },
        ],
        AND: {
          registeredAt: {
            not: null,
          },
        },
      },
    })
    if (isExistAndRegistered) {
      return { response: 'error', message: t('Form.account_already_exist') }
    }
    const isExistAndNotRegistered = await prisma.user.findFirst({
      where: {
        OR: [
          {
            email: email,
          },
          {
            phone: phone,
          },
        ],
        AND: {
          registeredAt: {
            equals: null,
          },
        },
      },
    })
    if (isExistAndNotRegistered) {
      const hashedPassword = await bcrypt.hash(password, 10)
      const updatedUser = await prisma.user.update({
        where: {
          id: isExistAndNotRegistered?.id,
        },
        data: {
          name,
          email,
          phone,
          password: hashedPassword,
          registeredAt: new Date(),
        },
      })
      return {
        response: 'success',
        message: t('Form.account_created'),
        data: updatedUser.id,
      }
    }
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        registeredAt: new Date(),
        shippingAddress: {
          create: {
            ...data.address,
          },
        },
      },
    })
    return {
      response: 'success',
      message: t('Form.account_created'),
      data: newUser.id,
    }
  } catch (error: any) {
    console.error(error.message)
    if (error) {
      return { response: 'error', message: error.message }
    }
  }
}
