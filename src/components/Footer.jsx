import React from 'react'
import {useLocation } from 'react-router-dom'

const Footer = () => {

  const location = useLocation().pathname

  const background = option(location)
  const TitleFooter = optionTitle(location)

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

  function optionTitle(param) {
    switch(param) {
      case '/':
        return 'Iniciativa gubernamental de Cuba, Haití, República Dominicana, Puerto Rico y Jamaica.';
      case '/Sala1':
        return "“El CBC es Naturaleza”";
      case '/Sala2':
        return 'Iniciativa gubernamental de Cuba, Haití, República Dominicana, Puerto Rico y Jamaica.';
      case '/Sala3':
        return 'Iniciativa gubernamental de Cuba, Haití, República Dominicana, Puerto Rico y Jamaica.';
      case '/Sala4':
        return 'Iniciativa gubernamental de Cuba, Haití, República Dominicana, Puerto Rico y Jamaica.';
      case '/Sala5':
        return 'Iniciativa gubernamental de Cuba, Haití, República Dominicana, Puerto Rico y Jamaica.';    
      default:
        return 'Iniciativa gubernamental de Cuba, Haití, República Dominicana, Puerto Rico y Jamaica.';
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
          {TitleFooter}
        </h4>
        <p
          className='font-[500] text-[20px] mt-[32px] mb-[16px]
          sm:text-[22px] sm:font-[700] 
          md:text-[24px] md:mt-[64px] '>
          Instituciones relacionadas
        </p>
        <ul 
          className="grid font-[400] text-[16px] leading-[24px] gap-[16px]
          md:grid-cols-2 md:translate-x-[-3.2%]
          lg:grid-cols-3">
          <li>Ministerio de Ciencia, Tecnología y Medio Ambiente de la República de Cuba</li>
          <li>Ministerio de Medio Ambiente y Recursos Naturales de República Dominicana</li>
          <li>Departamento de Recursos Naturales y Ambientales del Gobierno de Puerto Rico</li>
          <li>Ministerio de Medio Ambiente de Haití</li>
          <li>Ministry of Economic Growth and Job Creation of Jamaica (MEGJC)</li>
          <li>Unión Europea</li>
          <li>PNUMA</li>
        </ul>
        <div className='bg-white h-[2px] w-full mt-[24px]'/>
        <div
          className='grid w-full mt-[8px] md:mt-[16px]
          font-[300] text-[14px] font-Public 
          md:grid-cols-2 '>
          <i className='md:justify-self-start my-[8px] md:my-0'>Todos los derechos reservados  -  2022</i>
          <i className='md:justify-self-end'>Diseñado por Ciclos Studio</i>
        </div>
      </div>
    </footer>
  )
}

export default Footer