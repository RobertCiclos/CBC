import React from 'react'
import { useSelector } from 'react-redux';
import { change } from '../../features/counter/idiomaSlice';

const DropNavRightBgWhite = (props) => {
    const dispatch = props.dispatch
    const idioma = useSelector(state => state.idioma.value)
    var idiomaBtn = <></>
    var general = ""
  
    switch (idioma) {
      case "ingles":
        general = require('../../bd/ingles/General.json')
        break;
      case "frances":
        general = require('../../bd/frances/General.json')
        break;
      case "creole":
        general = require('../../bd/creole/General.json')
        break;
      case "español":
        general = require('../../bd/spaniol/General.json')
        break;
      default:
        general = require('../../bd/spaniol/General.json')
        break;
    }

    switch (idioma) {
        case "ingles":
            idiomaBtn =
                <a
                    className="dropdown-item bg-none gap-[8px] text-black
                    flex  items-center text-[16px] font-[500]"
                    href="#">
                    <img src="/svg/ingles.svg" alt="" className="h-[15px]" />
                    <span className='border-b-[1.8px] pb-[1px] border-black '>{general.idioma[2]}</span>
                </a>

            break;
        case "frances":
            idiomaBtn =
                <a
                    className="dropdown-item bg-none gap-[8px] text-black
                    flex  items-center text-[16px] font-[500]"
                    href="#">
                    <img src="/svg/frances.svg" alt="" className="h-[15px]" />
                    <span className='border-b-[1.8px] pb-[1px] border-black'>{general.idioma[1]}</span>
                </a>
            break;
        case "creole":
            idiomaBtn =
                <a
                    className="dropdown-item bg-none gap-[8px] text-black
                    flex  items-center text-[16px] font-[500]"
                    href="#">
                    <img src="/svg/creole.svg" alt="" className="h-[15px]" />
                    <span className='border-b-[1.8px] pb-[1px] border-black'>{general.idioma[3]}</span>
                </a>
            break;
        case "espaniol":
            idiomaBtn =
                <a
                    className="dropdown-item bg-none gap-[8px]  text-black
                    flex items-center text-[18px] font-[500]"
                    href="#">
                    <img src="/svg/espaniol.svg" alt="" className="h-[15px]" />
                    <span className='border-b-[1.8px] pb-[1px] border-black'>{general.idioma[0]}</span>
                </a>
            break;
        default:
            idiomaBtn = <div>
                <a
                    className="dropdown-item bg-none gap-[8px] text-black
                    flex items-center text-[18px] font-[500]"
                    href="#">
                    <img src="/svg/espaniol.svg" alt="" className="h-[15px]" />
                    <span className='border-b-[1.8px] border-black'>{general.idioma[0]}</span>
                </a>
            </div>
            break;
    }
    return (
        <div className="">
            <div>
                <div className="dropdown relative">
                    <button
                        className=" dropdown-toggle px-4 py-2.5  bg-none  text-black 
                        font-medium  text-xs  leading-tight  rounded gap-2   
                        hover:bg-none hover:shadow-lg   
                        focus:outline-none focus:ring-0 
                         active:text-white transition 
                        duration-150  ease-in-out  flex  items-center  whitespace-nowrap"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false">
                        {idiomaBtn}
                    </button>
                    <ul
                        className=" dropdown-menu min-w-max absolute hidden  bg-white text-base 
                        z-50 float-right py-2 list-none text-left rounded-lg shadow-lg mt-1 ml-4
                        m-0 bg-clip-padding border-none translate-x-[15%]"
                        aria-labelledby="dropdownMenuButton1">
                        <li 
                            className='hover:bg-blue-200'
                            onClick={() => dispatch(change("espaniol"))}>
                            <a
                                className=" dropdown-item text-sm py-2 px-3 font-normal flex  
                                bg-none gap-[8px]  items-center 
                                w-full whitespace-nowrap bg-transparent  text-gray-700 "
                                href="#">
                                <img src="/svg/espaniol.svg" alt="" className="h-[15px]" />
                                {general.idioma[0]}
                            </a>
                        </li>
                        <li 
                            className='hover:bg-blue-200'
                            onClick={() => dispatch(change("frances"))}>
                            <a
                                className=" dropdown-item text-sm py-2 px-3 font-normal flex   
                                bg-none gap-[8px] items-center text-gray-700 
                                w-full whitespace-nowrap bg-transparent  
                                 hover:bg-gray-100 "
                                href="#">
                                <img src="/svg/frances.svg" alt="" className="h-[15px]" />
                                {general.idioma[1]}
                            </a>
                        </li>
                        <li 
                            className='hover:bg-blue-200'
                            onClick={() => dispatch(change("ingles"))}>
                            <a
                                className=" dropdown-item text-sm py-2 px-3 font-normal flex  
                              bg-none gap-[8px] items-center 
                                w-full whitespace-nowrap bg-transparent  text-gray-700 
                                 hover:bg-gray-100 "
                                href="#">
                                <img src="/svg/ingles.svg" alt="" className="h-[15px]" />
                                {general.idioma[2]}
                            </a>
                        </li>
                        <li 
                            className='hover:bg-blue-200'
                            onClick={() => dispatch(change("creole"))}>
                            <a
                                className=" dropdown-item text-sm py-2 px-3 font-normal  
                                w-full whitespace-nowrap bg-transparent  text-gray-700 
                                 hover:bg-gray-100 flex  items-center 
                                bg-none gap-[8px]"
                                href="#">
                                <img src="/svg/creole.svg" alt="" className="h-[15px]" />
                                {general.idioma[3]}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default DropNavRightBgWhite