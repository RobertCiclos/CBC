import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blueCBC text-white font-Public py-[48px]'>
      <div 
        className='w-[311px] mx-auto
        sm:w-auto sm:px-[9%] 
        lg:w-[1040px] lg:px-0'>
        <h2>
          Iniciativa gubernamental de Cuba, Haití, República Dominicana, 
          Puerto Rico y Jamaica.
        </h2>
        <p
          className='font-[600] text-[24px] mt-[32px] mb-[16px] '>
          Instituciones relacionadas
        </p>
        <ul 
          className="grid font-[400] text-[16px] leading-[24px] gap-[16px]
          md:grid-cols-2
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
          className='grid w-full 
          font-[300] text-[14px] font-Public 
          md:grid-cols-2 '>
          <i className='md:justify-self-start my-[8px]'>Todos los derechos reservados  -  2022</i>
          <i className='md:justify-self-end'>Diseñado por Ciclos Studio</i>
        </div>
      </div>
    </footer>
  )
}

export default Footer