import React from 'react'
import SliderRecorted from './SliderRecorted'
import SliderRecorted2 from './SliderRecorted2'
import SliderRecorted3 from './SliderRecorted3'
import SliderRecorted4 from './SliderRecorted4'
import SliderRecorted5 from './SliderRecorted5'
import Slider from './Slider'

const ModelSlider = (props) => {
    const numParrafos = props.contenido.length

    function OptionSlider(){
        if(props.type === 'Recorted'){
            return <SliderRecorted state={props.state} {...props.imagenes}/>
        }else if (props.type === 'Recorted2'){
            return <SliderRecorted2 state={props.state} {...props.imagenes}/>
        }else if (props.type === 'Recorted3'){
            return <SliderRecorted3 state={props.state} {...props.imagenes}/>
        }else if (props.type === 'Recorted4'){
            return <SliderRecorted4 state={props.state} {...props.imagenes}/>
        }else if (props.type === 'Recorted5'){
            return <SliderRecorted5 state={props.state} {...props.imagenes}/>
        }else{
            return <Slider state={props.state} {...props.imagenes}/>
        }
    }

  return (
    <div className='contSalas relative '>
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
                (parrafo,index) => {
                    if(index === numParrafos-1){
                        return <span key={props.title+index}>{parrafo}</span>
                    }else{
                        return <span key={props.title+index}>{parrafo}<br/><br/></span>
                    }
                }
            )}
        </p>
        
        {OptionSlider()}
    </div>
  )
}

export default ModelSlider
