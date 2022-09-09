import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const Navbar = () => {

   const [navbar, setNavbar] = useState('false')
   const location = useLocation().pathname

   const styles = {
      background: location === "/" || location === "/Home" ? "none" : "#000",
      boxShadow: "0 0 #0000",
      color: location === "/" || location === "/Home" ? "black" : "white",
      fontFamily: "Public Sans",
      fontWeight: 500
   }

   const stylesNav = {
      background: location === "/" || location === "/Home" ? "#fff" : "#000",
      boxShadow: "0 0 #0000"
   }

   /***** */

   return (
      <header
         style={styles}
         className='w-full h-[65px] sm:h-[85px] flex items-center absolute z-10 text-[24px] '>
         <nav
            className="w-[311px]  grid grid-cols-2 sm:grid-cols-3 items-center mx-auto 
            sm:w-[1095px] sm:px-[10%] xl:px-0">
            <select
               className='justify-self-start invisible absolute sm:relative '
               name="idioma" id="">
               <option value="Español">Español</option>
               <option value="Frances">Frances</option>
               <option value="Ingles">Ingles</option>
               <option value="Creole">Creole</option>
            </select>

            <Link to='/'
               className='sm:justify-self-center'>
               <img
                  className=' sm:scale-[1.1]'
                  src="./svg/logo-navbar.svg"
                  alt="" />
            </Link>
            {navbar &&
               <img
                  className='justify-self-end cursor-pointer sm:scale-[1.15]'
                  onClick={() => setNavbar(!navbar)}
                  src="./svg/hamburg.svg"
                  alt="" />
            }

            <AnimatePresence>
               {!navbar &&
                  <motion.div
                     initial={{ opacity: 0, right: -200 }}
                     animate={{ opacity: 1, right: 0 }}
                     exit={{ opacity: 0, right: -200 }}
                     transition={{ duration: 1.2 }}
                     style={stylesNav}
                     className='h-[100vh] fixed right-0 top-0 pt-[1%] 
                     w-[40vh] md:w-[25vh] lg:w-[20vw] '>
                     <div
                        className='grid grid-cols-2 h-[64px] items-center px-[10%]'>
                        <img
                           onClick={() => setNavbar(!navbar)}
                           className='justify-self-start cursor-pointer'
                           src={location === "/" || location === "/Home" ? "./svg/x-Black.svg" : "./svg/x-White.svg"}
                           alt="hola" />
                        <div
                           style={{ borderColor: location === "/" || location === "/Home" ? "#000" : "#fff" }}
                           className='justify-self-end border-b-[1.5px] font-[400]'>
                           {
                              (() => {
                                 switch (location) {
                                    case '/Sala1':
                                       return <div>Sala 1</div>;
                                    case '/Sala2':
                                       return <div>Sala 2</div>;
                                    case '/Sala3':
                                       return <div>Sala 3</div>;
                                    case '/Sala4':
                                       return <div>Sala 4</div>;
                                    case '/Sala5':
                                       return <div>Sala 5</div>;
                                    default:
                                       return <div>Home</div>;
                                 }
                              })()
                           }
                        </div>
                     </div>
                     <div
                        className='grid grid-rows-[repeat(6,72px)] items-center'>
                        <Link to="/"
                           style={{ borderColor: location === "/" || location === "/Home" ? "black" : "white" }}
                           className=''
                           onClick={() => setNavbar(!navbar)}>
                           <div
                              className='h-full px-[10%]'>
                              Home
                              <img
                                 className='ml-[5%]  inline'
                                 src={location === '/' ? './svg/arrow-right-45-Black.svg' : './svg/arrow-right-45-White.svg'}
                                 alt='Flecha de navegacion' />
                           </div>
                        </Link>

                        <Link to="/Sala1"
                           style={{ borderColor: location === "/" || location === "/Home" ? "black" : "white" }}
                           className='border-t-[1.5px] h-full'
                           onClick={() => setNavbar(!navbar)} >
                           <div
                              className='flex h-full items-center px-[10%]'>
                              Sala 1
                              <img
                                 className='ml-[5%] inline'
                                 src={location === '/' ? './svg/arrow-right-45-Black.svg' : './svg/arrow-right-45-White.svg'}
                                 alt='Flecha de navegacion' />
                           </div>
                        </Link>

                        <Link to="/Sala2"
                           style={{ borderColor: location === "/" || location === "/Home" ? "black" : "white" }}
                           className='border-t-[1.5px] h-full'
                           onClick={() => setNavbar(!navbar)} >
                           <div
                              className='flex  h-full items-center px-[10%]'>
                              Sala 2
                              <img
                                 className='ml-[5%] inline'
                                 src={location === '/' ? './svg/arrow-right-45-Black.svg' : './svg/arrow-right-45-White.svg'}
                                 alt='Flecha de navegacion' />
                           </div>
                        </Link>

                        <Link to="/Sala3"
                           style={{ borderColor: location === "/" || location === "/Home" ? "black" : "white" }}
                           className='border-t-[1.5px] h-full px-[10%]'
                           onClick={() => setNavbar(!navbar)} >
                           <div
                              className='flex  h-full items-center'>
                              Sala 3
                              <img
                                 className='ml-[5%] inline'
                                 src={location === '/' ? './svg/arrow-right-45-Black.svg' : './svg/arrow-right-45-White.svg'}
                                 alt='Flecha de navegacion' />
                           </div>
                        </Link>

                        <Link to="/Sala4"
                           style={{ borderColor: location === "/" || location === "/Home" ? "black" : "white" }}
                           className='border-t-[1.5px] h-full'
                           onClick={() => setNavbar(!navbar)} >
                           <div
                              className='flex h-full items-center px-[10%]'>
                              Sala 4
                              <img
                                 className='ml-[5%] inline'
                                 src={location === '/' ? './svg/arrow-right-45-Black.svg' : './svg/arrow-right-45-White.svg'}
                                 alt='Flecha de navegacion' />
                           </div>
                        </Link>

                        <Link to="/Sala5"
                           style={{ borderColor: location === "/" || location === "/Home" ? "black" : "white" }}
                           className='border-y-[1.5px] h-full'
                           onClick={() => setNavbar(!navbar)} >
                           <div
                              className='flex h-full items-center px-[10%]'>
                              Sala 5
                              <img
                                 className='ml-[5%] inline'
                                 src={location === '/' ? './svg/arrow-right-45-Black.svg' : './svg/arrow-right-45-White.svg'}
                                 alt='Flecha de navegacion' />
                           </div>
                        </Link>
                        <select
                           className='invisible'
                           name="idioma" id="">
                           <option value="Español">Español</option>
                           <option value="Frances">Frances</option>
                           <option value="Ingles">Ingles</option>
                           <option value="Creole">Creole</option>
                        </select>
                     </div>
                  </motion.div>
               }
            </AnimatePresence>
         </nav>
      </header>
   )
}

export default Navbar