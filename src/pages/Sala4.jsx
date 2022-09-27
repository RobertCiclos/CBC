import React from 'react'
import { useMediaQuery } from 'react-responsive'
import ModelSlider from '../components/ModelSlider'
import ModelOneImg from '../components/ModelOneImg'
import ModelMap from '../components/ModelMap'
import Modelimg from '../components/Modelimg'
import ModelNavigation from '../components/ModelNavigation'
import { AnimatePresence, motion } from 'framer-motion'
import ModelTitle from '../components/ModelTitle'
import Parrafos from '../components/models/Parrafos'
import ModelMapAnimation from '../components/ModelMapAnimation'

const Sala4 = () => {
  const istablet = useMediaQuery({ query: '(min-width: 1280px)' })
  const dataSala4 = require('../bd/Sala4.json')

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
          style={{ backgroundImage: istablet && `url(${dataSala4.section1.img})` }}
          className='imgBack bg-slate-500 relative z-0'>
          <ModelTitle {...dataSala4.section1} />
        </section>

        <section
          id='section2'
          className='pySection'>
          <main 
            className='contSalas '>
            <Parrafos {...dataSala4.section2} />
          </main>
        </section>

        <section
          id='section 3'>
          <img src="./imagenes/sala2/video-gris.jpg" alt="Video" className="separador" />
        </section>

        <section
          id='section4'
          style={{ background: dataSala4.section4.background, color: dataSala4.section4.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala4.section4} />
        </section>

        <section
          id='section5'
          style={{ background: dataSala4.section5.background, color: dataSala4.section5.colorText }}
          className='pySection'>
          <ModelSlider  state={true} {...dataSala4.section5} />
        </section>

        <section
          id='section6'
          style={{ background: dataSala4.section6.background, color: dataSala4.section6.colorText }}
          className='pySection'>
          <ModelSlider type='Recorted2' {...dataSala4.section6} />
        </section>

        <section
          id='section7'
          style={{ background: dataSala4.section7.background, color: dataSala4.section7.colorText }}
          className='pySection'>
          <ModelSlider type='Recorted3' {...dataSala4.section7} />
        </section>

        <section
          id='section8'
          style={{ background: dataSala4.section8.background, color: dataSala4.section8.colorText }}
          className='pySection'>
          <ModelMapAnimation {...dataSala4.section8} />
        </section>

        <section
          id='section9'
          style={{ background: dataSala4.section9.background, color: dataSala4.section9.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section9} />
        </section>

        <section
          id='section10'
          style={{ background: dataSala4.section10.background, color: dataSala4.section10.colorText }}
          className='pySection'>
          <ModelSlider type='Recorted4' {...dataSala4.section10} />
        </section>

        <section
          id='section11'
          style={{ background: dataSala4.section11.background, color: dataSala4.section11.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala4.section11} />
        </section>


        <section
          id='section12'
          style={{ background: dataSala4.section12.background, color: dataSala4.section12.colorText }}
          className='pySection'>
          <ModelSlider type='Recorted5' {...dataSala4.section12} />
        </section>


        <section
          id='section13'
          style={{ background: dataSala4.section13.background, color: dataSala4.section13.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section13} />
        </section>


        <section
          id='section14'
          style={{ background: dataSala4.section14.background, color: dataSala4.section14.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section14} />
        </section>

        <section
          id='section15'
          style={{ background: dataSala4.section15.background, color: dataSala4.section15.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala4.section15} />
        </section>

        <section
          id='section16'
          style={{ background: dataSala4.section16.background, color: dataSala4.section16.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section16} />
        </section>

        <section
          id='section17'
          style={{ background: dataSala4.section17.background, color: dataSala4.section17.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section17} />
        </section>

        <section
          id='section18'
          style={{ background: dataSala4.section18.background, color: dataSala4.section18.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section18} />
        </section>

        <section
          id='section19'
          style={{ background: dataSala4.section19.background, color: dataSala4.section19.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section19} />
        </section>

        <section
          id='section20'
          style={{ background: dataSala4.section20.background, color: dataSala4.section20.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section20} />
        </section>

        <section
          id='section21'
          style={{ background: dataSala4.section21.background, color: dataSala4.section21.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala4.section21} />
        </section>

        <section
          id='section22'
          className=''>
          <Modelimg {...dataSala4.section22} />
        </section>

        <section
          id='section23'
          className=''>
          <ModelNavigation {...dataSala4.section23} />
        </section>

      </motion.div>
    </AnimatePresence>
  )
}

export default Sala4
