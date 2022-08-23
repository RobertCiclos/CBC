import React from 'react'

const ModelMap = (props) => {
  const numParrafos = props.contenido.length

  return (
    <>
       <div className='contSalas'>
          <h2 className='uppercase'>{props.title}</h2>
          <p className='mtPharagraphs mb-[32px] lg:mb-[56px]'>
             {props.contenido.map( 
                (parrafo,index) => {
                    if(index === numParrafos-1){
                        return <span key={props.title+index}>{parrafo}</span>
                    }else{
                        return <span key={props.title+index}>{parrafo}<br/><br/></span>
                    }
                }
            )}
          </p>
          { props.subtitle &&
            <h5 className='mb-[16px] sm:mb-[24px] md:mb-[32px]'>
              {props.subtitle}
            </h5>
         }
        </div>
        <img 
          src={props.imagen} 
          alt={props.description[0]}
          className='w-full mb-[16px] lg:mb-[32px]'>
        </img>
        <div className='contSalas pr-[12px] sm:pr-0'>
          <cite>
            {props.description.map( 
                  (parrafo,index) => {
                      if(index === numParrafos-1){
                          return <span key={props.title+index}>{parrafo}</span>
                      }else{
                          return <span key={props.title+index}>{parrafo}<br/></span>
                      }
                  }
            )}
          </cite>
        </div>
    </>
  )
}

export default ModelMap
