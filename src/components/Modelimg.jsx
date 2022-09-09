import { filterProps } from 'framer-motion'
import React from 'react'

const Modelimg = (props) => {
  return (
    <div 
      className='item grid  text-center 
      gap-[16px] pb-[28px]
      md:gap-[32px] md:pb-[56px]'>
        <img src={props.img} alt="Pescadores artesanales" className="separador" />
        { props.description &&
          <cite className='contSalas'>{props.description}</cite>
        }
    </div>
  )
}

export default Modelimg
