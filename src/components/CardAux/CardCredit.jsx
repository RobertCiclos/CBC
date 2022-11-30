import React from 'react'
import { useSelector } from "react-redux"

const CardCredit = (props) => {
    const idioma = useSelector(state => state.idioma.value)
    var dataSala1 = ""

    switch (idioma) {
        case "ingles":
            dataSala1 = require('../../bd/ingles/General.json')
            break;
        case "frances":
            dataSala1 = require('../../bd/frances/General.json')
            break;
        case "creole":
            dataSala1 = require('../../bd/creole/General.json')
            break;
        case "español":
            dataSala1 = require('../../bd/spaniol/General.json')
            break;
        default:
            dataSala1 = require('../../bd/spaniol/General.json')
            break;
    }

    return (
        <div
            className='w-auto bg-black/70 py-[0.5px]  !z-10
          text-white absolute  bottom-0 right-0 px-3
            text-[12px] sm:text-[15px] sm:py-1'>
            <span className='font-[600]'>{dataSala1.credit}:</span>
            {" " + props.autor}
        </div>
    )
}

export default CardCredit