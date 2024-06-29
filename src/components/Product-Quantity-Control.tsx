'use client'
import React, { useCallback } from 'react'

type Props = {
  variant?: 'base' | 'rich'
}

export default function ProductQuantityControl({ variant }: Props) {
  const [quantity, setQuantity] = React.useState(1)
  const handleIncrement = useCallback(
    () => quantity >= 1 && setQuantity(quantity + 1),
    [quantity]
  )
  const handleDecrement = useCallback(
    () => quantity > 1 && setQuantity(quantity - 1),
    [quantity]
  )
  return (
    <div
      className='max-w-20 flex items-center justify-between space-x-1
          text-white border border-white rounded-sm px-2'
    >
      <button className='text-xl' onClick={handleIncrement}>
        +
      </button>
      <input type='number' name='quantity' value={quantity} />
      <button className='text-xl' onClick={handleDecrement}>
        -
      </button>
    </div>
  )
}
