import React from 'react'

const CardAnimales = (props) => {
  return (
    <div
      className='cursor-pointer'>
      <img
        src={props.img}
        alt='Tordo de bicknell'
        className='w-[130px] mx-auto rounded-full  bg-[#103A62] p-[4px] 
              sm:w-[230px] sm:p-[6px]'>
      </img>
      <p
        className='font-[600] text-[12px] leading-[14px] mt-[10px] text-center
            sm:text-[24px] sm:leading-[24px]'>
        {props.name}
      </p>
    </div>
  )
}

export default CardAnimales
