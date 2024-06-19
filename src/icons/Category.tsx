import React from 'react'
type SVGComponentProps = React.SVGProps<SVGSVGElement>

export const Category = (props: SVGComponentProps) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 30 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M0.5 12C0.5 5.64873 5.64873 0.5 12 0.5H12.5V12.5H0.5V12Z'
        fill='currentColor'
      />
      <path
        d='M12 30.5C5.64873 30.5 0.5 25.3513 0.499999 19L0.499999 18.5L12.5 18.5L12.5 30.5L12 30.5Z'
        fill='currentColor'
      />
      <path
        d='M18 0.499999C24.3513 0.5 29.5 5.64873 29.5 12L29.5 12.5L17.5 12.5L17.5 0.499999L18 0.499999Z'
        fill='currentColor'
      />
      <circle cx='23.5' cy='24.5' r='6' fill='currentColor' />
    </svg>
  )
}
