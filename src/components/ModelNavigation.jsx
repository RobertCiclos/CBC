import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ModelNavigation = (props) => {
    const location = useLocation().pathname

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
        <div>
            <p
                className='contSalas'
                style={styleP}>
                {props.contenido}
            </p>
            <nav className='py-[32px] md:py-[40px]'>
                
                <div
                    className='grid grid-cols-2 w-full  py-[24px]
                  mx-auto gap-[8px] textSpam sm:py-[32px]
                  px-[8%] lg:py-[40px]
                  desktop:max-w-[1344px] desktop:px-0'>
                    <Link to={props.backLink}
                        style={styleNavRow}
                        className='justify-self-start w-[150px] sm:w-[250px] lg:w-[333px]'>
                        <img
                            src="./svg/arrowLeft.svg"
                            alt="Flecha Izquierda"
                            className="" />
                        <span className='text-left' >{general.return}</span>
                    </Link>
                    <Link to={props.nextLink}
                        style={styleNavRow}
                        className='justify-self-end w-[150px]
                    sm:flex sm:justify-end 
                    sm:w-[250px] lg:w-[350px]'>
                        <span className='text-right' >{general.next}</span>
                        <img
                            src="./svg/arrowRight.svg"
                            alt=""
                            className="" />
                    </Link>
                </div>
                <div className='mt-[36px] md:mt-[72px9♥'>
                    <ul
                        className='grid grid-cols-5 w-[180px]  mx-auto justify-items-center
                    md:grid-cols-5 md:w-[275px]'>
                        <li className={location !== '/Sala1' ? "liNumNavDisabled" : "liNumNavActive"}>
                            <Link to='/Sala1'>
                                <span className='flex justify-center'>1</span>
                                <span className={location !== '/Sala1' ? "spamNumNavDisabled" : "spamNumNavActive"} />
                            </Link>
                        </li>
                        <li className={location !== '/Sala2' ? "liNumNavDisabled" : "liNumNavActive"}>
                            <Link to='/Sala2'>
                                <span className='flex justify-center'>2</span>
                                <span className={location !== '/Sala2' ? "spamNumNavDisabled" : "spamNumNavActive"} />
                            </Link>
                        </li>
                        <li className={location !== '/Sala3' ? "liNumNavDisabled" : "liNumNavActive"}>
                            <Link to='/Sala3'>
                                <span className='flex justify-center'>3</span>
                                <span className={location !== '/Sala3' ? "spamNumNavDisabled" : "spamNumNavActive"} />
                            </Link>
                        </li>
                        <li className={location !== '/Sala4' ? "liNumNavDisabled" : "liNumNavActive"}>
                            <Link to='/Sala4'>
                                <span className='flex justify-center'>4</span>
                                <span className={location !== '/Sala4' ? "spamNumNavDisabled" : "spamNumNavActive"} />
                            </Link>
                        </li>
                        <li className={location !== '/Sala5' ? "liNumNavDisabled" : "liNumNavActive"}>
                            <Link to='/Sala5'>
                                <span className='flex justify-center'>5</span>
                                <span className={location !== '/Sala5' ? "spamNumNavDisabled" : "spamNumNavActive"} />
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

const styleP = {
    fontStyle: "normal",
    fontWeight: 500
}

const styleNavRow = {
    display: "flex",
    alignItems: "center",
    gap: 8
}

export default ModelNavigation
