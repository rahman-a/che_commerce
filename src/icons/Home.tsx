import React from 'react'
type SVGComponentProps = React.SVGProps<SVGSVGElement>

export const Home = (props: SVGComponentProps) => {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 30 26'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15 0.5L0.5 13.5955H4.45455V25.5H12.3636V17.5637H17.6364V25.5H25.5455V13.5955H29.5L15 0.5Z'
        fill='currentColor'
      />
    </svg>
  )
}
