'use client'
import React from 'react'

type Props = {}

export default function ProductQuantityControl({}: Props) {
  const [quantity, setQuantity] = React.useState(1)
  const handleIncrement = () => quantity >= 1 && setQuantity(quantity + 1)
  const handleDecrement = () => quantity > 1 && setQuantity(quantity - 1)
  return (
    <div
      className='max-w-20 flex items-center justify-between space-x-1
          text-white border border-white rounded-sm px-2'
    >
      <button className='text-xl' onClick={handleIncrement}>
        +
      </button>
      <span className='text-lg'>{quantity}</span>
      <button className='text-xl' onClick={handleDecrement}>
        -
      </button>
    </div>
  )
}
