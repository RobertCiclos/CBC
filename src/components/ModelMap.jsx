import React from 'react'

const ModelMap = (props) => {
  const numParrafos = props.contenido.length

  return (
    <>
       <div className='contSalas'>
          <h2 className='uppercase'>{props.title}</h2>
          <p className='mtPharagraphs'>
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
        </div>
        <img 
          src={props.imagen} 
          alt={props.description[0]}
          className='w-full mt-[32px] mb-[16px] lg:mt-[56px] lg:mb-[32px]'>
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
