import React from 'react'
import { useSelector } from 'react-redux'
import {useLocation } from 'react-router-dom'

const Footer = () => {

  var dataFooter = ""
  const idioma = useSelector(state => state.idioma.value)

  switch (idioma) {
    case "ingles":
      dataFooter = require('../bd/ingles/Home.json')
      break;
    case "frances":
      dataFooter = require('../bd/frances/Home.json')
      break;
    case "creole":
      dataFooter = require('../bd/creole/Home.json')
      break;
    case "español":
      dataFooter = require('../bd/spaniol/Home.json')
      break;
    default:
      dataFooter = require('../bd/spaniol/Home.json')
      break;
  }


  const location = useLocation().pathname

  const background = option(location)

  function option(param) {
    switch(param) {
      case '/':
        return "#103A62";
      case '/Sala1':
        return "#528641";
      case '/Sala2':
        return "#103A62";
      case '/Sala3':
        return "#528641";
      case '/Sala4':
        return "#103A62";
      case '/Sala5':
        return "#528641";    
      default:
        return '#103A62';
    }
  }


  const stylesFooter = {
    background: background 
  }

  return (
    <footer
      style={stylesFooter} 
      className='bg-blueCBC text-white font-Public py-[48px]'>
      <div 
        className='w-[311px] mx-auto
        sm:w-auto sm:px-[9%] 
        lg:w-[1040px] lg:px-0'>
        <h4>
          {dataFooter.footer.title}
        </h4>
        <p
          className='font-[500] text-[20px] mt-[16px] mb-[16px]
          sm:text-[22px] sm:font-[700] 
          md:text-[24px] md:mt-[24px] '>
          {dataFooter.footer.subtitle}
        </p>
        <ul 
          className="grid font-[400] text-[16px] leading-[24px] gap-[16px]
          md:grid-cols-2 w-full 
          lg:grid-cols-3">
          {
            dataFooter.footer.instituciones.map((item)=>(
              <li className='w-full 
              md:translate-x-[-18px] 
              lg:translate-x-[-24px]'>{item}</li>
            ))
          }
        </ul>
        <div className='bg-white h-[2px] w-full mt-[24px]'/>
        <div
          className='grid w-full mt-[8px] md:mt-[16px]
          font-[300] text-[14px] font-Public 
          md:grid-cols-2 '>
          <i className='md:justify-self-start my-[8px] md:my-0'>{dataFooter.footer.descript}</i>
          <i className='md:justify-self-end'>{dataFooter.footer.design}</i>
        </div>
      </div>
    </footer>
  )
}

export default Footer