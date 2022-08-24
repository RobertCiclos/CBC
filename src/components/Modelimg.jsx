import { filterProps } from 'framer-motion'
import React from 'react'

const Modelimg = (props) => {
  return (
    <div className='item grid gap-[16px] md:gap-[32px] text-center'>
        <img src={props.img} alt="Pescadores artesanales" className="w-full h-full pointer-events-none" />
        <cite className='contSalas'>{props.description}</cite>
    </div>
  )
}

export default Modelimg
