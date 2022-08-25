import React from 'react'

const ModelNavigation = () => {
  return (
    <div>
        <p
            className='contSalas'
            style={styleP}>
            En la siguiente sala encontrarás más información sobre algunas de las especies priorizadas para la conservación en el CBC.
        </p>
        <nav>
            <ul>
                
            </ul>
            <div
                className='grid grid-cols-2 w-full 
                  mx-auto gap-[8px] 
                  px-[8%] 
                  desktop:max-w-[1344px] desktop:px-0'>
                <div
                    style={styleNavRow}
                    className='justify-start w-[112px] sm:w-full'>
                    <img src="./svg/arrowLeft.svg" alt="Flecha Izquierda" className="" />
                    <span>Anterior Sala</span>
                </div>
                <div
                    style={styleNavRow}
                    className='justify-end w-[112px] sm:w-full '>
                    <span>
                        Siguiente sala
                    </span>
                    <img 
                        src="./svg/arrowRight.svg" 
                        alt="" 
                        className="" />
                </div>
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
