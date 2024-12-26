import React from 'react'

function MeCards2() {
  return (
    <section className='grid gap-x-8 gap-y-24 md:grid-cols-2'>
        <div>
            <h3 className='text-white/50 text-sm uppercase font-bold'>Experience</h3>
            <ul className='mt-4 grid gap-2'>
                <li className='card-base p-4 rounded-lg cursor-pointer space-y-2'>
                    <h3 className='font-bold truncate text-white'>Indepented Security Researcher</h3>
                    <p className='text-white/30 text-md line-clamp-2'>Acknowledged and paid by over 30 organizations in different industries including Sony, Spotify, Dice.fm, Hugging Face for reporting security vulnerabilities</p>
                </li>
            </ul>
        </div>
        <div>
          <h3 className='text-white/50 text-sm uppercase font-bold'>Education</h3>
          <ul className='mt-4 grid gap-2'>
            <li className='card-base p-4 rounded-lg cursor-pointer space-y-2'>
              <div className='flex space-x-2 items-center justify-between'>
                <h3 className='font-bold truncate text-white'>Algonquin College</h3>
                <p className='text-white/30 text-md line-clamp-2'>2027</p>
              </div>
              <p className='text-white/30 text-md line-clamp-2'>Computing Science</p>
            </li>
          </ul>
        </div>
    </section>
  )
}

export default MeCards2