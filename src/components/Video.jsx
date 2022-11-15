import React from 'react'

const Video = (props) => {
    return (
        <iframe
            src={props.url}
            title={props.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            autoPlay
            className='w-full 
            min-h-[28vh]
            sm:min-h-[50vh]  md:min-h-[60vh] 
            lg:min-h-[70vh] xl:min-h-[85vh]'>
        </iframe>
    )
}

export default Video