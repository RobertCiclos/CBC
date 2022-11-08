import React from 'react'
import ModelSlider from '../components/ModelSlider'
import ModelOneImg from '../components/ModelOneImg'
import ModelMap from '../components/ModelMap'
import ModelNavigation from '../components/ModelNavigation'
import { useMediaQuery } from 'react-responsive'
import { AnimatePresence, motion } from 'framer-motion'
import ModelTitle from '../components/ModelTitle'
import Parrafos from '../components/models/Parrafos'
import { useSelector } from 'react-redux'

const Sala5 = () => {

 
  const istablet = useMediaQuery({ query: '(min-width: 1280px)' })
  
  const idioma = useSelector(state => state.idioma.value)

  var dataSala5 = ""
  switch (idioma) {
    case "ingles":
      dataSala5 = require('../bd/ingles/Sala5.json')
      break;
    case "frances":
      dataSala5 = require('../bd/frances/Sala5.json')
      break;
    case "creole":
      dataSala5 = require('../bd/creole/Sala5.json')
      break;
    case "español":
      dataSala5 = require('../bd/spaniol/Sala5.json')
      break;
    default:
      dataSala5 = require('../bd/spaniol/Sala5.json')
      break;
  }
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1.5 }}
        className='pt-[65px] sm:pt-[85px] overflow-x-hidden'>

        <section
          id='section1'
          style={{ backgroundImage: istablet && `url(${dataSala5.section1.img})` }}
          className='imgBack bg-slate-500 relative z-0'>
          <ModelTitle {...dataSala5.section1} />
        </section>

        <section
          id='section2'
          className='pySection'>
          <main 
            className='contSalas '>
            <Parrafos {...dataSala5.section2} />
          </main>
        </section>
      
        <section
          id='section3'
          className='pySection bg-[#528641] text-white'>
          <div className='contSalas'>
            <h2>{dataSala5.section3.title}</h2>
            <p className='mt-[16px] sm:mt-[36px] lg:mt-[48px]'>
              {dataSala5.section3.contenido}
            </p>
            <img
              src="./imagenes/sala5/logosostenibles.png"
              alt="Logo Objetivos Desarrollo"
              className="mx-auto scale-50 mt-[8px] mb-[24px]
            sm:scale-100 sm:mt-[32px] sm:mb-[56px]
            lg:mt-[56px] lg:mb-[88px]" />
            <div
              className='grid grid-cols-3 justify-items-center gap-y-[32px]
            sm:grid-cols-2 sm:gap-y-[64px]
            lg:grid-cols-3 lg:gap-y-[80px]'>
              <img
                src="./imagenes/sala5/findelapobreza.png"
                alt="Fin de la Pobreza"
                className=" w-[80px] sm:w-auto" />
              <img
                src="./imagenes/sala5/hambrecero.png"
                alt="Hambre Cero"
                className=" w-[80px] sm:w-auto" />
              <img
                src="./imagenes/sala5/igualdaddegenero.png"
                alt="Igualdad de Género "
                className=" w-[80px] sm:w-auto" />
              <img
                src="./imagenes/sala5/accionporelclima.png"
                alt="Acción por el Clima "
                className=" w-[80px] sm:w-auto" />
              <img
                src="./imagenes/sala5/ecosistematerrestre.png"
                alt="Ecossistema Terrestre "
                className=" w-[80px] sm:w-auto" />
              <img
                src="./imagenes/sala5/vidasubmarina.png"
                alt="Vida Submarina  "
                className="w-[80px] sm:w-auto" />
            </div>
          </div>
        </section>

        <section
          id='section4'
          style={{ background: dataSala5.section4.background, color: dataSala5.section4.colorText }}
          className='pySection'>
          <ModelSlider state={true} type='Recorted3' {...dataSala5.section4} />
        </section>

        <section
          id='section5'
          style={{ background: dataSala5.section5.background, color: dataSala5.section5.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section5} />
        </section>

        <section
          id='section6'
          style={{ background: dataSala5.section6.background, color: dataSala5.section6.colorText }}
          className='pySection'>
          <ModelSlider type='Recorted3' {...dataSala5.section6} />
        </section>

        <section
          id='section7'
          style={{ background: dataSala5.section7.background, color: dataSala5.section7.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala5.section7} />
        </section>

        <section
          id='section8'
          style={{ background: dataSala5.section8.background, color: dataSala5.section8.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section8} />
        </section>

        <section
          id='section9'
          style={{ background: dataSala5.section9.background, color: dataSala5.section9.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section9} />
        </section>

        <section
          id='section10'
          style={{ background: dataSala5.section10.background, color: dataSala5.section10.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section10} />
        </section>

        <section
          id='section11'
          style={{ background: dataSala5.section11.background, color: dataSala5.section11.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section11} />
        </section>

        <section
          id='section12'
          style={{ background: dataSala5.section12.background, color: dataSala5.section12.colorText }}
          className='pySection'>
          <ModelMap {...dataSala5.section12} />
        </section>

        <section
          id='section13'
          style={{ background: dataSala5.section13.background, color: dataSala5.section13.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section13} />
        </section>

        <section
          id='section14'
          style={{ background: dataSala5.section14.background, color: dataSala5.section14.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala5.section14} />
        </section>

        <section
          id='section15'
          style={{ background: dataSala5.section15.background, color: dataSala5.section15.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section15} />
        </section>

        <section
          id='section16'
          style={{ background: dataSala5.section16.background, color: dataSala5.section16.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section16} />
        </section>

        <section
          id='section17'
          style={{ background: dataSala5.section17.background, color: dataSala5.section17.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section17} />
        </section>

        <section
          id='section18'
          style={{ background: dataSala5.section18.background, color: dataSala5.section18.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section18} />
        </section>

        <section
          id='section19'
          style={{ background: dataSala5.section19.background, color: dataSala5.section19.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala5.section19} />
        </section>

        <section
          id='section20'
          style={{ background: dataSala5.section20.background, color: dataSala5.section20.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section20} />
        </section>

        <section
          id='section21'
          style={{ background: dataSala5.section21.background, color: dataSala5.section21.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section21} />
        </section>

        <section
          id='section22'
          style={{ background: dataSala5.section22.background, color: dataSala5.section22.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala5.section22} />
        </section>

        <section
          id='section23'
          style={{ background: dataSala5.section23.background, color: dataSala5.section23.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section23} />
        </section>

        <section
          id='section24'
          style={{ background: dataSala5.section24.background, color: dataSala5.section24.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala5.section24} />
        </section>

        <section
          id='section25'
          style={{ background: dataSala5.section25.background, color: dataSala5.section25.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section25} />
        </section>

        <section
          id='section26'
          style={{ background: dataSala5.section26.background, color: dataSala5.section26.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section26} />
        </section>

        <section
          id='section27'
          style={{ background: dataSala5.section27.background, color: dataSala5.section27.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala5.section27} />
        </section>

        <section
          id='section28'
          style={{ background: dataSala5.section28.background, color: dataSala5.section28.colorText }}
          className='pySection'>
          <ModelSlider type='Recorted2' {...dataSala5.section28} />
        </section>

        <section
          id='section29'
          className=''>
          <ModelNavigation {...dataSala5.section29} />
        </section>

      </motion.div>
    </AnimatePresence>
  )
}

export default Sala5
