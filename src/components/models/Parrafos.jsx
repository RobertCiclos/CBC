import React from 'react'

const Parrafos = (props) => {
    const numParrafos = props.contenido.length
    return (
        <div className=''>
            {props.contenido.map(
                (parrafo, index) => {
                    if (index === numParrafos - 1) {
                        return <p key={props.title + index}>{parrafo}</p>
                    } else {
                        return <p key={props.title + index}>{parrafo}<br /><br /></p>
                    }
                }
            )}
        </div>
    )
}

export default Parrafos
