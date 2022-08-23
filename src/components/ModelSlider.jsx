import React from 'react'
import Slider from '../components/Slider'

const ModelSlider = (props) => {
    const numParrafos = props.contenido.length
  return (
    <div className='contSalas '>
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
        <Slider {...props.imagenes}/>
    </div>
  )
}

export default ModelSlider
