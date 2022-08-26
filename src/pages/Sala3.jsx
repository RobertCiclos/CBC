import React from 'react'
import { useMediaQuery } from 'react-responsive'

const Sala3 = () => {
  const dataSala3 = require('../bd/Sala3.json')
  const istablet = useMediaQuery({query: '(min-width: 1280px)'})

  return (
    <div
      className='pt-[85px] overflow-x-hidden'>

      <section
        id='section1'
        className='imgBack bg-slate-500 relative 
        xl:bg-[url("/public/imagenes/sala2/hero-sala2-min.jpg")] '>
        {
          !istablet &&
            <img 
              src='./imagenes/sala3/fondo-sala3.jpg' 
              alt=''
              className=' z-0'
            />
        }
        <div
          className='contSalas flex top-[-10%] md:top-0  absolute xl:top-0 xl:relative'>
          <h1 
            className='text-left w-auto mt-[3rem] text-[20px] ml-[17%] 
            sm:w-[100px] md:text-[32px] md:w-[150px]
            xl:ml-0 xl:text-[56px] xl:w-auto'>
            SALA 3
            <span className='lineAux'/>
          </h1>
        </div>
      </section>

      <section
        id='section2'
        className='pySection'>
        <main 
          className='contSalas'>
          <p>
            La iniciativa del CBC contribuye a alcanzar múltiples metas de los Objetivos de Desarrollo Sostenible (ODS) al promover e implementar acciones para la protección de los ecosistemas costeros, marinos y terrestres.<br/>
            <br/>
            Una de sus acciones ha sido la identificación de algunos  grupos de ecosistemas marinos y terrestres prioritarios para la conservación en el corredor. Los ecosistemas fueron evaluados espacialmente para determinar los sitios dentro de sus áreas de distribución que tienen mayor prioridad para la conservación, de acuerdo con los criterios de selección escogidos.<br/>
            <br/>   
            Los grupos de ecosistemas priorizados para la conservación en el CBC son: los bosques húmedos y pinares, los bosques secos y matorrales xerofíticos, los manglares y los arrecifes de coral.
          </p>
        </main>
      </section>

      
    </div>
  )
}

export default Sala3
