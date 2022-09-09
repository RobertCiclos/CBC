import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import Splash from './components/Splash'
import { AnimatePresence } from 'framer-motion'

const Main = () => {
  const [splash,setSplash] = useState(true)


  useEffect(()=>
    setTimeout(()=>setSplash(!splash),3000)
  ,[])

  return (
    <div className=''>
      {
        splash?
          <AnimatePresence>
            <Splash/>
          </AnimatePresence>
        :
        <div>
          <Navbar/>
          <Outlet/>
          <Footer/>
        </div>
      }
    </div>
  )
}

export default Main