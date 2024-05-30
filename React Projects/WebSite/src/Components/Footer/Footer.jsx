import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='bg-amber-400'>
    <div className='w-full h-40 bg-amber-400 flex items-center justify-around'>
        <div className='text-7xl'>
            LOGO
        </div>
        <div className='flex gap-20'>
                <ul>
                    <li><h3 className='font-bold'>RESOURCES:</h3></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                <ul>
                    <li><h3 className='font-bold'>FOLLOW US:</h3></li>
                    <li><Link to='www.github.com'>GitHub</Link></li>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/about'>About</Link></li>
                </ul>
                <ul>
                    <li><h3 className='font-bold'>LEGAL</h3></li>
                    <li><Link to='#'>Privacy Policy</Link></li>
                    <li><Link to='#'>Terms and Conditions</Link></li>
                </ul>
        </div>
    </div>
    <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-yellow-200' />
    <div className='flex justify-around'>
        <div className='m-7'>
            <h2> © 2023 Shivam Pandey: All Rights Reserved</h2>
        </div>
        <ul className='flex gap-5 items-center m-7'>
            <li>Github</li>
            <li>LinkedIN</li>
            <li>Discord</li>
            <li>Twitter</li>
        </ul>
    </div>
    </div>

  )
}

export default Footer