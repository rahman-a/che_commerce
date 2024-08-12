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
import * as React from 'react'

interface EmailVerificationProps {
  locale: string
  payload: {
    name: string
    link: string
  }
}

const content = {
  en: {
    title: 'Verify your email address',
    paragraph:
      'thank you for signing up for Che Store. To complete your registration, please verify your email address by clicking the button below.',
    link: 'Click here',
  },
  ar: {
    title: 'تحقق من عنوان بريدك الإلكتروني',
    paragraph:
      'شكرًا لك على التسجيل في Che Store. لإكمال تسجيلك، يرجى التحقق من عنوان بريدك الإلكتروني عن طريق النقر على الزر أدناه.',
    link: 'اضغط هنا',
  },
}

export const EmailVerification = ({
  locale,
  payload: { name, link },
}: EmailVerificationProps) => {
  const data = content[locale as 'en' | 'ar']
  return (
    <Html>
      <Head />
      <Preview>{data.title}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Img
            src='https://i.ibb.co/5srmZyC/che-logo.png'
            width='42'
            height='42'
            alt='Linear'
            style={logo}
          />
          <Heading style={heading}>{data.title}</Heading>
          <Text style={paragraph}>{`Hi ${name}, ${data.paragraph}`}</Text>
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
  borderRadius: 21,
  width: 42,
  height: 42,
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
}

const paragraph = {
  margin: '0 0 15px',
  fontSize: '15px',
  lineHeight: '1.4',
  color: '#3c4149',
  padding: '20px 0',
}

const buttonContainer = {
  padding: '27px 0 27px',
}

const button = {
  backgroundColor: '#5e6ad2',
  borderRadius: '3px',
  fontWeight: '600',
  color: '#fff',
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

const code = {
  fontFamily: 'monospace',
  fontWeight: '700',
  padding: '1px 4px',
  backgroundColor: '#dfe1e4',
  letterSpacing: '-0.3px',
  fontSize: '21px',
  borderRadius: '4px',
  color: '#3c4149',
}
