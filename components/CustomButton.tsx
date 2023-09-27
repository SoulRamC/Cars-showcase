"use client"
import React from 'react'
import Image from 'next/image'
import { CustomButton } from '@/types'

const CustomButton = ({title, containerStyles, handleClick, btnType, textStyles, rightIcon, isDisabled}: CustomButton) => {
  return (
    <button
    disabled={false}
    type={btnType}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
    >
    <span className={`flex-1 ${textStyles}`}>
        {title}
    </span>
    {rightIcon && (
      <div className='relative w-6 h-6'>
        <Image src={rightIcon} alt='rightIcon' fill className='object-contain'></Image>
      </div>
    )}
    </button>
  )
}

export default CustomButton