import React from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import CardCredit from './CardAux/CardCredit'

const SliderRecorted4 = (props) => {

  const isMovile = useMediaQuery({ query: '(max-width: 640px)' })
  const isTablet = useMediaQuery({ query: '(max-width: 1020px)' })
  const isDesktop = useMediaQuery({ query: '(max-width: 1280px)' })

  const sliderResponsive = () => {
    if (isMovile) {
      return { right: 0, left: -326 }
    }
    else if (isTablet) {
      return { right: 0, left: -806 }
    } else if (isDesktop) {
      return { right: 0, left: -900 }
    } else {
      return { right: 0, left: -1100 }
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
    <motion.div className="slider-container overflow-hidden mt-[56px] w-[1640px] cursor-grab">
      <motion.div
        className='slider grid grid-cols-[311px_250px] gap-x-[16px]
        sm:grid-cols-[83vw_80vw] sm:gap-[48px]
        xl:grid-cols-[1016px_1300px] xl:gap-[72px]'
        drag='x'
        dragConstraints={sliderResponsive()}>
        <motion.div className='grid gap-[16px] sm:gap-[32px] '>
          <div className='relative'>
            {props.author1 && <CardCredit idioma={general.credito} author={props.author1} />}
            <img src={props.imagen1} alt={props.alt1} className="w-full h-full pointer-events-none" />
          </div>
          <cite className='translate-y-[-10px] sm:translate-y-0'>{props.name1}</cite>
        </motion.div>
        <motion.div className='grid items-end '>
          <div className='relative'>
            {props.author2 && <CardCredit idioma={general.credito} author={props.author2} />}
            <img src={props.imagen2} alt={props.alt2} className="w-full h-full pointer-events-none" />
          </div>
          <cite className=''>{props.name2}</cite>
        </motion.div>
      </motion.div>
      {
        props.state &&
        <div
          className='w-[300px] h-[30px] bg-black/50 text-white absolute top-0
          flex justify-center items-center text-[14px]'>
          Arrastre la fotografía de izquiera a derecha
        </div>
      }
    </motion.div>
  )
}

export default SliderRecorted4