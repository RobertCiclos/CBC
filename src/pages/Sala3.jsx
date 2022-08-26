import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Sala3 = () => {
  const dataSala3 = require('../bd/Sala3.json')
  const istablet = useMediaQuery({query: '(min-width: 1280px)'})

  return (
    <div
      className='pt-[85px] overflow-x-hidden'>
      <section
        id='section1'
        className='imgBack bg-slate-500 relative 
        xl:bg-[url("/public/imagenes/sala2/hero-sala2-min.jpg")] '>
        {
          !istablet &&
            <img 
              src='./imagenes/sala2/hero-sala2-min.jpg' 
              alt=''
              className=' z-0'
            />
        }
        <div
          className='contSalas flex top-[-10%] md:top-0  absolute xl:top-0 xl:relative'>
          <h1 
            className='text-left w-auto mt-[3rem] text-[20px] ml-[17%] 
            sm:w-[100px] md:text-[32px] md:w-[150px]
            xl:ml-0 xl:text-[56px] xl:w-auto'>
            SALA 3
            <span className='lineAux'/>
          </h1>
        </div>
      </section>
    </div>
  )
}

export default Sala3
