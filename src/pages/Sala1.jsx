import React from 'react'
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
        className='bg-[#528641] pySection text-white'>
        <div
          className='contSalas'>
          <h2>El Caribe y su biodiversidad</h2>
          <p
            className='mtPharagraphs'>
            El Caribe alberga una importante proporción de la biodiversidad global, por esta razón es considerado uno de los 35 “puntos calientes” de la biodiversidad en el mundo.
            <br/>
            <br/>
            Son zonas del planeta que poseen un porcentaje elevado de especies endémicas, exclusivas de ese lugar, o especies altamente amenazadas.
          </p>
        </div>
        <img 
          src='./imagenes/sala1/mapa-puntos-calientes.jpg' 
          alt='puntos calientes' 
          className='w-full mt-[56px] mb-[32px] mx-auto'>
        </img>
        <div className='contSalas pr-[12px] sm:pr-0'>
          <cite className=''>
            Mapa de ‘’puntos calientes’’ de biodiversidad. Myers, N., Mittermeier, R., Mittermeier, C. et al. Biodiversity hotspots for conservation priorities. Nature 403, 853–858 (2000).
            <br/><span className='font-[400]'>https://doi.org/10.1038/35002501</span>
          </cite>
        </div>
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




