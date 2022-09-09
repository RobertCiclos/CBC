import React from 'react'
import { motion } from 'framer-motion'
const Splash = () => {
  return (
    <motion.div
        initial={{opacity: 0}}
        animate={{opacity:1}}
        transition={{duration: 1.5}} 
        className='w-[100vw] h-[100vh] grid justify-center items-center'>
      <img 
        src="/imagenes/logoOriginal.png" 
        alt="Logo" 
        className="scale-[0.4]" />
    </motion.div>
  )
}

export default Splash
