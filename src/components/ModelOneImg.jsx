import React from 'react'

const ModelOneImg = (props) => {
   const numParrafos = props.contenido.length
   return (
      <div className='contSalas '>
         { props.indicador &&
            <ul 
               className='pl-[4.5%] pb-[18px] sm:pb-[24px] lg:pb-[40px] sm:pl-[2.5%]' 
               style={{listStyleType: "disc"}}>
               <li 
                  style={{color: props.colorIndicador}}
                  className='font-[600] font-Public leading-[16.24px] text-[14px]
                  sm:leading-[31.68px] sm:text-[20px] lg:text-[24px]'>
                  {props.indicador}
               </li>
            </ul>
         }
         <h2 className='uppercase'>{props.title}</h2>
         <p className='mtPharagraphs'>
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
         <div className='item grid gap-[32px] mt-[24px] md:mt-[56px]'>
            <img src={props.imagen1} alt={props.alt1} className="w-full h-full pointer-events-none" />
            <cite>{props.description}</cite>
         </div>
      </div>
   )
}

export default ModelOneImg
