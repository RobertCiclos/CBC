import React from 'react'
import { motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'

const Slider = (props) => {

    const  isMovile = useMediaQuery({query: '(max-width: 640px)'})
    const  isTablet = useMediaQuery({query: '(max-width: 1020px)'})

    const sliderResponsive = () => {
        if(isMovile){
            return {right: 0, left:-359}
        }
        else if(isTablet){
            return {right: 0, left:-806}
        }else{
            return {right: 0, left:-1086}
        }
    }
  return (
    <motion.div className="slider-container overflow-hidden mt-[56px] w-[1640px]">
      <motion.div 
        className='slider grid grid-cols-[343px_343px] gap-[16px]
        sm:grid-cols-[83vw_83vw] sm:gap-[48px]
        xl:grid-cols-[1016px_1016px] xl:gap-[72px]' 
        drag='x'
        dragConstraints={sliderResponsive()}>
        <motion.div className='item  grid gap-[32px]'>
            <img src={props.imagen1} alt={props.alt1} className="w-full h-full pointer-events-none" />
            <cite>{props.name1}</cite>
        </motion.div>
        <motion.div className='item grid gap-[32px]'>
            <img src={props.imagen2} alt={props.alt2} className="w-full h-full pointer-events-none" />
            <cite>{props.name2}</cite>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default Slider
