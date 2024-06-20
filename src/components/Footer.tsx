import React from 'react'
import Image from 'next/image'
import VisaImage from '../images/visa.webp'
import MastercardImage from '../images/mastercard.png'
import knetImage from '../images/knet.png'
import fatouraImage from '../images/fatoura.png'
import msiImage from '../images/msi.png'
import { ColoredInstagram, ColoredWhatsapp } from '../icons'

type Props = {}

export default function Footer({}: Props) {
  return (
    <footer className='h-28 w-full main-footer'>
      <section className='flex flex-col items-center space-y-5 md:space-y-0 px-5 py-2'>
        <div
          className='flex items-center justify-between flex-col md:flex-row 
        w-full h-full space-y-5 md:space-y-0 rtl:flex-row-reverse'
        >
          <div className='flex flex-col items-center justify-between space-y-2'>
            <p className='flex items-center justify-center text-sm md:text-lg font-bold'>
              Payment Methods
            </p>
            <div className='flex items-center space-x-2'>
              <Image
                src={VisaImage}
                alt='Visa'
                width={40}
                height={40}
                title='Visa Card'
                className='rtl:ml-2'
              />
              <Image
                src={MastercardImage}
                alt='Mastercard'
                width={35}
                height={35}
                title='Mastercard'
              />
              <Image
                src={knetImage}
                alt='Knet'
                width={35}
                height={35}
                title='Knet Gateway'
              />
              <Image
                src={fatouraImage}
                alt='Fatoura'
                width={35}
                height={35}
                title='Fatoura Gateway'
                className='rtl:ml-0'
              />
            </div>
          </div>
          <div className='flex items-center justify-center'>
            <Image
              src={msiImage}
              alt='MSI'
              width={150}
              height={150}
              unoptimized
            />
          </div>
          <div className='flex flex-col items-center justify-center space-y-2'>
            <p className='flex items-center justify-center text-sm md:text-lg font-bold'>
              Contact us
            </p>
            <div className='flex items-center space-x-8 rtl:space-x-0'>
              <a href='/' className='rtl:ml-8'>
                <ColoredWhatsapp className='w-8 h-8' />
              </a>
              <a href='/'>
                <ColoredInstagram className='w-8 h-8' />
              </a>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-center md:translate-x-10'>
          <p className=' text-lg'>All rights reserved &copy;</p>
        </div>
      </section>
    </footer>
  )
}
