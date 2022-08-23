import React from 'react'
import ModelMap from '../components/ModelMap'
import ModelOneImg from '../components/ModelOneImg'
import ModelSlider from '../components/ModelSlider'

const Sala1 = () => {
  
  const dataSala1 = require('../bd/Sala1.json')

  const numParrafos = dataSala1.section5.contenido.length


  return (
    <div className='pt-[85px] overflow-x-hidden'>
      
      <section
        id='section1'
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
        id='section2'
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
        id='section5'
        style={{background: dataSala1.section5.background, color: dataSala1.section5.colorText}} 
        className='pySection'>
        <ModelOneImg {...dataSala1.section5} />
      </section>

      <section
        id='section6'>
        <img src="./imagenes/sala1/videoSala1.jpg" alt="Video Conexión natural" className="w-full h-full xl:h-[100vh]" />
      </section>

      <section
        id='section7'
        style={{background: dataSala1.section7.background, color: dataSala1.section7.colorText}} 
        className='pySection'>
        <ModelMap {...dataSala1.section7}/>
      </section>

      <section
        id='section8'
        style={{background: dataSala1.section8.background, color: dataSala1.section8.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section8}/>
      </section>

      <section
        id='section9'
        style={{background: dataSala1.section9.background, color: dataSala1.section9.colorText}} 
        className='pySection'>
        <ModelMap {...dataSala1.section9}/>
      </section>

      <section
        id='section10'
        style={{background: dataSala1.section10.background, color: dataSala1.section10.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section10}/>
      </section>

      <section
        id='section11'
        style={{background: dataSala1.section11.background, color: dataSala1.section11.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section11}/>
      </section>

      <section
        id='section12'
        style={{background: dataSala1.section12.background, color: dataSala1.section12.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section12}/>
      </section>

      <section
        id='section13'
        style={{background: dataSala1.section13.background, color: dataSala1.section13.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section13}/>
      </section>

      <section
        id='section14'
        style={{background: dataSala1.section14.background, color: dataSala1.section14.colorText}} 
        className='pySection'>
        <ModelMap {...dataSala1.section14}/>
      </section>

      <section
        id='section15'
        style={{background: dataSala1.section15.background, color: dataSala1.section15.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section15}/>
      </section>

      <section
        id='section16'
        style={{background: dataSala1.section16.background, color: dataSala1.section16.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section16}/>
      </section>

      <section
        id='section17'
        style={{background: dataSala1.section17.background, color: dataSala1.section17.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section17}/>
      </section>

      <section
        id='section18'
        style={{background: dataSala1.section18.background, color: dataSala1.section18.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section18}/>
      </section>

      <section
        id='section19'
        style={{background: dataSala1.section19.background, color: dataSala1.section19.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section19}/>
      </section>

      <section
        id='section20'
        style={{background: dataSala1.section20.background, color: dataSala1.section20.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala1.section20}/>
      </section>

      <section
        id='section6'
        className='pb-[28px] md:pb-[56px]'>
        <div className='item grid gap-[16px] md:gap-[32px] text-center'>
          <img src='./imagenes/sala1/pescadores-artesanales.jpg' alt="Pescadores artesanales" className="w-full h-full pointer-events-none" />
          <cite className='contSalas'>Pescadores artesanales en la barrera de arrecifes coral, Les Cayemites, Haití.</cite>
        </div>
      </section>

    </div>
  )
}


export default Sala1




