import { Logo } from '@/icons'
import * as React from 'react'

interface ResetPasswordProps {
  locale: string
  payload: {
    name: string
    link: string
  }
}

const message = {
  en: {
    hi: 'hi',
    request: 'There was a request to change password',
    ignore: 'If you did not make this request then please ignore this email.',
    otherwise:
      'Otherwise, please click this link below to change your password',
    link: 'click here to reset your password',
  },
  ar: {
    hi: 'مرحبا',
    request: 'كان هناك طلب لتغيير كلمة المرور',
    ignore: 'إذا لم تقم بإجراء هذا الطلب ، يرجى تجاهل هذا البريد الإلكتروني.',
    otherwise:
      'وإلا ، يرجى النقر على الرابط أدناه لتغيير كلمة المرور الخاصة بك',
    link: 'انقر هنا لإعادة تعيين كلمة المرور الخاصة بك',
  },
}

export const PasswordReset: React.FC<Readonly<ResetPasswordProps>> = ({
  payload: { name, link },
  locale,
}) => {
  const data = message[locale as 'en' | 'ar']
  return (
    <div className='flex flex-col space-y-4'>
      <div className='my-4'>
        <Logo />
      </div>
      <h3>
        {data.hi} {name}
      </h3>
      <p>{data.request}</p>
      <p>{data.ignore}</p>
      <p>{data.otherwise}</p>
      <a href={link} className='border p-1 border-gray-300'>
        {data.link}
      </a>
    </div>
  )
}
