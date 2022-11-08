import React from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import CardCredit from './CardAux/CardCredit'
import { useSelector } from 'react-redux'

const Slider = (props) => {

  const isMovile = useMediaQuery({ query: '(max-width: 640px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1020px)' })

  const sliderResponsive = () => {
    if (isMovile) {
      return { right: 0, left: -359 }
    }
    else if (isTablet) {
      return { right: 0, left: -806 }
    } else {
      return { right: 0, left: -1086 }
    }
  }

  const idioma = useSelector(state => state.idioma.value)
  var general = ""

  switch (idioma) {
    case "ingles":
      general = require('../bd/ingles/General.json')
      break;
    case "frances":
      general = require('../bd/frances/General.json')
      break;
    case "creole":
      general = require('../bd/creole/General.json')
      break;
    case "español":
      general = require('../bd/spaniol/General.json')
      break;
    default:
      general = require('../bd/spaniol/General.json')
      break;
  }
  
  return (
    <motion.div
      className="slider-container overflow-hidden relative mt-[56px] w-[1640px] cursor-grab">
      <motion.div
        className='slider grid grid-cols-[343px_343px] gap-[16px]
        sm:grid-cols-[83vw_83vw] sm:gap-[48px]
        xl:grid-cols-[1016px_1035px] xl:gap-[56px]'
        drag='x'
        dragConstraints={sliderResponsive()}>
        <motion.div className='item  grid gap-[16px] sm:gap-[32px] relative'>
          <div className='relative'>
            {props.autor1 && <CardCredit idioma={general.credito} autor={props.autor1} />}
            <img src={props.imagen1} alt={props.alt1} className="w-full h-full pointer-events-none" />
          </div>
          <cite>{props.name1}</cite>
        </motion.div>
        <motion.div className='item grid gap-[16px] sm:gap-[32px] relative'>
          <div className='relative'>
            {props.autor2 && <CardCredit idioma={general.credito} autor={props.autor2} />}
            <img src={props.imagen2} alt={props.alt2} className="w-full h-full pointer-events-none" />
          </div>
          <cite>{props.name2}</cite>
        </motion.div>
      </motion.div>
      {
        props.state &&
        <div
          className='w-auto px-2 bg-white 
          text-black absolute top-0
          flex justify-center items-center text-[12px]'>
          Arrastre la fotografía de derecha a izquierda
        </div>
      }

    </motion.div>
  )
}

export default Slider
