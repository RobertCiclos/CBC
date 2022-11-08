import React from 'react'

const CardCredit = (props) => {
    return (
        <div
            className='w-auto bg-black/70 py-[0.5px] 
          text-white absolute  bottom-0 right-0 px-3
            text-[12px] sm:text-[15px] sm:py-1'>
            <span className='font-[600]'>Crédito:</span>
            {" " + props.author}
        </div>
    )
}

export default CardCredit