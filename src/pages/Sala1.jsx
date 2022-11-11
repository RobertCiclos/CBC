import React from 'react'
import Modelimg from '../components/Modelimg'
import ModelMap from '../components/ModelMap'
import ModelOneImg from '../components/ModelOneImg'
import ModelSlider from '../components/ModelSlider'
import { useMediaQuery } from 'react-responsive'
import { AnimatePresence, motion } from 'framer-motion'
import ModelNavigation from '../components/ModelNavigation'
import ModelTitle from '../components/ModelTitle'
import Parrafos from '../components/models/Parrafos'
import { useSelector } from 'react-redux'


const Sala1 = () => {

  const istablet = useMediaQuery({ query: '(min-width: 1280px)' })
  
  const idioma = useSelector(state => state.idioma.value)
  var dataSala1 = ""

  switch (idioma) {
    case "ingles":
      dataSala1 = require('../bd/ingles/Sala1.json')
      break;
    case "frances":
      dataSala1 = require('../bd/frances/Sala1.json')
      break;
    case "creole":
      dataSala1 = require('../bd/creole/Sala1.json')
      break;
    case "español":
      dataSala1 = require('../bd/spaniol/Sala1.json')
      break;
    default:
      dataSala1 = require('../bd/spaniol/Sala1.json')
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
          style={{ backgroundImage: istablet && `url(${dataSala1.section1.img})` }}
          className='imgBack bg-slate-500 relative z-0'>
          <ModelTitle {...dataSala1.section1} />
        </section>

        <section
          id='section2'
          className='pySection'>
          <main
            className='contSalas '>
            <Parrafos {...dataSala1.section2} />
          </main>
        </section>

        <section
          id='section3'
          style={{ background: dataSala1.section3.background, color: dataSala1.section3.colorText }}
          className='pySection'>
          <ModelMap {...dataSala1.section3} />
        </section>

        <section
          id='section4'
          style={{ background: dataSala1.section4.background, color: dataSala1.section4.colorText }}
          className='pySection'>
          <ModelSlider state={true} {...dataSala1.section4} />
        </section>

        <section
          id='section5'
          style={{ background: dataSala1.section5.background, color: dataSala1.section5.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala1.section5} />
        </section>

        <section
          id='section6'>
          <img src="./imagenes/sala1/videoSala1.jpg" alt="Video Conexión natural" className="separador" />
        </section>

        <section
          id='section7'
          style={{ background: dataSala1.section7.background, color: dataSala1.section7.colorText }}
          className='pySection'>
          <ModelMap {...dataSala1.section7} />
        </section>

        <section
          id='section8'
          style={{ background: dataSala1.section8.background, color: dataSala1.section8.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section8} />
        </section>

        <section
          id='section9'
          style={{ background: dataSala1.section9.background, color: dataSala1.section9.colorText }}
          className='pySection'>
          <ModelMap {...dataSala1.section9} />
        </section>

        <section
          id='section10'
          style={{ background: dataSala1.section10.background, color: dataSala1.section10.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section10} />
        </section>

        <section
          id='section11'
          style={{ background: dataSala1.section11.background, color: dataSala1.section11.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section11} />
        </section>

        <section
          id='section12'
          style={{ background: dataSala1.section12.background, color: dataSala1.section12.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section12} />
        </section>

        <section
          id='section13'
          style={{ background: dataSala1.section13.background, color: dataSala1.section13.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section13} />
        </section>

        <section
          id='section14'
          style={{ background: dataSala1.section14.background, color: dataSala1.section14.colorText }}
          className='pySection'>
          <ModelMap {...dataSala1.section14} />
        </section>

        <section
          id='section15'
          style={{ background: dataSala1.section15.background, color: dataSala1.section15.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section15} />
        </section>

        <section
          id='section16'
          style={{ background: dataSala1.section16.background, color: dataSala1.section16.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section16} />
        </section>

        <section
          id='section17'
          style={{ background: dataSala1.section17.background, color: dataSala1.section17.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section17} />
        </section>

        <section
          id='section18'
          style={{ background: dataSala1.section18.background, color: dataSala1.section18.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section18} />
        </section>

        <section
          id='section19'
          style={{ background: dataSala1.section19.background, color: dataSala1.section19.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section19} />
        </section>

        <section
          id='section20'
          style={{ background: dataSala1.section20.background, color: dataSala1.section20.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala1.section20} />
        </section>

        <section
          id='section21'
          className=''>
          <Modelimg {...dataSala1.section21} />
        </section>

        <section
          id='section22'
          className=''>
          <ModelNavigation sala1={true} {...dataSala1.section22} />
        </section>

      </motion.div>
    </AnimatePresence>
  )
}


export default Sala1




