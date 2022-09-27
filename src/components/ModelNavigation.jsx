import { filterProps } from 'framer-motion'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'

const ModelNavigation = (props) => {
    const location = useLocation().pathname
    return (
        <div>
            <p
                className='contSalas'
                style={styleP}>
                {(() => {
                    switch (location) {
                        case '/Sala1':
                            return 'En la siguiente sala encontrarás más información sobre algunas de las especies priorizadas para la conservación en el CBC.';
                        case '/Sala2':
                            return 'En la siguiente sala encontrarás más información sobre algunas de las especies priorizadas para la conservación en el CBC.'
                        case '/Sala3':
                            return 'En la siguiente sala encontrarás más información sobre algunas de las especies priorizadas para la conservación en el CBC.'
                        case '/Sala4':
                            return 'En la siguiente sala encontrarás más información sobre algunas de las especies priorizadas para la conservación en el CBC.';
                        case '/Sala5':
                            return ''
                        case 'error':
                            return ''
                        default:
                            return null;
                    }
                })()}
            </p>
            <nav className='py-[32px] md:py-[40px]'>
                <ul
                    className='flex w-auto overflow-x-auto overflow-y-hidden  gap-[31px] 
                items-center mb-[56px] mt-[24px] mx-[5%] h-[55px] py-[5px]
                md:gap-[88px] md:h-[88px] hidden  md:mb-[88px] md:mt-[56px] md:mx-0 '>
                    <li className="liNav">
                        Sala 1
                        <img
                            src="./svg/arrow-right-45-Black.svg"
                            alt=""
                            className="w-[25px] sm:w-[55px]" />
                    </li>
                    <li className="liNav">
                        Sala 2
                        <img
                            src="./svg/arrow-right-45-Black.svg"
                            alt=""
                            className="w-[25px] sm:w-[55px]" />
                    </li>
                    <li className="liNav">
                        Sala 3
                        <img
                            src="./svg/arrow-right-45-Black.svg"
                            alt=""
                            className="w-[25px] sm:w-[55px]" />
                    </li>
                    <li className="liNav">
                        Sala 4
                        <img
                            src="./svg/arrow-right-45-Black.svg"
                            alt=""
                            className="w-[25px] sm:w-[55px]" />
                    </li>
                    <li className="liNav">
                        Sala 5
                        <img
                            src="./svg/arrow-right-45-Black.svg"
                            alt=""
                            className="w-[25px] sm:w-[55px]" />
                    </li>
                </ul>
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
                        <span className='text-left' >Anterior Sala</span>
                    </Link>
                    <Link to={props.nextLink}
                        style={styleNavRow}
                        className='justify-self-end w-[150px]
                    sm:flex sm:justify-end 
                    sm:w-[250px] lg:w-[350px]'>
                        <span className='text-right' >Siguiente sala</span>
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
