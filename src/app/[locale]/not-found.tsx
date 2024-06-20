import { useTranslations } from 'next-intl'
import Link from 'next/link'

// Note that `app/[locale]/[...rest]/page.tsx`
// is necessary for this page to render.

export default function NotFoundPage() {
  const t = useTranslations('NotFound')

  return (
    <>
      <h1>{t('not_found')}</h1>
      <Link href='/'>{t('back_to_home')}</Link>
    </>
  )
}
