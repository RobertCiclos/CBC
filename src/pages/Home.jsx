import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import { useSelector } from 'react-redux'
import CardCredit from '../components/CardAux/CardCredit'

const Home = () => {
  const ismovil = useMediaQuery({ query: '(min-width: 625px)' })
  const imagen1 = './imagenes/home/SALA1.png'
  const imagen2 = './imagenes/home/SALA2.png'
  const imagen3 = './imagenes/home/SALA3.png'
  const imagen4 = './imagenes/home/SALA4.png'
  const imagen5 = './imagenes/home/SALA5.png'

  const [imagen, setImagen] = useState(imagen1)

  const changeImage = (e) => {
    const value = e.target.value
    switch (value) {
      case 1:
        setImagen(imagen1)
        break
      case 2:
        setImagen(imagen2)
        break
      case 3:
        setImagen(imagen3)
        break
      case 4:
        setImagen(imagen4)
        break
      case 5:
        setImagen(imagen5)
        break
      default:
        break
    }
  }

  const idioma = useSelector(state => state.idioma.value)
  var general = require('../bd/ingles/General.json')
  var data = ""

  switch (idioma) {
    case "ingles":
      data = require('../bd/ingles/Home.json')
      break;
    case "frances":
      data = require('../bd/frances/Home.json')
      break;
    case "creole":
      data = require('../bd/creole/Home.json')
      break;
    case "español":
      data = require('../bd/spaniol/Home.json')
      break;
    default:
      data = require('../bd/spaniol/Home.json')
      break;
  }

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className=' relative'>
        <section
          className="w-full h-[100vh] pt-[85px] bg-center
          relative imgBack bg-[url('/public/imagenes/home/hero.jpg')]">
          <CardCredit idioma={general.credito} author="Matías Balaguer" />
          <div
            className='w-[311px] mx-auto 
              sm:mt-[3%] sm:w-auto'>
            <h1 className='uppercase'>
              {data.section1.title}
            </h1>
            <p
              className='text-left font-Public mt-[6px] font-[300] text-[20px] text-white leading-[27px]
                sm:text-[20px] sm:text-center pr-[65px] sm:pr-0
                md:text-[24px] xl:text-[40px]'>
              {data.section1.subtitle}
            </p>
          </div>
        </section>

        <section
          className="bg-blueCBC text-white py-[48px] sm:py-[96px]">
          <div
            className='w-[311px] sm:w-auto sm:px-[10%] xl:px-0 xl:w-[1040px] mx-auto'>
            <h2 className='uppercase'>{data.section2.title[0]} <br /> {data.section2.title[1]}</h2>
            <div
              className='grid gap-x-[132px] mt-[16px] 
              xl:grid-cols-[490px_1fr] sm:mt-[70px]'>
              <p
                className='font-Public  font-[400] leading-[24px] text-[16px]
                sm:leading-[38px] sm:text-[22px]
                md:leading-[48px] md:text-[32px]'>
                {data.section2.contenido[0]}
                <br /><br />
                {data.section2.contenido[1]}
              </p>
              <ul style={{ listStyleType: "disc" }}
                className="mt-[32px] ml-[18px] 
                sm:mt-0 sm:ml-0">
                <li className='sm:mt-[52px] xl:mt-0'>{data.section2.info[0]}</li>
                <li className='mt-[16px] sm:mt-[24px] xl:mt-[48px]'>{data.section2.info[1]}</li>
                <li className='mt-[16px] sm:mt-[24px] xl:mt-[48px]'>{data.section2.info[2]}</li>
                <li className='mt-[16px] sm:mt-[24px] xl:mt-[48px]'>{data.section2.info[3]}</li>
                <li className='mt-[16px] sm:mt-[24px] xl:mt-[48px]'>{data.section2.info[4]}</li>
              </ul>
            </div>
          </div>
        </section>

        <section
          id=''
          className=" py-[48px] md:py-[96px] xl:py-0">
          <div
            className='mx-auto xl:max-w-[1200px] xl:h-[100vh] relative px-[5%]'>

            <div
              className='xl:absolute top-[50%] xl:translate-y-[-50%]'>
              <div
                className='text-center uppercase'>
                {data.section3.description}
                <h2
                  className='text-center mt-[8px] w-[313px] sm:w-[400px] xl:w-[500px] mx-auto'>
                  {data.section3.title}
                </h2>
                <img src={imagen} alt="imagen de la sala"
                  className="mt-[24px] md:w-auto md:mt-[40px]  w-[313px] sm:w-[400px]  xl:mt-[56px] mx-auto">
                </img>
              </div>
            </div>

            <div className='salas right-0 top-[50%] mt-[56px] 
              overflow-y-auto flex justify-center  translate-x-[3%] 
              sm:justify-center sm:translate-x-[0%]
              xl:translate-x-[-10%] 
              xl:justify-end xl:translate-y-[-50%] xl:mt-0 xl:absolute xl:max-h-[80vh] overflow-x-hidden'>
              <ol
                style={{ listStyleType: "decimal" }}
                className='xl:translate-x-[40px] pr-[50px] '>
                <Link to="/Sala1">
                  <li
                    value={1}
                    onMouseOver={(e) => changeImage(e)}
                    className='cursor-pointer hover:font-[600] mx-auto w-[250px]  
                    sm:w-[350px] md:!mx-0'>
                    <span style={imagen === imagen1 ? styleActive : {}}>
                      {data.section3.salasTitle[0]} </span>
                  </li>
                </Link>
                <Link to='/Sala2'>
                  <li
                    value={2}
                    onMouseOver={(e) => changeImage(e)}
                    className='mt-[32px] md:mt-[56px]  lg:mt-[72px] cursor-pointer hover:font-[600] mx-auto w-[250px]  
                    sm:w-[350px] md:!mx-0'>
                    <span style={imagen === imagen2 ? styleActive : {}}>
                      {data.section3.salasTitle[1]}
                    </span>
                  </li>
                </Link>
                <Link to='/Sala3'>
                  <li
                    value={3}
                    onMouseOver={(e) => changeImage(e)}
                    className='mt-[32px] md:mt-[56px]  lg:mt-[72px] cursor-pointer hover:font-[600] mx-auto w-[250px]  
                    sm:w-[350px] md:!mx-0'>
                    <span style={imagen === imagen3 ? styleActive : {}}>
                      {data.section3.salasTitle[2]}
                    </span>
                  </li>
                </Link>
                <Link to='/Sala4'>
                  <li
                    value={4}
                    onMouseOver={(e) => changeImage(e)}
                    className='mt-[32px] md:mt-[56px]  lg:mt-[72px] cursor-pointer hover:font-[600] mx-auto w-[250px]  
                    sm:w-[350px] md:!mx-0'>
                    <span style={imagen === imagen4 ? styleActive : {}}>{data.section3.salasTitle[3]}</span>
                  </li>
                </Link>
                <Link to='/Sala5'>
                  <li
                    value={5}
                    onMouseOver={(e) => changeImage(e)}
                    className='mt-[32px] md:mt-[56px]  lg:mt-[72px] cursor-pointer hover:font-[600] mx-auto w-[250px]  
                    sm:w-[350px] md:!mx-0'>
                    <span style={imagen === imagen5 ? styleActive : {}}>
                      {data.section3.salasTitle[4]}
                    </span>
                  </li>
                </Link>
              </ol>
            </div>
          </div>
        </section>

        <section
          className='py-[48px] md:py-[96px] bg-[#83B86F]'>
          <div
            className="contenedor xl:w-[1102.52px]">
            <h2
              className='text-[#103A62] uppercase'>
              {data.section4.description}
            </h2>
            <div
              className='grid  text-[#103A62]
              xl:grid-cols-[347px_676.52px] xl:gap-x-[80px] xl:my-[92px]'>
              <div className='font-Public'>
                <img
                  src="./imagenes/home/nicasio.png" alt="Dr. Nicasio"
                  className="my-[24px] md:my-[56px] xl:my-[0px]" />
                <p
                  className='font-[500] text-[16px]
                  sm:text-[24px]
                  md:text-[32px] md:leading-[28.2px] xl:pt-[32px]'>
                  {data.section4.nombre}
                </p>
                <br />
                <p
                  className='font-[400] text-[16px]
                  sm:text-[18px]
                  md:text-[24px] md:leading-[28.2px]'>
                  {data.section4.rol}
                </p>
              </div>
              <blockquote
                className='mt-[24px] 
                xl:grid xl:grid-cols-[87px_493px_87px] xl:gap-[20px] md:mt-[32px] xl:mt-0'>
                <img
                  src="./imagenes/home/comillasInit.png" alt="comillas"
                  className="w-[70px] sm:w-[87px]" />
                <p
                  className=' font-[400] leading-[24px] text-[16px] py-[16px]
                  sm:leading-[38px] sm:text-[22px]
                  md:leading-[48px] md:text-[32px] xl:py-[20px]'>
                  {data.section4.cite}
                </p>
                <img
                  src="./imagenes/home/comillasFinish.png" alt="comillas"
                  className="w-[70px] ml-[100%] translate-x-[-100%] 
                  sm:w-[87px] xl:mt-[392px] xl:translate-x-0 xl:ml-0" />
              </blockquote>
            </div>
          </div>
        </section>

        <section
          className="w-full h-[100vh] relative z-0 snap-y 
          bg-cover bg-no-repeat bg-center bg-[url('/public/imagenes/home/naturaleza.jpg')]">
           <CardCredit idioma={general.credito} author="Thomas Shahan" />
          <div
            className='w-full text-center text-white font-Public absolute bottom-[8%] right-[50%] translate-x-[50%]
            font-bold text-[32px] md:text-[50px] lg:text-[100px] snap-center uppercase'>
            {data.section5.title}
          </div>
        </section>

        <section>
          <div
            className='w-[311px] mx-auto pt-[48px]
            sm:w-[600px] lg:w-[850px] lg:pt-[96px]'>
            <h2
              className='text-center uppercase'>
              {data.section6.title}
            </h2>
            <div
              className='grid justify-center justify-items-center mt-[32px] gap-y-[56px]
              md:grid-cols-3 lg:flex lg:gap-[56px]'>
              <div>
                <img
                  className='w-[129px] h-auto md:w-auto md:h-[72px]'
                  src="./imagenes/home/CubaDesk.png"
                  alt="Bandera de Cuba" />
                <p
                  className='font-Public font-[500] text-[16px] mt-[8px]'>
                  {data.section6.paises[0]}
                </p>
              </div>
              <div>
                <img
                  className='w-[129px] h-auto  md:w-auto md:h-[72px]'
                  src="./imagenes/home/HaitiDesk.png"
                  alt="Bandera de Haiti" />
                <p
                  className='font-Public font-[500] text-[16px] mt-[8px]'>
                  {data.section6.paises[1]}
                </p>
              </div>
              <div>
                <img
                  className='w-[129px] h-auto  md:w-auto md:h-[72px]'
                  src="./imagenes/home/RepublicaDominicanaDesktop.png"
                  alt="Bandera de República Dominicana" />
                <p
                  className='font-Public font-[500] text-[16px] mt-[8px]'>
                  {data.section6.paises[2]}
                </p>
              </div>
              <div className='md:col-span-2 lg:col-span-2 md:translate-x-[-45%] lg:translate-x-[0]'>
                <img
                  className='w-[129px] h-auto md:w-auto md:h-[72px]'
                  src="./imagenes/home/PuertoRicoDesk.png"
                  alt="Bandera de Puerto Rico" />
                <p
                  className='font-Public font-[500] text-[16px] mt-[8px]'>
                  {data.section6.paises[3]}
                </p>
              </div>
              <div className='md:translate-x-[-65%] lg:translate-x-[0]'>
                <img
                  className='w-[129px] h-auto  md:w-auto md:h-[72px]'
                  src="./imagenes/home/JamaicaDesk.png"
                  alt="Bandera de Jamaica" />
                <p
                  className='font-Public font-[500] text-[16px] mt-[8px]'>
                  {data.section6.paises[4]}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className='py-[56px] md:py-[72px]'>
          <div>
            <h2
              className='text-center uppercase'>
              {data.section7.title}
            </h2>
            <div
              className=' mx-auto grid justify-items-center gap-[56px] mt-[32px]
              lg:w-[731px] lg:grid-cols-[237px_362px] lg:mt-[72px] lg:gap-[132px]'>
              <img className='w-[200px] sm:w-[237px]' src={data.section7.imgONU} alt="" />
              <div className=''>
                <img src="./imagenes/home/union_europea.png" alt="" className='mx-auto' />
                <p
                  className='text-[11px] mt-[16px] font-[400] w-[190px] 
                  sm:w-[300px]
                  lg:w-auto lg:text-[13.5px] lg:leading-[17px]'>
                  {data.section7.cite}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          className='font-Public bg-[#F7F7F7] pySection'>
          <div className='mx-auto w-[311px]
            sm:px-[9%] sm:w-auto
            xl:w-[1017px] xl:px-0'>
            <img src="./svg/logo-black.svg" alt="logo CBC" className="mx-auto" />
            <p
              className='text-center font-[700] text-[24px] py-[24px]
              md:text-[32px] md:font-[600] md:py-[32px]'>
              {data.section8.title}
            </p>
            <div
              className='grid gap-[24px] lg:gap-0 w-full
              md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center'>
              <div
                className='font-Public md:justify-self-end lg:justify-self-center'>
                <p
                  className='font-[700] text-[20px]
                  lg:text-[24px]'>
                  {data.section8.subtitle[0]}
                </p>
                <ul
                  className='font-[400] text-[24px] leading-[26.44px] mt-[16px] 
                  lg:text-[24px] lg:leading-[32.16px] lg:mt-[32px] md:ml-[-3%] w-[230px]'>
                  <li>Nicasio Viña</li>
                  <li>Jose Luis Gerhartz</li>
                  <li>SOH Conservación</li>
                  <li>Noel López</li>
                  <li>Fausto de Nevi</li>
                  <li>Carlos Suarez</li>
                  <li>Matias Balaguer</li>
                  <li>Alejandro Balaguer</li>
                  <li>Nobert Dechanel</li>
                  <li>Manuel Félix Perez</li>
                  <li>Rodrigo Balaguer</li>
                </ul>
              </div>

              <div
                className='md:justify-self-center'>
                <p
                  className='font-[700] text-[20px]
                  lg:text-[24px]'>
                  {data.section8.subtitle[1]}
                </p>
                <ul
                  className='font-[400] text-[24px] leading-[26.44px] mt-[16px]
                  lg:text-[24px] lg:leading-[32.16px] lg:mt-[32px] md:ml-[-3%] w-[230px]'>
                  <li>Jose L. Gerhartz</li>
                  <li>Nicasio Viña</li>
                  <li>Juan Carlos Duque</li>
                  <li>Andrea Camacho</li>
                  <li>Leticia de Bonilla</li>
                  <li>Alejandro Balaguer</li>
                  <li>Irene Berguido</li>
                </ul>
              </div>

              <div
                className='md:mx-auto md:col-span-2 md:justify-self-end
                lg:col-span-1'>
                <p
                  className='font-[700] text-[20px]
                  lg:text-[24px]'>{data.section8.subtitle[2]} </p>
                <ul
                  className='font-[400] text-[24px] leading-[26.44px] mt-[16px]
                  lg:text-[24px] lg:leading-[32.16px] lg:mt-[32px] md:ml-[-3%]'>
                  <li>Fundación Albatros Media</li>
                  <li>Ciclos Studio</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{ paddingTop: 0 }}
          className='font-Public bg-[#F7F7F7] 
          py-[56px] md:py-[88px] lg:py-[104px]'>
          <Link to="/Sala1"
            style={styleNavRow}
            className=' w-[200px]
            mx-auto sm:w-[300px] lg:w-[400px]'>
            <span className='sm:text-right font-bold text-[20px] sm:text-[24px]' >
              {data.section9.cite}
            </span>
            <img
              src="./svg/arrowRight.svg"
              alt="arrow" />
          </Link>
        </section>

      </motion.div>
    </AnimatePresence>
  )
}

const styleNavRow = {
  display: "flex",
  alignItems: "center",
  gap: 24
}

export default Home


//stylos
const styleActive = {
  borderBottom: "3px solid rgba(24, 24, 24, 0.7)",
  borderOpacity: "0.5",
  width: "auto"
}