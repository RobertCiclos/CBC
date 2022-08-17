import React, { useState } from 'react'
import {Link,useLocation } from 'react-router-dom'

const Navbar = () => {

  const [navbar,setNavbar] = useState('false')
  const location = useLocation().pathname

  const styles = {
    background: location === "/" || location === "/Home" ? "none":"#000" 
  }

  return (
   <header
    style={styles} 
    className='w-full h-[85px] flex items-center absolute z-10'>
    <nav 
      className="w-[311px]  grid grid-cols-2 sm:grid-cols-3 items-center mx-auto 
      sm:w-[1095px] sm:px-[10%] xl:px-0">
      <select 
        className='justify-self-start invisible absolute sm:relative sm:visible'
        name="idioma" id="">
        <option value="Español">Español</option>
        <option value="Frances">Frances</option>
        <option value="Ingles">Ingles</option>
        <option value="Creole">Creole</option>
      </select>
      <img 
        className='sm:justify-self-center' 
        src="./svg/logo-navbar.svg" alt="" />
      { navbar?
        <img 
          className='justify-self-end cursor-pointer'
          onClick={()=> setNavbar(!navbar)} 
          src="./svg/hamburg.svg" 
          alt="" />
        :
        <div 
          className='h-[100vh] w-[20vw] fixed right-0 top-0 bg-white px-[1.5%] pt-[1.5%]'>
            <div
              className='grid grid-cols-2 '>
              <img 
              onClick={()=> setNavbar(!navbar)} 
              className='justify-self-start cursor-pointer'
              src="./svg/x.svg" alt="" />
              <div 
                className='justify-self-end'>
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
            <Link to="/">
              <div 
                className='block'>
                Home <img className='inline' src='./svg/arrow-right-45.svg' alt='Flecha de navegacion'/>
              </div>
            </Link>
            <Link to="/Sala1">
              <div 
                className='block'>
                Sala1 <img className='inline' src='./svg/arrow-right-45.svg' alt='Flecha de navegacion'/>
              </div>
            </Link>
            <Link to="/Sala2">
              <div 
                className='block'>
                Sala2 <img className='inline' src='./svg/arrow-right-45.svg' alt='Flecha de navegacion'/>
              </div>
            </Link>
            <Link to="/Sala3">
              <div 
                className='block'>
                Sala3 <img className='inline' src='./svg/arrow-right-45.svg' alt='Flecha de navegacion'/>
              </div>
            </Link>
            <Link to="/Sala4">
              <div 
                className='block'>
                Sala4 <img className='inline' src='./svg/arrow-right-45.svg' alt='Flecha de navegacion'/>
              </div>
            </Link>
            <Link to="/Sala5">
              <div 
                className='block'>
                Sala5 <img className='inline' src='./svg/arrow-right-45.svg' alt='Flecha de navegacion'/>
              </div>
            </Link>
            <select 
                className=''
                name="idioma" id="">
                <option value="Español">Español</option>
                <option value="Frances">Frances</option>
                <option value="Ingles">Ingles</option>
                <option value="Creole">Creole</option>
            </select>
        </div>
      }
    </nav>
   </header>
  )
}

export default Navbar