import React from 'react'
import ModelOneImg from '../components/ModelOneImg'
import ModelSlider from '../components/ModelSlider'

const Sala2 = () => {
  const dataSala2 = require('../bd/Sala2.json')

  return (
    <div className='pt-[85px] overflow-x-hidden'>
      <section
        id='section1'
        className='pySection'>
        
      </section>

      <section
        id='section2'>
      </section>

      <section
        id='section3'>
      </section>

      <section
        id='section4'>
      </section>

      <section
        id='section5'>
        {/*type C*/}
      </section>

      <section
        id='section6'
        style={{background: dataSala2.section6.background, color: dataSala2.section6.colorText}} 
        className='pySection'>
        <ModelOneImg {...dataSala2.section6} />
      </section>

      <section
        id='section7'
        style={{background: dataSala2.section7.background, color: dataSala2.section7.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section7} />
      </section>

      <section
        id='section8'
        style={{background: dataSala2.section8.background, color: dataSala2.section8.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section8} />
      </section>

      <section
        id='section9'
        style={{background: dataSala2.section9.background, color: dataSala2.section9.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section9} />
      </section>

      <section
        id='section10'
        className='pySection'>
      </section>

      <section
        id='section11'
        style={{background: dataSala2.section11.background, color: dataSala2.section11.colorText}} 
        className='pySection'>
        <ModelOneImg {...dataSala2.section11} />
      </section>

      <section
        id='section12'>
      </section>

      <section
        id='section13'
        style={{background: dataSala2.section13.background, color: dataSala2.section13.colorText}} 
         className='pySection'>
        <ModelOneImg {...dataSala2.section13} />
      </section>

      <section
        id='section14'
        style={{background: dataSala2.section14.background, color: dataSala2.section14.colorText}} 
         className='pySection'>
        <ModelSlider {...dataSala2.section14} />
      </section>

      <section
        id='section15'
        className='pySection'>
      </section>

      <section
        id='section16'
        style={{background: dataSala2.section16.background, color: dataSala2.section16.colorText}} 
         className='pySection'>
        <ModelOneImg {...dataSala2.section16} />
      </section>

      <section
        id='section17'
        style={{background: dataSala2.section17.background, color: dataSala2.section17.colorText}} 
         className='pySection'>
        <ModelSlider {...dataSala2.section17} />
      </section>

      <section
        id='section18'>
      </section>

      <section
        id='section19'
        style={{background: dataSala2.section19.background, color: dataSala2.section19.colorText}} 
        className='pySection'>
        <ModelOneImg {...dataSala2.section19} />
      </section>

      <section
        id='section20'
        style={{background: dataSala2.section20.background, color: dataSala2.section20.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section20} />
      </section>

      <section
        id='section21'
        style={{background: dataSala2.section21.background, color: dataSala2.section21.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section21} />
      </section>

      <section
        id='section22'
        className='pySection'>

      </section>

      <section
        id='section23'>
        {/*type C*/}
      </section>

      <section
        id='section24'
        style={{background: dataSala2.section24.background, color: dataSala2.section24.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section24} />
      </section>

      <section
        id='section25'>
      </section>

      <section
        id='section26'
        style={{background: dataSala2.section26.background, color: dataSala2.section26.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section26} />
      </section>

      <section
        id='section27' 
        style={{background: dataSala2.section27.background, color: dataSala2.section27.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section27} />
      </section>

      <section
        id='section28'
        style={{background: dataSala2.section28.background, color: dataSala2.section28.colorText}} 
        className='pySection'>
        <ModelSlider {...dataSala2.section28}/>
      </section>

      <section
        id='section29'>
      </section>

      <section
        id='section30'>
      </section>
    </div>

  )
}

export default Sala2