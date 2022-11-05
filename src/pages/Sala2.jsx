import React from 'react'
import Modelimg from '../components/Modelimg'
import CardAnimales from '../components/Cards/CardAnimales'
import ModelOneImg from '../components/ModelOneImg'
import ModelSlider from '../components/ModelSlider'
import { useMediaQuery } from 'react-responsive'
import { AnimatePresence, motion } from 'framer-motion'
import ModelNavigation from '../components/ModelNavigation'
import ModelTitle from '../components/ModelTitle'
import Parrafos from '../components/models/Parrafos'
import { Link } from "react-scroll";

const Sala2 = () => {

  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' })
  const istablet = useMediaQuery({ query: '(min-width: 1280px)' })
  const dataSala2 = require('../bd/spañol/Sala2.json')

  console.log(dataSala2.section1.imgBack)

  function renderizadoAux() {

    if (isDesktop) {
      return <div
        className='col-span-5 grid grid-cols-4 gap-[26px]
        w-[1080px]'>
        <Link to='section22' className='hover:bg-slate-200 p-3 rounded-md'>
          <CardAnimales img={dataSala2.section3.img11} name={dataSala2.section3.nombre11} />
        </Link>
        <Link to='section8' className='hover:bg-slate-200 p-3 rounded-md' >
          <CardAnimales img={dataSala2.section3.img12} name={dataSala2.section3.nombre12} />
        </Link>
        <Link to='section16' className='hover:bg-slate-200 p-3 rounded-md'>
          <CardAnimales img={dataSala2.section3.img13} name={dataSala2.section3.nombre13} />
        </Link>
        <div className=' p-3 '>
          <CardAnimales img={dataSala2.section3.img14} name={dataSala2.section3.nombre14} />
        </div>
      </div>
    } else if (istablet) {
      return <>
        <Link to='section22' className='hover:bg-slate-200 p-3 rounded-md'>
          <CardAnimales img={dataSala2.section3.img11} name={dataSala2.section3.nombre11} />
        </Link>
        <Link to='section8' className='hover:bg-slate-200 p-3 rounded-md'>
          <CardAnimales img={dataSala2.section3.img12} name={dataSala2.section3.nombre12} />
        </Link>
        <div
          className='col-span-4 grid grid-cols-2 gap-[10px]'>
          <Link to='section16' className='hover:bg-slate-200 p-3 rounded-md'>
            <CardAnimales img={dataSala2.section3.img13} name={dataSala2.section3.nombre13} />
          </Link>
          <div className=' p-3 '>
            <CardAnimales img={dataSala2.section3.img14} name={dataSala2.section3.nombre14} />
          </div>
        </div>
      </>
    } else {
      return <>
        <Link to='section22' className='hover:bg-slate-200 p-3 rounded-md' >
          <CardAnimales img={dataSala2.section3.img11} name={dataSala2.section3.nombre11} />
        </Link>
        <Link to='section8' className='hover:bg-slate-200 p-3 rounded-md' >
          <CardAnimales img={dataSala2.section3.img12} name={dataSala2.section3.nombre12} />
        </Link>
        <Link to='section16' className='hover:bg-slate-200 p-3 rounded-md'>
          <CardAnimales img={dataSala2.section3.img13} name={dataSala2.section3.nombre13} />
        </Link>
        <div className=' p-3 '>
          <CardAnimales img={dataSala2.section3.img14} name={dataSala2.section3.nombre14} />
        </div>
      </>
    }
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
          style={{ backgroundImage: istablet && `url(${dataSala2.section1.img})` }}
          className='imgBack bg-slate-500 relative z-0'>
          <ModelTitle {...dataSala2.section1} />
        </section>

        <section
          id='section2'
          className='pySection'>
          <main
            className='contSalas '>
            <Parrafos {...dataSala2.section2} />
          </main>
        </section>

        <section
          id='section3'
          style={{ paddingTop: 0 }}
          className='pySection'>
          <div className='contSalasAux'>
            <Link to='section6' className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img1} name={dataSala2.section3.nombre1} />
            </Link>
            <Link to="section19" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img2} name={dataSala2.section3.nombre2} />
            </Link>
            <Link to="section24" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img3} name={dataSala2.section3.nombre3} />
            </Link>
            <Link to="section14" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img4} name={dataSala2.section3.nombre4} />
            </Link>
            <Link to="section13" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img5} name={dataSala2.section3.nombre5} />
            </Link>
            <Link to="section20" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img6} name={dataSala2.section3.nombre6} />
            </Link>
            <Link to="section11" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img7} name={dataSala2.section3.nombre7} />
            </Link>
            <div className=' p-3 '>
              <CardAnimales img={dataSala2.section3.img8} name={dataSala2.section3.nombre8} />
            </div>
            <Link to="section7" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img9} name={dataSala2.section3.nombre9} />
            </Link>
            <Link to="section17" className='hover:bg-slate-200 p-3 rounded-md'>
              <CardAnimales img={dataSala2.section3.img10} name={dataSala2.section3.nombre10} />
            </Link>
            {renderizadoAux()}
          </div>
        </section>

        <section
          id='section4'>
          <img src="./imagenes/sala2/video-especies.jpg" alt="Video Especies Representativas" className="separador" />
        </section>

        <section
          id='section5'
          style={{ backgroundImage: istablet && `url(${dataSala2.section5.img})` }}
          className='imgBack relative z-0 xl:h-[100vh] bg-bottom'>
          <ModelTitle {...dataSala2.section5} />
        </section>


        <section
          id='section6'
          style={{ background: dataSala2.section6.background, color: dataSala2.section6.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala2.section6} />
        </section>

        <section
          id='section7'
          style={{ background: dataSala2.section7.background, color: dataSala2.section7.colorText }}
          className='pySection'>
          <ModelSlider state={true} {...dataSala2.section7} />
        </section>

        <section
          id='section8'
          style={{ background: dataSala2.section8.background, color: dataSala2.section8.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section8} />
        </section>

        <section
          id='section9'
          style={{ background: dataSala2.section9.background, color: dataSala2.section9.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section9} />
        </section>

        <section
          id='section10'
          style={{ backgroundImage: istablet && `url(${dataSala2.section10.img})` }}
          className='imgBack relative z-0 xl:h-[100vh] bg-bottom'>
          <ModelTitle {...dataSala2.section10} />
        </section>

        <section
          id='section11'
          style={{ background: dataSala2.section11.background, color: dataSala2.section11.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala2.section11} />
        </section>

        <section
          id='section12'>
          <img src="./imagenes/sala2/video-gris.jpg" alt="Video" className="separador" />
        </section>

        <section
          id='section13'
          style={{ background: dataSala2.section13.background, color: dataSala2.section13.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala2.section13} />
        </section>

        <section
          id='section14'
          style={{ background: dataSala2.section14.background, color: dataSala2.section14.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section14} />
        </section>

        <section
          id='section15'
          style={{ backgroundImage: istablet && `url(${dataSala2.section15.img})` }}
          className='imgBack relative z-0 xl:h-[100vh] bg-bottom'>
          <ModelTitle {...dataSala2.section10} />
        </section>

        <section
          id='section16'
          style={{ background: dataSala2.section16.background, color: dataSala2.section16.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala2.section16} />
        </section>

        <section
          id='section17'
          style={{ background: dataSala2.section17.background, color: dataSala2.section17.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section17} />
        </section>

        <section
          id='section18'>
          <img src="./imagenes/sala2/video-cocodrilo.jpg" alt="Video Vulnerable" className="separador" />
        </section>

        <section
          id='section19'
          style={{ background: dataSala2.section19.background, color: dataSala2.section19.colorText }}
          className='pySection'>
          <ModelOneImg {...dataSala2.section19} />
        </section>

        <section
          id='section20'
          style={{ background: dataSala2.section20.background, color: dataSala2.section20.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section20} />
        </section>

        <section
          id='section21'
          style={{ background: dataSala2.section21.background, color: dataSala2.section21.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section21} />
        </section>

        <section
          id='section22'
          style={{ background: dataSala2.section22.background, color: dataSala2.section22.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section22} />
        </section>

        <section
          id='section23'
          style={{ backgroundImage: istablet && `url(${dataSala2.section23.img})` }}
          className='imgBack relative z-0 xl:h-[100vh] bg-bottom'>
          <ModelTitle {...dataSala2.section23} />
        </section>

        <section
          id='section24'
          style={{ background: dataSala2.section24.background, color: dataSala2.section24.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section24} />
        </section>

        <section
          id='section25'>
          <img src="./imagenes/sala2/video-gris.jpg" alt="Video gris" className="separador" />
        </section>

        <section
          id='section26'
          style={{ background: dataSala2.section26.background, color: dataSala2.section26.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section26} />
        </section>

        <section
          id='section27'
          style={{ background: dataSala2.section27.background, color: dataSala2.section27.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section27} />
        </section>

        <section
          id='section28'
          style={{ background: dataSala2.section28.background, color: dataSala2.section28.colorText }}
          className='pySection'>
          <ModelSlider {...dataSala2.section28} />
        </section>

        <section
          id='section29'
          className=''>
          <Modelimg {...dataSala2.section29} />
        </section>

        <section
          id='section30'
          className=''>
          <ModelNavigation {...dataSala2.section30} />
        </section>

      </motion.div>
    </AnimatePresence>

  )
}

export default Sala2