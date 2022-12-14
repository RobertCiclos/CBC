import React from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import CardCredit from './CardAux/CardCredit'

const SliderRecorted3 = (props) => {

  const isMovile = useMediaQuery({ query: '(max-width: 640px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1020px)' })
  const isDesktop = useMediaQuery({ query: '(max-width: 1280px)' })

  const sliderResponsive = () => {
    if (isMovile) {
      return { right: 0, left: -154 }
    }
    else if (isTablet) {
      return { right: 0, left: -300 }
    } else if (isDesktop) {
      return { right: 0, left: -340 }
    } else {
      return { right: 0, left: -524 }
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
    <motion.div className="slider-container overflow-hidden mt-[56px] w-[1640px] cursor-grab relative">
      <motion.div
        className='slider grid grid-cols-[138px_311px] gap-x-[16px]
        sm:grid-cols-[37vw_85vw] sm:gap-[48px]
        xl:grid-cols-[452px_1040px] xl:gap-[72px]'
        drag='x'
        dragConstraints={sliderResponsive()}>
        <motion.div className='grid gap-[16px] sm:gap-[24px] '>
          <div className='relative'>
            {props.autor1 && <CardCredit idioma={general.credito} autor={props.autor1} />}
            <img src={props.imagen1} alt={props.alt1} className="w-full h-full pointer-events-none" />
          </div>
          <cite className=''>{props.name1}</cite>
        </motion.div>
        <motion.div className='grid gap-[16px] sm:gap-[24px]'>
          <div className='relative'>
            {props.autor2 && <CardCredit idioma={general.credito} autor={props.autor2} />}
            <img src={props.imagen2} alt={props.alt2} className="w-full h-full pointer-events-none" />
          </div>
          <cite className=''>{props.name2}</cite>
        </motion.div>
      </motion.div>
      {
        props.state &&
        <div
          className='w-auto px-2 bg-white 
          text-black absolute top-0
          flex justify-center items-center text-[12px]'>
           {general.x}
        </div>
      }
    </motion.div>
  )
}

export default SliderRecorted3