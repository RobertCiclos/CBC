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
        className='pySection'>
        <ModelOneImg {...dataSala2.section6} />
      </section>

      <section
        id='section7'
        className='pySection'>
        <ModelSlider {...dataSala2.section7} />
      </section>

      <section
        id='section8'>
        {/*type A*/}
      </section>

      <section
        id='section9'>
        {/*type A*/}
      </section>

      <section
        id='section10'>
        {/*type C*/}
      </section>

      <section
        id='section11'>
        {/*type B*/}
      </section>

      <section
        id='section12'>
      </section>

      <section
        id='section13'>
        {/*type B*/}
      </section>

      <section
        id='section14'>
        {/*type A*/}
      </section>

      <section
        id='section15'>
        {/*type C*/}
      </section>

      <section
        id='section16'>
        {/*type B*/}
      </section>

      <section
        id='section17'>
      </section>

      <section
        id='section18'>
      </section>

      <section
        id='section19'>
        {/*type B*/}
      </section>

      <section
        id='section20'>
        {/*type A*/}
      </section>

      <section
        id='section21'>
        {/*type A*/}
      </section>

      <section
        id='section22'>
        {/*type A*/}
      </section>

      <section
        id='section23'>
        {/*type C*/}
      </section>

      <section
        id='section24'>
        {/*type A*/}
      </section>

      <section
        id='section25'>
      </section>

      <section
        id='section26'>
        {/*type A*/}
      </section>

      <section
        id='section27'>
        {/*type A*/}
      </section>

      <section
        id='section28'>
        {/*type A*/}
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