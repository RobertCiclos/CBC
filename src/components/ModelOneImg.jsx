import React from 'react'
import { useSelector } from 'react-redux'
import CardCredit from './CardAux/CardCredit'

const ModelOneImg = (props) => {
   const numParrafos = props.contenido.length
   const idioma = useSelector(state => state.idioma.value)
   var general = ""
 
   switch (idioma) {
     case "ingles":
       general = require('../bd/ingles/General.json')
       break;
     case "frances":
       general = require('../bd/frances/General.json')
       break;
     case "creole":
       general = require('../bd/creole/General.json')
       break;
     case "español":
       general = require('../bd/spaniol/General.json')
       break;
     default:
       general = require('../bd/spaniol/General.json')
       break;
   }
   return (
      <div className='contSalas '>
         {props.indicador &&
            <ul
               className='pl-[4.5%] pb-[18px] sm:pb-[24px] lg:pb-[40px] sm:pl-[2.5%]'
               style={{ listStyleType: "disc" }}>
               <li
                  style={{ color: props.colorIndicador }}
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
            <div className='relative'>
               {props.autor1 && <CardCredit idioma={general.credito} autor={props.autor1} />}
               <img src={props.imagen1} alt={props.alt1} className="w-full h-full pointer-events-none" />
            </div>
            <cite>{props.description}</cite>
            {
               props.download &&
               <div 
                  className='flex w-full bg-white justify-center items-center
                  gap-[18px] py-[16px]
                  sm:gap-[24px] md:py-[24px]
                  md:gap-[36px]
                  lg:gap-[59px]'>
                  <img 
                     src='imagenes/sala4/pdf-logo.png'
                     alt='PDF'
                     className='w-[28px] sm:w-[72px] md:w-[80px]'>
                  </img>
                  <div className='grid'>
                     <p 
                        className='font-Public font-bold text-[#181818]
                        text-[12px] sm:text-[20px] md:text-[26px] lg:text-[32px]'> 
                        {props.sub}
                     </p>
                     <p 
                        className='text-[#103A62] underline
                        text-[8px] sm:text-[16px]'> 
                        {props.see}
                     </p>
                  </div>
               </div>
            }
         </div>
      </div>
   )
}

export default ModelOneImg
