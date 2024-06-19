import * as React from 'react'

export interface IMenuHamProps extends React.SVGProps<SVGSVGElement> {}

export function MenuHam(props: IMenuHamProps) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 17 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_2_1010)'>
        <path
          d='M11.1219 7.19531H1.90244'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.7561 3.90234H1.90244'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M13.7561 11.1465H1.90244'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M11.1219 14.439H1.90244'
          stroke='black'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </g>
      <defs>
        <clipPath id='clip0_2_1010'>
          <rect
            width='15.8049'
            height='15.8049'
            fill='white'
            transform='translate(0.585365 0.609863)'
          />
        </clipPath>
      </defs>
    </svg>
  )
}
