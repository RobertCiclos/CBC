import React from 'react'

const CardCredit = (props) => {
    return (
        <div
            className='w-auto h-[24px] bg-black/70 
          text-white absolute  bottom-0 right-0 px-3
            text-[15px]'>
            <span className='font-[600]'>Crédito:</span>
            {" " + props.author}
        </div>
    )
}

export default CardCredit