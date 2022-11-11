import React from 'react'
import { motion } from 'framer-motion'
import { useSelector } from "react-redux"

const Splash = () => {
  const idioma = useSelector(state => state.idioma.value)
  var dataSala1 = ""

  switch (idioma) {
    case "ingles":
      dataSala1 = require('../bd/ingles/General.json')
      break;
    case "frances":
      dataSala1 = require('../bd/frances/General.json')
      break;
    case "creole":
      dataSala1 = require('../bd/creole/General.json')
      break;
    case "español":
      dataSala1 = require('../bd/spaniol/General.json')
      break;
    default:
      dataSala1 = require('../bd/spaniol/General.json')
      break;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='w-[100vw] h-[100vh] grid justify-center 
      items-center overflow-hidden'>

      <img
        src="/imagenes/logoOriginal.png"
        alt="Logo"
        className="w-[250px] sm:w-[300px]" />
      <p
        className=' w-full overflow-hidden
        text-center absolute 
        text-[14px] sm:text-[18px] bottom-[3%]
        text-blueCBC font-[500] px-[5%] '>
        {dataSala1.textSplah}
      </p>
    </motion.div>
  )
}

export default Splash
