import React from 'react'
import MeCards from './ui/MeCards'
import MeCards2 from './ui/MeCards2'
import MeCards3 from './ui/MeCards3'


function Cards() {
  return (
    <div className='space-y-24'>
        <section>
            <h3 className='text-white/50 text-sm uppercase font-bold'>Me</h3>
            <MeCards/>
        </section>
        <section>
            <MeCards2/>
        </section>
        <section>
            <MeCards3/>
        </section>
    </div>
  )
}

export default Cards