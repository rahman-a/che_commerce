import * as React from 'react'
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
} from '@react-email/components'
import { Logo } from '@/icons'

interface ResetPasswordProps {
  locale: string
  payload: {
    name: string
    link: string
  }
}

const message = {
  en: {
    title: 'Reset Password Request',
    hi: 'hi',
    paragraph: `There was a request to change password <br/> 
    If you did not make this request then please ignore this email. <br/>
    Otherwise, please click this link below to change your password.
    `,
    link: 'click here to reset your password',
  },
  ar: {
    title: 'طلب إعادة تعيين كلمة المرور',
    hi: 'مرحبا',
    paragraph: `كان هناك طلب لتغيير كلمة المرور. <br/>
    إذا لم تقم بإجراء هذا الطلب ، يرجى تجاهل هذا البريد الإلكتروني. <br/>
    وإلا ، يرجى النقر على الرابط أدناه لتغيير كلمة المرور الخاصة بك`,
    link: 'انقر هنا لإعادة تعيين كلمة المرور الخاصة بك',
  },
}

export const PasswordReset: React.FC<Readonly<ResetPasswordProps>> = ({
  payload: { name, link },
  locale,
}) => {
  const message = {
    en: {
      title: 'Reset Password Request',
      paragraph: `Hi ${name} <br/> 
      There was a request to change password <br/> 
      If you did not make this request then please ignore this email. <br/>
      Otherwise, please click this link below to change your password.
      `,
      link: 'click here to reset your password',
    },
    ar: {
      title: 'طلب إعادة تعيين كلمة المرور',
      paragraph: ` أهلا ${name} <br/>
      كان هناك طلب لتغيير كلمة المرور. <br/>
      إذا لم تقم بإجراء هذا الطلب ، يرجى تجاهل هذا البريد الإلكتروني. <br/>
      وإلا ، يرجى النقر على الرابط أدناه لتغيير كلمة المرور الخاصة بك`,
      link: 'انقر هنا لإعادة تعيين كلمة المرور الخاصة بك',
    },
  }
  const data = message[locale as 'en' | 'ar']
  return (
    <Html>
      <Head />
      <Preview>{data.title}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src='https://i.ibb.co/5srmZyC/che-logo.png'
            width='80'
            height='50'
            alt='che-logo'
            style={logo}
          />
          <Heading style={heading}>{data.title}</Heading>
          <Text
            style={paragraph}
            dangerouslySetInnerHTML={{ __html: data.paragraph }}
          />
          <Section style={buttonContainer}>
            <Button style={button} href={link}>
              {data.link}
            </Button>
          </Section>
          <Hr style={hr} />
          <Link href='https://che-commerce.vercel.app' style={reportLink}>
            Che Store
          </Link>
        </Container>
      </Body>
    </Html>
  )
}

const logo = {
  width: 80,
  height: 50,
}

const main = {
  backgroundColor: '#ffffff',
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
}

const container = {
  margin: '0 auto',
  padding: '20px 0 48px',
  maxWidth: '560px',
}

const heading = {
  fontSize: '24px',
  letterSpacing: '-0.5px',
  lineHeight: '1.3',
  fontWeight: '400',
  color: '#484848',
  padding: '17px 0 0',
  textAlign: 'center' as const,
}

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.6',
  color: '#3c4149',
  padding: '15px 0',
  textAlign: 'center' as const,
}

const buttonContainer = {
  padding: '20px 0 20px',
}

const button = {
  backgroundColor: '#d0c2b9',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#333',
  fontSize: '15px',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'block',
  padding: '11px 23px',
}

const reportLink = {
  fontSize: '14px',
  color: '#b4becc',
}

const hr = {
  borderColor: '#dfe1e4',
  margin: '42px 0 26px',
}
