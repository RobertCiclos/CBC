import React from 'react'

const CardAnimales = (props) => {
  return (
    <div
        className=''>
        <img 
            src={props.img}
            alt='Tordo de bicknell' 
            className='w-[136px]  border-[#103A62] border-[5px] rounded-full
            sm:w-[234px] md:border-[7px]' />
        <span 
            className='font-[600] text-center text-[16px] leading-[26.88px]
            sm:text-[32px] sm:leading-[53.78px]'>
            {props.name}
        </span>
    </div>
  )
}

export default CardAnimales
