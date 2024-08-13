import getSession from '@/lib/getSession'
import { redirect } from 'next/navigation'
import prisma from '@/lib/prisma'
import jwt, { JwtPayload } from 'jsonwebtoken'
import LanguageChanger from '@/components/Language-Changer'
import { ResetPasswordForm } from '@/components/Reset-Password-Form'
import InvalidTokenAlert from '../Invalid-Token-Alert'

interface IResetPasswordProps {
  params: {
    token: string
  }
}

export default async function ResetPassword({
  params: { token },
}: IResetPasswordProps) {
  const session = await getSession()
  const user = session?.user
  if (user) {
    redirect('/')
  }
  let userData = null
  let userId = null
  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as JwtPayload
      if (decoded._id) {
        userId = decoded._id
      }
      userData = await prisma.user.findFirst({
        where: {
          AND: [
            {
              id: decoded._id,
            },
            {
              resetTokenExpiry: {
                gte: new Date(),
              },
            },
          ],
        },
      })
    } catch (error) {
      if (error instanceof jwt.TokenExpiredError) {
        console.log('Token expired')
      }
    }
  }
  return (
    <main className='relative grid place-content-center min-h-screen'>
      <div className='fixed top-12 right-12'>
        <LanguageChanger />
      </div>
      {!!userData ? (
        <ResetPasswordForm id={userId} className='min-w-80' />
      ) : (
        <InvalidTokenAlert />
      )}
    </main>
  )
}
