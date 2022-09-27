import React from 'react'

const CardAnimales = (props) => {
  return (
    <div
        className='text-center'>
        <img 
            src={props.img}
            alt='Tordo de bicknell' 
            className='w-[136px]  border-[#103A62] border-[5px] rounded-full
            sm:w-[230px] md:border-[7px] mx-auto' />
        <span 
            className='font-[600] text-center text-[16px] leading-[26.88px]
            sm:text-[32px] sm:leading-[53.78px]'>
            {props.name}
        </span>
    </div>
  )
}

export default CardAnimales
