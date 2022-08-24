import React, { useState } from 'react'
import Modelimg from '../components/Modelimg'
import CardAnimales from '../components/Cards/CardAnimales'
import ModelOneImg from '../components/ModelOneImg'
import ModelSlider from '../components/ModelSlider'
import { useMediaQuery } from 'react-responsive'

const Sala2 = () => {

  const isDesktop = useMediaQuery({query: '(min-width: 1440px)'})
  const istablet = useMediaQuery({query: '(min-width: 1280px)'})
  const dataSala2 = require('../bd/Sala2.json')
  const [screem, setScreem] = useState(0)

  function renderizadoAux(){
   
      if(isDesktop){
        return  <div
                  className='col-span-5 grid grid-cols-4 gap-[26px]'>
                  <CardAnimales />
                  <CardAnimales />
                  <CardAnimales />
                  <CardAnimales />        
                </div>
      }else if (istablet){
        return  <>
                <CardAnimales />
                <CardAnimales />
                <div
                  className='col-span-4 grid grid-cols-2 gap-[26px]'>
                  <CardAnimales />
                  <CardAnimales />
                </div>
                </>
      }else{
        return <>
                <CardAnimales />
                <CardAnimales />
                <CardAnimales />
                <CardAnimales />
              </>
      }
  }

  return (
    <div className='pt-[85px] overflow-x-hidden'>
      <section
        id='section1'
        className='imgBack bg-[url("/public/imagenes/sala2/hero-sala2-min.jpg")] '>
        <div
          className='contSalas flex'>
          <h1 
            className='text-left w-auto mt-[3rem]'>
            SALA 2
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
            Debido a la elevada riqueza de la biodiversidad en el CBC, realizar acciones de conservación y monitoreo para las especies prioritarias es imprescindible.            <br/>
            <br/>
            Por ello, el CBC ha priorizado algunas especies, grupos de especies y ecosistemas representativos, compartidos, con amenazas identificadas, y que son altamente  vulnerables al cambio climático, como objetos de conservación y monitoreo.            <br/>
            <br/>   
            Actualmente, el CBC cuenta con una lista de 138 especies como potenciales objetos para la conservación y el monitoreo; algunas de las cuales presentaremos en esta sala.  Este listado es un elemento clave en el desarrollo de la estrategia de conservación para el Corredor Biológico en el Caribe (CBC).            <br/>
            <br/>
            A partir de las 138 especies, se hizo un análisis y reagrupación según características biológicas y como resultado se obtuvo un total de 14 especies o grupos  de especies amenazadas que son objeto de conservación prioritaria del CBC:
          </p>
        </main>
      </section>

      <section
        id='section3'
        style={{paddingTop: 0}}
        className='pySection'>
        <div className='contSalasAux'>
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          <CardAnimales />
          {renderizadoAux()}
        </div>
      </section>

      <section
        id='section4'>
        <img src="./imagenes/sala2/video-especies.jpg" alt="Video Especies Representativas" className="separador"/>
      </section>

      <section
        id='section5'>
        <img 
          src='./imagenes/sala2/especies-migratorias.jpg'
          className='separador'
          alt='Especies Migratorias'
        />
      </section>

      <section
        id='section6'
        style={{background: dataSala2.section6.background, color: dataSala2.section6.colorText}} 
        className='pySection'>
        <ModelOneImg {...dataSala2.section6} />
      </section>

      <section
        id='section7'
        style={{background: dataSala2.section7.background, color: dataSala2.section7.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section7} />
      </section>

      <section
        id='section8'
        style={{background: dataSala2.section8.background, color: dataSala2.section8.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section8} />
      </section>

      <section
        id='section9'
        style={{background: dataSala2.section9.background, color: dataSala2.section9.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section9} />
      </section>

      <section
        id='section10'>
        <img 
          src='./imagenes/sala2/especies-endemicas.jpg'
          className='separador'
          alt='Especies endémicas'
        />
      </section>

      <section
        id='section11'
        style={{background: dataSala2.section11.background, color: dataSala2.section11.colorText}} 
        className='pySection'>
        <ModelOneImg {...dataSala2.section11} />
      </section>

      <section
        id='section12'>
        <img src="./imagenes/sala2/video-gris.jpg" alt="Video" className="separador"/>
      </section>

      <section
        id='section13'
        style={{background: dataSala2.section13.background, color: dataSala2.section13.colorText}} 
         className='pySection'>
        <ModelOneImg {...dataSala2.section13} />
      </section>

      <section
        id='section14'
        style={{background: dataSala2.section14.background, color: dataSala2.section14.colorText}} 
         className='pySection'>
        <ModelSlider {...dataSala2.section14} />
      </section>

      <section
        id='section15'>
        <img 
          src='./imagenes/sala2/especies-importantes.jpg'
          className='separador'
          alt='Otras especies de importancia para la conservación'
        />
      </section>

      <section
        id='section16'
        style={{background: dataSala2.section16.background, color: dataSala2.section16.colorText}} 
         className='pySection'>
        <ModelOneImg {...dataSala2.section16} />
      </section>

      <section
        id='section17'
        style={{background: dataSala2.section17.background, color: dataSala2.section17.colorText}} 
         className='pySection'>
        <ModelSlider {...dataSala2.section17} />
      </section>

      <section
        id='section18'>
        <img src="./imagenes/sala2/video-cocodrilo.jpg" alt="Video Vulnerable" className="separador"/>
      </section>

      <section
        id='section19'
        style={{background: dataSala2.section19.background, color: dataSala2.section19.colorText}} 
        className='pySection'>
        <ModelOneImg {...dataSala2.section19} />
      </section>

      <section
        id='section20'
        style={{background: dataSala2.section20.background, color: dataSala2.section20.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section20} />
      </section>

      <section
        id='section21'
        style={{background: dataSala2.section21.background, color: dataSala2.section21.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section21} />
      </section>

      <section
        id='section22'
        className='pySection'>

      </section>

      <section
        id='section23'>
        <img 
          src='./imagenes/sala2/especies-interes.jpg'
          className='separador'
          alt='Otras especies de interés para el CBC'
        />
      </section>

      <section
        id='section24'
        style={{background: dataSala2.section24.background, color: dataSala2.section24.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section24} />
      </section>

      <section
        id='section25'>
        <img src="./imagenes/sala2/video-gris.jpg" alt="Video gris" className="separador"/>
      </section>

      <section
        id='section26'
        style={{background: dataSala2.section26.background, color: dataSala2.section26.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section26} />
      </section>

      <section
        id='section27' 
        style={{background: dataSala2.section27.background, color: dataSala2.section27.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section27} />
      </section>

      <section
        id='section28'
        style={{background: dataSala2.section28.background, color: dataSala2.section28.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section28}/>
      </section>

      <section
        id='section29'
        className=''>
        <Modelimg {...dataSala2.section29}/>
      </section>

      <section
        id='section30'>
      </section>

    </div>

  )
}

export default Sala2