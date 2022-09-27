import React, { useEffect, useState, useRef } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Outlet} from 'react-router-dom'
import Splash from './components/Splash'
import { AnimatePresence } from 'framer-motion'
import NavbarAux from './components/NavbarAux'
import { useLocation } from 'react-router-dom'

const Main = () => {
  const location = useLocation().pathname

  const [splash,setSplash] = useState(true)

  const prevScrollY = useRef(0) 
  const [goingUp, setGoingUp] = useState(false);
  useEffect(()=>{ 
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }
      prevScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  },[goingUp])

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
          { !(location === "/" || location === "/Home") && goingUp && <NavbarAux/>}
          <Outlet/>
          <Footer/>
        </div>
      }
    </div>
  )
}

export default Main