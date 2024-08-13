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
    hi: 'Hi',
    title: 'Verify your email address',
    paragraph:
      'thank you for signing up for Che Store. To complete your registration, please verify your email address by clicking the button below.',
    link: 'Click here',
  },
  ar: {
    hi: 'مرحبا',
    title: 'تحقق من عنوان بريدك الإلكتروني',
    paragraph:
      'شكرًا لك على التسجيل فى شى ستور . لإكمال تسجيلك، يرجى التحقق من عنوان بريدك الإلكتروني عن طريق النقر على الزر أدناه.',
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
            width='80'
            height='50'
            alt='che-logo'
            style={logo}
          />
          <Heading style={heading}>{data.title}</Heading>
          <Text style={paragraph}>
            {data.hi} {name}
            <br />
            {data.paragraph}
          </Text>
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
