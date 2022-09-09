import React from 'react'

const ModelMap = (props) => {
  const numParrafos = props.contenido.length

  return (
    <>
      <div className='contSalas'>
        <h2 className='uppercase'>{props.title}</h2>
        <p className='mtPharagraphs mb-[32px] lg:mb-[56px]'>
          {props.contenido.map(
            (parrafo, index) => {
              if (index === numParrafos - 1) {
                return <span key={props.title + index}>{parrafo}</span>
              } else {
                return <span key={props.title + index}>{parrafo}<br /><br /></span>
              }
            }
          )}
        </p>

      </div>
      <div
        className='w-full mb-[16px] lg:mb-[32px] relative'>
        {props.subtitle &&
          <h5
            className='mt-[8px] sm:mt-[16px] md:mt-[24px] 
            absolute left-[50%] translate-x-[-50%] w-[320px] mx-auto
            sm:px-[8%] sm:w-full text-white p-[8px]
            xl:px-0 xl:w-[1100px] bg-black/80'>
            {props.subtitle}
          </h5>
        }
        <img
          className='w-full'
          src={props.imagen}
          alt={props.description[0]}>
        </img>
      </div>
      <div className='contSalas pr-[12px] sm:pr-0'>
        <cite>
          {props.description.map(
            (parrafo, index) => {
              if (index === numParrafos - 1) {
                return <span key={props.title + index}>{parrafo}</span>
              } else {
                return <span key={props.title + index}>{parrafo}<br /></span>
              }
            }
          )}
        </cite>
      </div>
    </>
  )
}

export default ModelMap
