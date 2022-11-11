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
      console.log("/")
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
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala1.json')
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala1.json')
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala1.json')
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala1.json')
          break;
      }
      break
    case '/Sala2':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala2.json')
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala2.json')
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala2.json')
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala2.json')
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala2.json')
          break;
      }
      break
    case '/Sala3':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala3.json')
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala3.json')
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala3.json')
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala3.json')
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala3.json')
          break;
      }
      break
    case '/Sala4':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala4.json')
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala4.json')
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala4.json')
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala4.json')
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala4.json')
          break;
      }
      break
    case '/Sala5':
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Sala5.json')
          break;
        case "frances":
          dataFooter = require('../bd/frances/Sala5.json')
          break;
        case "creole":
          dataFooter = require('../bd/creole/Sala5.json')
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Sala5.json')
          break;
        default:
          dataFooter = require('../bd/spaniol/Sala5.json')
          break;
      }
      break
    default:
      switch (idioma) {
        case "ingles":
          dataFooter = require('../bd/ingles/Home.json')
          break;
        case "frances":
          dataFooter = require('../bd/frances/Home.json')
          break;
        case "creole":
          dataFooter = require('../bd/creole/Home.json')
          break;
        case "español":
          dataFooter = require('../bd/spaniol/Home.json')
          break;
        default:
          dataFooter = require('../bd/spaniol/Home.json')
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
        lg:w-[1040px] lg:px-0'>
        <h4 className='text-center'>
          {dataFooter.footer.title}
        </h4>

        {
          text &&
          <p className=''>
            {dataFooter.footer.text[0]}
            <br/>
            {dataFooter.footer.text[1]}
            <br/>
            {dataFooter.footer.text[2]}
          </p>
        }

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
              <li className='w-full 
              md:translate-x-[-18px] 
              lg:translate-x-[-24px]'>{item}</li>
            ))
          }
        </ul>
        <div className='bg-white h-[2px] w-full mt-[24px]' />
        <div
          className='grid w-full mt-[8px] md:mt-[16px]
          font-[300] text-[14px] font-Public 
          md:grid-cols-2 '>
          <i className='md:justify-self-start my-[8px] md:my-0'>{dataFooter.footer.descript}</i>
          <i className='md:justify-self-end'></i>
        </div>
      </div>
    </footer>
  )
}

export default Footer