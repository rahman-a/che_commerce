import React from 'react'
type SVGComponentProps = React.SVGProps<SVGSVGElement>

export function EditIcon(props: SVGComponentProps) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 22 17'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#clip0_129_3859)'>
        <path
          d='M15.5992 0C15.3924 0 15.1862 0.0864742 15.0283 0.257324L14.4574 0.874902L16.477 3.05967L17.0479 2.44209C17.3637 2.10124 17.3637 1.54863 17.0479 1.20693L16.1701 0.257324C16.0125 0.0864742 15.8059 0 15.5992 0ZM13.6487 1.74814L7.49805 8.40371L8.10421 8.62119L8.30524 9.71524L9.31655 9.93272L9.51758 10.5885L15.6698 3.93457L13.6487 1.74814ZM1.57143 5.1C0.704786 5.1 0 5.86245 0 6.8V15.3C0 16.2376 0.704786 17 1.57143 17H20.4286C21.2952 17 22 16.2376 22 15.3V6.8C22 5.86245 21.2952 5.1 20.4286 5.1H16.5L14.9286 6.8H20.4286V15.3H1.57143V6.8H7.07143L8.64286 5.1H1.57143ZM6.7507 10.2183L6.30106 11.5945V11.5962C6.30053 11.5978 6.30002 11.5995 6.29953 11.6012L6.29799 11.6062C6.2899 11.6301 6.28575 11.6554 6.28571 11.6809C6.28563 11.7097 6.29081 11.7382 6.30096 11.7648C6.31111 11.7915 6.32603 11.8157 6.34486 11.836C6.36368 11.8564 6.38605 11.8725 6.41066 11.8835C6.43528 11.8945 6.46166 11.9001 6.48828 11.9C6.51461 11.8999 6.54068 11.8943 6.56501 11.8834L7.84026 11.3953L6.7507 10.2183Z'
          fill='currentColor'
        />
      </g>
      <defs>
        <clipPath id='clip0_129_3859'>
          <rect width='22' height='17' fill='currentColor' />
        </clipPath>
      </defs>
    </svg>
  )
}
