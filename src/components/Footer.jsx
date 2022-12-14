import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

const Footer = () => {

  var dataFooter = ""
  const idioma = useSelector(state => state.idioma.value)
  const location = useLocation().pathname
  var text = null
  switch (location) {
    case '/':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Home.json')
          text = dataFooter.footer.text
          break;
        case "frances":
          dataFooter = require('../bd/frances/Home.json')
          text = dataFooter.footer.text
          break;
        case "creole":
          dataFooter = require('../bd/creole/Home.json')
          text = dataFooter.footer.text
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Home.json')
          text = dataFooter.footer.text
          break;
        default:
          dataFooter = require('../bd/spaniol/Home.json')
          text = dataFooter.footer.text
          break;
      }
      break
    case '/Sala1':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala1.json')
          text = dataFooter.footer.text
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala1.json')
          text = dataFooter.footer.text
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala1.json')
          text = dataFooter.footer.text
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala1.json')
          text = dataFooter.footer.text
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala1.json')
          text = dataFooter.footer.text
          break;
      }
      break
    case '/Sala2':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala2.json')
          text = dataFooter.footer.text
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala2.json')
          text = dataFooter.footer.text
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala2.json')
          text = dataFooter.footer.text
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala2.json')
          text = dataFooter.footer.text
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala2.json')
          text = dataFooter.footer.text
          break;
      }
      break
    case '/Sala3':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala3.json')
          text = dataFooter.footer.text
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala3.json')
          text = dataFooter.footer.text
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala3.json')
          text = dataFooter.footer.text
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala3.json')
          text = dataFooter.footer.text
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala3.json')
          text = dataFooter.footer.text
          break;
      }
      break
    case '/Sala4':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala4.json')
          text = dataFooter.footer.text
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala4.json')
          text = dataFooter.footer.text
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala4.json')
          text = dataFooter.footer.text
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala4.json')
          text = dataFooter.footer.text
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala4.json')
          text = dataFooter.footer.text
          break;
      }
      break
    case '/Sala5':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala5.json')
          text = dataFooter.footer.text
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala5.json')
          text = dataFooter.footer.text
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala5.json')
          text = dataFooter.footer.text
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala5.json')
          text = dataFooter.footer.text
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala5.json')
          text = dataFooter.footer.text
          break;
      }
      break
    default:
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Home.json')
          text = dataFooter.footer.text
          break;
        case "frances":
          dataFooter = require('../bd/frances/Home.json')
          text = dataFooter.footer.text
          break;
        case "creole":
          dataFooter = require('../bd/creole/Home.json')
          text = dataFooter.footer.text
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Home.json')
          text = dataFooter.footer.text
          break;
        default:
          dataFooter = require('../bd/spaniol/Home.json')
          text = dataFooter.footer.text
          break;
      }
      break
  }

  const background = option(location)

  function option(param) {
    switch (param) {
      case '/':
        return "#103A62";
      case '/Sala1':
        return "#528641";
      case '/Sala2':
        return "#103A62";
      case '/Sala3':
        return "#528641";
      case '/Sala4':
        return "#103A62";
      case '/Sala5':
        return "#528641";
      default:
        return '#103A62';
    }
  }


  const stylesFooter = {
    background: background
  }

  return (
    <footer
      style={stylesFooter}
      className='bg-blueCBC text-white font-Public py-[48px]'>
      <div
        className='w-[311px] mx-auto
        sm:w-auto sm:px-[9%] text-center
        grid-cols-[1fr_0.5fr]
        lg:w-[1040px] lg:px-0'>
        <h4 className='text-center'>
          {dataFooter.footer.title}
        </h4>
        <div>
          {
            text ?
              <div
                className='grid lg:grid-cols-[1fr_0.8fr]  
                xl:grid-cols-[1fr_0.6fr]  mt-[16px]'>
                <div className='lg:text-left font-[400] text-[16px] leading-[28px] sm:mt-[32px] 
                lg:w-[550px]  '>
                  {dataFooter.footer.text[0]}
                </div>
                <div className=''>
                  <p
                    className='font-[500] text-[20px] mt-[16px] mb-[16px]
                    sm:text-[22px] sm:font-[700] pl-2 
                    md:text-[24px] md:mt-[24px] lg:text-left  '>
                    {dataFooter.footer.subtitle}
                  </p>
                  <ul
                    className="grid font-[400] text-[16px] leading-[24px] gap-[16px]
                    md:grid-cols-2 w-full 
                    lg:grid-cols-1 lg:text-left">
                    {
                      dataFooter.footer.instituciones.map((item) => (
                        <li key={item} className='w-full '>{item}</li>
                      ))
                    }
                  </ul>
                </div>

              </div>
              :
              <>
                <p
                  className='font-[500] text-[20px] mt-[16px] mb-[16px]
                  sm:text-[22px] sm:font-[700] 
                  md:text-[24px] md:mt-[24px] '>
                  {dataFooter.footer.subtitle}
                </p>
                <ul
                  className="grid font-[400] text-[16px] leading-[24px] gap-[16px]
                  md:grid-cols-2 w-full 
                  lg:grid-cols-3">
                  {
                    dataFooter.footer.instituciones.map((item) => (
                      <li key={item} className='w-full 
                      md:translate-x-[-18px] 
                      lg:translate-x-[-24px]'>{item}
                      </li>
                    ))
                  }
                </ul>
              </>
          }



        </div>
        <div className='bg-white h-[2px] w-full mt-[24px]' />
        <div
          className='grid w-full mt-[8px] md:mt-[16px]
          font-[300] text-[14px] font-Public gap-[8px]
          md:grid-cols-2 '>
          <i className='md:justify-self-start my-[8px] md:my-0'>{dataFooter.footer.descript}</i>
          <i className='flex items-center gap-[24px] justify-center md:justify-self-end'>
            <a
              className='cursor-pointer'
              href='https://cbcbio.org'
              target="_blank" >
              <img src='/svg/cbc.svg' alt='CBC' />
            </a>
            <a
              className='cursor-pointer'
              href='https://www.youtube.com/channel/UCVJpq9oOUMPzSOUVmtlrXaQ'
              target="_blank" >
              <img src='/svg/youtube.svg' alt='Youtube' />
            </a>
            <a
              className='cursor-pointer'
              href='https://twitter.com/cbcbiodiverso?lang=es'
              target="_blank" >
              <img src='/svg/twitter.svg' alt='Twitter' />
            </a>
            <a
              className='cursor-pointer'
              href='https://www.facebook.com/cbcbiodiversidad/'
              target="_blank" >
              <img src='/svg/facebook.svg' alt='Facebook' />
            </a>
            <a
              className='cursor-pointer'
              href='https://www.instagram.com/cbcbiodiversidad/?hl=es-la'
              target="_blank" >
              <img src='/svg/instagram.svg' alt='Instagram' />
            </a>
          </i>
        </div>
      </div>
    </footer>
  )
}

export default Footer