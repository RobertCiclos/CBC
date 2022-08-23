import React, { useState } from 'react'

const Home = () => {
  
  const imagen1 = './imagenes/home/SALA1.png'
  const imagen2 = './imagenes/home/SALA2.png'
  const imagen3 = './imagenes/home/SALA3.png'
  const imagen4 = './imagenes/home/SALA4.png'
  const imagen5 = './imagenes/home/SALA5.png'

  const [imagen,setImagen] = useState(imagen1)

  const changeImage = (e) => {
    const value = e.target.value
    switch (value){
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

  return (
    <div className=' relative'>
      <section 
        className="w-full h-[100vh] pt-[85px]
        imgBack bg-[url('/public/imagenes/home/hero.jpg')]">
          <div 
            className='w-[311px] mx-auto 
            sm:mt-[3%] sm:w-auto'>
            <h1>
              CORREDOR BIOLÓGICO EN EL CARIBE
            </h1>
            <p 
              className='text-left font-Public mt-[6px] font-[300] text-[20px] text-white leading-[27px]
              sm:text-[25px] sm:text-center pr-[65px] sm:pr-0
              md:text-[25px] xl:text-[40px]'>
              CONSERVANDO TESOROS COMPARTIDOS
            </p>
          </div>
      </section>

      <section 
        className="bg-blueCBC text-white py-[48px] sm:py-[96px]">
        <div
          className='w-[311px] md:w-[700px] xl:w-[1040px] mx-auto'>
          <h2 className=''>Exposición: <br/> Conservando Tesoros Compartidos</h2>
          <div 
            className='grid gap-x-[132px] mt-[16px] 
            xl:grid-cols-[490px_1fr] sm:mt-[70px]'>
            <p
              className='font-Public  font-[400] leading-[24px] text-[16px]
              sm:leading-[38px] sm:text-[22px]
              md:leading-[48px] md:text-[32px]'>
              Te invitamos a conocer los sorprendentes tesoros naturales del Corredor Biológico en el Caribe al recorrer esta exhibición fotográfica. 
              A través de las cinco salas podrás conocer la importancia de la conectividad ecológica en el Caribe, nuestra historia y el trabajo en 
              conservación que se ha adelantado en los 15 años de esta Iniciativa. 
            </p>
            <ul style={{listStyleType: "disc"}}
              className="mt-[32px] ml-[18px] sm:mt-0 sm:ml-0">
              <li className='sm:mt-[52px] xl:mt-0'>15 años de la Iniciativa del CBC</li>
              <li className='mt-[24px] sm:mt-[52px] xl:mt-[112px]'>1 agenda compartida de conservación</li>
              <li className='mt-[24px] sm:mt-[52px] xl:mt-[112px]'>4 ecosistemas y 14 grupos de especies prioritarios para la conservación</li>
            </ul>
          </div>    
        </div>
      </section>

      <section 
        className="py-[48px] md:py-[96px]">
        <div 
          className='contenedor grid sm:justify-items-center
          xl:grid-cols-[550px_440px] xl:gap-[86px] xl:justify-items-start
          xl:w-[1078px]'>
          <div
            className='text-center relative'>
            CONOCE LAS SALAS
            <h2
              className='text-center mt-[8px] lg:w-[317px] mx-auto'>
              UNA MIRADA AL CARIBE DE CERCA
            </h2>
            <img src={imagen} alt="imagen de la sala" 
              className="mt-[24px] md:w-[550px] md:mt-[48px] xl:mt-[124px]" />
            <img src="./svg/arrow-bottom.svg" alt="flecha" 
              className="absolute bottom-0 right-[50%] translate-x-[50%]
              invisible xl:visible" />
          </div>
          <ol
            style={{listStyleType: "decimal"}} 
            className='my-[24px] ml-[20px] sm:ml-0 lg:w-[440px] 
            sm:my-[72px] xl:my-0'>
            <li
              value={1}
              onMouseOver={(e)=>changeImage(e)}
              className='cursor-pointer'>
              <span style={imagen === imagen1 ? styleActive:{}}>La conectividad</span><br/>
              <span style={imagen === imagen1 ? styleActive:{}}>ecológica y el Corredor </span><br/>
              <span style={imagen === imagen1 ? styleActive:{}}>Biológico en el Caribe</span>
            </li>
            <li
              value={2}
              onMouseOver={(e)=>changeImage(e)}
              className='mt-[32px] lg:mt-[72px] cursor-pointer'>
              <span style={imagen === imagen2 ? styleActive:{}}>Especies prioritarias para</span><br/>
              <span style={imagen === imagen2 ? styleActive:{}}>el Corredor Biológico </span><br/>
              <span style={imagen === imagen2 ? styleActive:{}}>en el Caribe</span>
            </li>
            <li
              value={3}
              onMouseOver={(e)=>changeImage(e)}
              className='mt-[32px] lg:mt-[72px] lg:mr-[55px] cursor-pointer'>
              <span style={imagen === imagen3 ? styleActive:{}}>Ecosistemas prioritarios</span><br/>
              <span style={imagen === imagen3 ? styleActive:{}}>para el Corredor </span><br/>
              <span style={imagen === imagen3 ? styleActive:{}}>Biológico en el Caribe</span>
            </li>
            <li
              value={4}
              onMouseOver={(e)=>changeImage(e)}
              className='mt-[32px] lg:mt-[72px] cursor-pointer'>
              <span style={imagen === imagen4 ? styleActive:{}}>El Corredor Biológico en</span><br/>
              <span style={imagen === imagen4 ? styleActive:{}}>el Caribe, la Iniciativa</span>
            </li>
            <li
              value={5}
              onMouseOver={(e)=>changeImage(e)}
              className='mt-[32px] lg:mt-[72px] lg:mr-[55px] cursor-pointer'>
              <span style={imagen === imagen5 ? styleActive:{}}>15 años de la Iniciativa</span><br/>
              <span style={imagen === imagen5 ? styleActive:{}}>del Corredor Biológico en </span><br/>
              <span style={imagen === imagen5 ? styleActive:{}}>el Caribe (CBC):  Logros,</span><br/>
              <span style={imagen === imagen5 ? styleActive:{}}>retos y futuro</span>
            </li>
          </ol>
        </div>
      </section>
      <section
        className='py-[48px] md:py-[96px] bg-[#83B86F]'>
        <div 
          className="contenedor xl:w-[1102.52px]">
          <h2 
            className='text-[#103A62]'>
            EL COMIENZO DE LA INICIATIVA
          </h2>
          <div 
            className='grid 
            xl:grid-cols-[347px_676.52px] xl:gap-x-[80px] xl:my-[92px]'>
            <div className='font-Public'>
              <img 
                src="./imagenes/home/nicasio.png" alt="Dr. Nicasio" 
                className="my-[24px] md:my-[56px] xl:my-[0px]" />
              <p 
                className='font-[500] text-[16px]
                md:text-[32px] md:leading-[28.2px] xl:pt-[32px]'>
                Dr. Nicasio Viña Dávila
              </p>
              <br/>
              <p 
                className='font-[400] text-[16px]
                md:text-[24px] md:leading-[28.2px]'>
                Secretario Ejecutivo del Corredor Biológico en el Caribe (CBC)
              </p>
            </div>
            <blockquote 
              className='mt-[24px] 
              xl:grid xl:grid-cols-[87px_493px_87px] xl:gap-[20px] xl:mt-[32px]'>
              <img 
                src="./imagenes/home/comillasInit.png" alt="comillas" 
                className="w-[70px] sm:w-[87px]" />
              <p 
                className=' font-[400] leading-[24px] text-[16px] py-[16px]
                sm:leading-[38px] sm:text-[22px]
                md:leading-[48px] md:text-[32px] xl:py-[20px]'>
                La Iniciativa del Corredor Biológico en el Caribe (CBC) lleva 15 años trabajando alrededor 
                de los valores más importantes para la conservación de la diversidad biológica a la vez 
                que ha demostrado ser una plataforma de cooperación exitosa entre los países de las 
                Antillas Mayores.
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
        className="w-full h-[100vh] relative z-0
        bg-cover bg-no-repeat bg-center bg-[url('/public/imagenes/home/naturaleza.jpg')]">
        <div 
          className='w-full text-center text-white font-Public absolute bottom-[8%] right-[50%] translate-x-[50%]
          font-bold text-[24px] md:text-[50px] lg:text-[100px] '>
          NATURALEZA VIVA
        </div>
      </section>
      <section>
        <div 
          className='w-[311px] mx-auto pt-[48px]
          sm:w-[600px] lg:w-[844px] lg:pt-[96px]'>
          <h2 
            className='text-center'>
              PAÍSES
          </h2>
          <div 
            className='grid justify-center mt-[32px] 
            md:grid-cols-3 lg:grid-cols-5 lg:gap-x-[56px]'>
 
            <img src="./imagenes/home/cuba.png" alt="Bandera de Cuba" />
            <img src="./imagenes/home/haiti.png" alt="Bandera de Haiti" />
            <img src="./imagenes/home/dominicana.png" alt="Bandera de República Dominicana"/>
            <img src="./imagenes/home/puertorico.png" alt="Bandera de Puerto Rico"/>
            <img src="./imagenes/home/jamaica.png" alt="Bandera de Jamaica"/>
            <p
              className='font-Public font-[500] text-[16px] mt-[15.75px] '>
              Cuba
            </p>
            <p
              className='font-Public font-[500] text-[16px] mt-[15.75px] '>
              Haiti
            </p>
            <p
              className='font-Public font-[500] text-[16px] mt-[15.75px] '>
              R. Dominicana
            </p>
            <p
              className='font-Public font-[500] text-[16px] mt-[15.75px] '>
              Puerto Rico
            </p>
            <p
              className='font-Public font-[500] text-[16px] mt-[15.75px] '>
              Jamaica
            </p>
          </div>
        </div>
      </section>

      <section
          className='py-[56px] md:py-[72px]'>
        <div>
          <h2 
            className='text-center'>
              CON APOYO DE:
          </h2>
          <div 
            className=' mx-auto grid justify-items-center gap-[56px] mt-[32px]
            lg:w-[731px] lg:grid-cols-[237px_362px] lg:mt-[72px] lg:gap-[132px]'>
            <img src="./imagenes/home/onu.png" alt="" />
            <div className=''>
              <img src="./imagenes/home/union_europea.png" alt="" className='mx-auto' />
              <p
                className='text-[11px] mt-[16px] font-[400] w-[190px] 
                lg:w-auto lg:text-[13.5px] lg:leading-[17px]'>
                Producido con el apoyo financiero de la Unión Europea. 
                Su contenido es responsabilidad exclusiva del PNUMA y no 
                refleja necesariamente las opiniones de la Unión Europea
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <section
        className='font-Public bg-[#F7F7F7] pb-[36px] 
        md:py-[96px] '>
        <div className='mx-auto w-[311px]
          sm:px-[9%] sm:w-auto
          xl:w-[1017px] xl:px-0'>
          <img src="./svg/logo-black.svg" alt="logo CBC" className="mx-auto" />
          <p 
            className='text-center font-[700] text-[24px] py-[24px]
            md:text-[32px] md:font-[600] md:py-[32px]'>
            AGRADECIMIENTOS
          </p>
          <div 
            className='grid gap-[24px]
            md:grid-cols-2 lg:grid-cols-3 lg:justify-items-center'>
            <div
              className='md:justify-self-start'>
              <p
                className='font-[700] text-[20px]
                lg:text-[24px]'>TEXTOS</p>
              <ul
                className='font-[400] text-[24px]
                lg:text-[24px]'>
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
              className='font-Public md:justify-self-end lg:justify-self-center'>
              <p
                className='font-[700] text-[20px]
                lg:text-[24px]'>
                FOTOGRAFÍAS
              </p>
              <ul
                className='font-[400] text-[24px]
                lg:text-[24px]'>
                <li>Nicasio Viña</li>
                <li>Jose Luis Gerhartz</li>
                <li>SOH Conservación</li>
                <li>Noel López</li>
                <li>Fausto de Nevi</li>
                <li>Carlos Suarez</li>
                <li>Matias Balaguer</li>
                <li>Alejandro Balaguer</li>
                <li>Nobert Dechanel</li>
                <li>Manuel Félix</li>
              </ul>
            </div>
            <div 
              className='md:mx-auto md:col-span-2 md:justify-self-end
              lg:col-span-1'>
              <p
                className='font-[700] text-[20px]
                lg:text-[24px]'>DISEÑO</p>
              <ul
                className='font-[400] text-[24px]
                lg:text-[24px]'>
                <li>Fundación Albatros Media</li>
                <li>Ciclos Studio</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home


//stylos
const styleActive = {
  borderBottom: "3px solid rgba(24, 24, 24, 0.7)",
  borderOpacity: "0.5",
  width: "auto"
}