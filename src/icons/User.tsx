import React from 'react'

type SVGComponentProps = React.SVGProps<SVGSVGElement>

export function User(props: SVGComponentProps) {
  return (
    <svg
      width='1em'
      height='1em'
      viewBox='0 0 28 31'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M14 0.65332C8.74255 0.65332 4.45456 4.94132 4.45456 10.1988C4.45456 13.4854 6.13247 16.4044 8.67331 18.1249C3.81003 20.213 0.363647 25.039 0.363647 30.6533H3.09092C3.09092 27.2016 4.68893 24.1281 7.18183 22.1306L13.0625 27.5425L14 28.4374L14.9375 27.5425L20.8182 22.1306C23.3111 24.1281 24.9091 27.2016 24.9091 30.6533H27.6364C27.6364 25.039 24.19 20.213 19.3267 18.1249C21.8676 16.4044 23.5455 13.4854 23.5455 10.1988C23.5455 4.94132 19.2575 0.65332 14 0.65332ZM14 3.38059C17.782 3.38059 20.8182 6.41682 20.8182 10.1988C20.8182 13.9807 17.782 17.017 14 17.017C10.2181 17.017 7.18183 13.9807 7.18183 10.1988C7.18183 6.41682 10.2181 3.38059 14 3.38059ZM14 19.7442C15.5607 19.7442 17.0522 20.0532 18.3892 20.6391L14 24.73L9.61081 20.6391C10.9478 20.0532 12.4393 19.7442 14 19.7442Z'
        fill='currentColor'
      />
    </svg>
  )
}
