import React from 'react'
import ModelMap from '../components/ModelMap'
import ModelSlider from '../components/ModelSlider'

const Sala1 = () => {
  const dataSala1 = require('../bd/Sala1.json')

  return (
    <div className='pt-[85px] overflow-x-hidden'>
      <section
        className='imgBack bg-[url("/public/imagenes/sala1/hero-sala1.jpg")] '>
        <div
          className='contSalas flex'>
          <h1 
            className='text-left w-auto mt-[3rem]'>
            SALA 1
            <span className='lineAux'/>
          </h1>
        </div>
      </section>
      <section
        className='pySection'>
        <main 
          className='contSalas'>
          <p>
            El Caribe insular es reconocido por su rica biodiversidad y ecosistemas, y por su elevada cantidad de especies endémicas, es decir, únicas del lugar. Por ello, es uno de los “puntos calientes” de la biodiversidad global.
            <br/>
            <br/>
            Además, al servir las Antillas Mayores como puente para la conectividad ecológica entre Norte y Sur América, se le conoce como un valioso corredor biológico por lo cual su conservación es prioritaria.
            <br/>
            <br/>   
            Ante las amenazas a las que se ve sometido, es necesaria la protección de sus ecosistemas y de sus procesos naturales, para asegurar un futuro próspero para la región.
            <br/>
            <br/>
            Por todo ello, es que se crea el Corredor Biológico en el Caribe (CBC); una iniciativa de los gobiernos de Cuba, Haití, República Dominicana y Puerto Rico, a la cual se ha unido recientemente Jamaica, que trabaja para fomentar acciones coordinadas que contribuyan a la conservación, conectividad y el mantenimiento de los servicios ecosistémicos en la región.
          </p>
        </main>
      </section>
      <section
        id='section3'
        style={{background: dataSala1.section3.background, color: dataSala1.section3.colorText}} 
        className='pySection'>
        <ModelMap {...dataSala1.section3} />
      </section>

      <section
        id='section4'
        style={{background: dataSala1.section4.background, color: dataSala1.section4.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section4}/>
      </section>

      <section
        id='section8'
        style={{background: dataSala1.section4.background, color: dataSala1.section4.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section4}/>
      </section>

    </div>
  )
}


export default Sala1




