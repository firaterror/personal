import React from 'react'
import Link from 'next/link'


function MeCards() {
  return (
    <div>
      <ul className='grid gap-4 md:grid-cols-2 mt-4'>
        <li className='card-base p-4 rounded-lg cursor-pointer space-y-2'>
          <Link href="https://github.com/firaterror" className='space-y-2'>
            <h2 className='font-bold truncate text-white'>My GitHub</h2>
            <p className='text-white/30 text-md line-clamp-2'>You can visit my github profile to see my projects.</p>
          </Link>
        </li>
        <li className='card-base p-4 rounded-lg cursor-pointer space-y-2'>
          <Link href="https://hackerone.com/error?type=user" className='space-y-2'>
            <h2 className='font-bold truncate text-white'>HackerOne Profile</h2>
            <p className='text-white/30 text-md line-clamp-2'>See my HackerOne profile.</p>
          </Link>
        </li>
        <li className='card-base p-4 rounded-lg cursor-pointer'>
          <Link href="/resume.pdf" className='space-y-2'>
            <h2 className='font-bold truncate text-white'>Resume</h2>
            <p className='text-white/30 text-md line-clamp-2'>You can click here to see my resume.</p>
          </Link>
        </li>
        <li className='card-base p-4 rounded-lg cursor-pointer '>
          <Link href="/contact" className='space-y-2'>
            <h2 className='font-bold truncate text-white'>Contact</h2>
            <p className='text-white/30 text-md line-clamp-2'>Want to get in touch? Send me a message.</p>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default MeCards