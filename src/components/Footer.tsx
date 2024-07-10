import React from 'react'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import VisaImage from '../images/visa.webp'
import MastercardImage from '../images/mastercard.png'
import knetImage from '../images/knet.png'
import fatouraImage from '../images/fatoura.png'
import msiImage from '../images/msi.png'
import { ColoredInstagram, ColoredWhatsapp } from '../icons'

type Props = {}

export default function Footer({}: Props) {
  const t = useTranslations('Footer')
  return (
    <footer className='h-28 w-full main-footer py-5'>
      <section className='flex flex-col items-center space-y-2 px-5 py-5'>
        <div
          className='flex items-center justify-between flex-row 
        w-full h-full rtl:flex-row-reverse'
        >
          <div className='flex flex-col items-center justify-between space-y-2'>
            <p className='flex items-center justify-center text-[11px] sm:text-sm md:text-lg font-bold'>
              {t('payment_methods')}
            </p>
            <div className='flex items-center space-x-1 sm:space-x-2'>
              <Image
                src={MastercardImage}
                alt='Mastercard'
                width={35}
                height={35}
                title='Mastercard'
                className='w-7 h-5 sm:w-10 sm:h-8 rtl:ml-2'
              />
              <Image
                src={knetImage}
                alt='Knet'
                width={35}
                height={35}
                title='Knet Gateway'
                className='w-7 h-5 sm:w-10 sm:h-8'
              />
              <Image
                src={fatouraImage}
                alt='Fatoura'
                width={35}
                height={35}
                title='Fatoura Gateway'
                className='w-7 h-5 sm:w-10 sm:h-8 rtl:ml-0'
              />
            </div>
          </div>
          <div className='flex items-center justify-center -translate-x-3 md:translate-x-2'>
            <Image
              src={msiImage}
              alt='MSI'
              width={150}
              height={150}
              unoptimized
              className='w-[80px] h-[40px] sm:w-40 sm:h-16'
            />
          </div>

          <div className='flex flex-col items-center justify-center space-y-2'>
            <p className='flex items-center justify-center text-[11px] sm:text-sm md:text-lg font-bold'>
              {t('social_media')}
            </p>

            <div className='flex items-center space-x-2 sm:space-x-8 rtl:space-x-reverse'>
              <a href='/'>
                <ColoredWhatsapp className='w-7 h-6 sm:w-8 sm:h-8' />
              </a>
              <a href='/'>
                <ColoredInstagram className='w-7 h-7 sm:w-8 sm:h-8' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center md:translate-x-5'>
          <p className='text-xs font-light sm:text-lg'>
            {t('all_rights_reserved')} &copy;
          </p>
        </div>
      </section>
    </footer>
  )
}
