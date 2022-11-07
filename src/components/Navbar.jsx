import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { useMediaQuery } from 'react-responsive'
import { useDispatch } from "react-redux"
import { change } from '../features/counter/idiomaSlice'
import { useSelector } from 'react-redux'

const Navbar = () => {
   const dispatch = useDispatch()
   const [navbar, setNavbar] = useState('false')
   const location = useLocation().pathname
   const smAux = useMediaQuery({
      query: '(min-width: 650px)'
   })

   var idiomaBtn = <></>
   const idioma = useSelector(state => state.idioma.value)

   switch (idioma) {
      case "ingles":
         idiomaBtn =
            <a
               className="dropdown-item
               flex  items-center 
               bg-none gap-[8px]"
               href="#">
               <img src="/svg/ingles.svg" alt="" className="h-[15px]" />
               <span className='border-b-2 border-black'>Inglés</span>
            </a>

         break;
      case "frances":
         idiomaBtn =
            <a
               className="dropdown-item
               flex  items-center 
               bg-none gap-[8px]"
               href="#">
               <img src="/svg/frances.svg" alt="" className="h-[15px]" />
               <span className='border-b-2 border-black'>Frances</span>
            </a>
         break;
      case "creole":
         idiomaBtn =
            <a
               className="dropdown-item
               flex  items-center 
               bg-none gap-[8px]"
               href="#">
               <img src="/svg/creole.svg" alt="" className="h-[15px]" />
               <span className='border-b-2 border-black'>Creolé</span> 
            </a>
         break;
      case "español":
         idiomaBtn =
            <a
               className="dropdown-item flex flex-row-reverse items-center 
               bg-none gap-[8px]" href="#">
               <span className='border-b-2 border-black'>Español</span>
               <img src="/svg/espaniol.svg" alt="" className="h-[15px]" />
            </a>
         break;
      default:
         idiomaBtn = <div>
            <a className="dropdown-item flex flex-row-reverse items-center 
                        bg-none gap-[8px]" href="#">
               <span className='border-b-2 border-black'>Español</span>
               <img src="/svg/espaniol.svg" alt="" className="h-[15px]" />
            </a>
         </div>
         break;
   }


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

            {smAux &&

               <div className="dropdown  hover:bg-slate-400/0">
                  <a
                     className="btn btn-secondary  dropdown-toggle flex 
                     bg-gray-600/10 border-none items-center gap-2
                     hover:bg-slate-400/0"
                     href="#"
                     role="button"
                     id="dropdownMenuLink"
                     data-bs-toggle="dropdown"
                     aria-expanded="false">
                     {idiomaBtn}
                  </a>

                  <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                     <li onClick={() => dispatch(change("español"))}>
                        <div>
                           <a
                              className="dropdown-item
                              flex  items-center 
                              bg-none gap-[8px]"
                              href="#">
                              <img src="/svg/espaniol.svg" alt="" className="h-[15px]" />
                              Español
                           </a>
                        </div>
                     </li>
                     <li onClick={() => dispatch(change("frances"))}>
                        <div>
                           <a
                              className="dropdown-item
                              flex  items-center 
                              bg-none gap-[8px]"
                              href="#">
                              <img src="/svg/frances.svg" alt="" className="h-[15px]" />
                              Frances
                           </a>
                        </div>
                     </li>
                     <li onClick={() => dispatch(change("ingles"))}>
                        <div>
                           <a
                              className="dropdown-item
                              flex  items-center 
                              bg-none gap-[8px]"
                              href="#">
                              <img src="/svg/ingles.svg" alt="" className="h-[15px]" />
                              Inglés
                           </a>
                        </div>
                     </li>
                     <li onClick={() => dispatch(change("creole"))}>
                        <div>
                           <a
                              className="dropdown-item
                              flex  items-center 
                              bg-none gap-[8px]"
                              href="#">
                              <img src="/svg/creole.svg" alt="" className="h-[15px]" />
                              Creolé
                           </a>
                        </div>
                     </li>
                  </ul>
               </div>
            }


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
                        <div className="dropdown w-[150px] ">
                           <a
                              className="btn btn-secondary w-[150px] dropdown-toggle flex 
                              bg-gray-600/0 mt-5 ml-[15%] border-none items-center gap-2 
                              hover:bg-blue-300 text-black"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-bs-toggle="dropdown"
                              aria-expanded="false">
                              {idiomaBtn}
                           </a>

                           <ul className="dropdown-menu " aria-labelledby="dropdownMenuLink">
                              <li onClick={() => dispatch(change("español"))}>
                                 <div>
                                    <a
                                       className="dropdown-item
                                       flex  items-center text-black
                                       bg-none gap-[8px]  "
                                       href="#">
                                       <img src="/svg/espaniol.svg" alt="" className="h-[15px]" />
                                       Español
                                    </a>
                                 </div>
                              </li>
                              <li onClick={() => dispatch(change("frances"))}>
                                 <div>
                                    <a
                                       className="dropdown-item
                              flex  items-center 
                              bg-none gap-[8px]"
                                       href="#">
                                       <img src="/svg/frances.svg" alt="" className="h-[15px]" />
                                       Frances
                                    </a>
                                 </div>
                              </li>
                              <li onClick={() => dispatch(change("ingles"))}>
                                 <div>
                                    <a
                                       className="dropdown-item
                              flex  items-center 
                              bg-none gap-[8px]"
                                       href="#">
                                       <img src="/svg/ingles.svg" alt="" className="h-[15px]" />
                                       Inglés
                                    </a>
                                 </div>
                              </li>
                              <li onClick={() => dispatch(change("creole"))}>
                                 <div>
                                    <a
                                       className="dropdown-item
                              flex  items-center 
                              bg-none gap-[8px]"
                                       href="#">
                                       <img src="/svg/creole.svg" alt="" className="h-[15px]" />
                                       Creolé
                                    </a>
                                 </div>
                              </li>
                           </ul>
                        </div>
                     </div>
                  </motion.div>
               }
            </AnimatePresence>
         </nav>
      </header>
   )
}

export default Navbar