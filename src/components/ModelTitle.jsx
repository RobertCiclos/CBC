import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'
import { motion } from 'framer-motion'
import { useSelector } from 'react-redux'
import CardCredit from './CardAux/CardCredit'

const ModelTitle = (props) => {

  const istablet = useMediaQuery({ query: '(min-width: 1280px)' })
  const [visible, setVisible] = useState(false)

  useEffect(() =>
    setTimeout(() => setVisible(!visible), 3000)
    , [])

  const idioma = useSelector(state => state.idioma.value)
  var general = ""

  if (props.autor1) {
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
  }

  return (
    <div>
      {
        props.autor1 && <CardCredit idioma={general.credito} autor={props.autor1} />
      }
      {
        !istablet &&
        <img
          src={props.img}
          alt={props.title}
          className=' z-0'
        />
      }
      <div
        className='w-[311px]  top-0 absolute left-[50%] translate-x-[-50%] translate-y-[-20%]
          sm:w-auto sm:translate-x-0 sm:left-0 sm:px-[8%] sm:translate-y-0
          xl:top-0 xl:left-[50%] xl:translate-x-[-50%] xl:w-[1016px] xl:px-0'>
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className=' text-left w-[75px] mt-[1.5rem] text-[18px] leading-[22px]
            sm:w-[100px] md:text-[32px] md:w-[150px] sm:leading-[32px]
            xl:ml-0 xl:text-[52px] xl:w-[215px] xl:leading-[63px] uppercase'>
          {props.sala}
          {props.sala && <span className='lineAux' />}
        </motion.h1>
      </div>

      {
        visible &&
        <motion.div
          initial={{ opacity: 0, left: -200 }}
          whileInView={{ opacity: 1, left: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 3 }}
          className='absolute uppercase bottom-0 w-full bg-[rgba(0,0,0,0.5)] z-0 '>
          <div
            className='contSalas mx-auto text-white font-Public font-bold sm:text-center
              py-[8px] text-[14px] leading-[16.24px] opacity-1 uppercase
              sm:text-[20px] sm:leading-[25px] sm:py-[16px]
              md:text-[30px] md:leading-[35px] md:py-[24px]
              xl:text-[44px] xl:leading-[54px]'>
            {props.title}
          </div>
        </motion.div>
      }
    </div>
  )
}

export default ModelTitle
