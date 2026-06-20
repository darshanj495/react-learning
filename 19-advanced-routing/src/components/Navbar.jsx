import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='py-4 px-8 bg-cyan-700 flex items-center justify-between p-4'>
      <h2 className='text-xl font-bold'>DonDj</h2>
      <div className='flex gap-10'>
        <Link className='text-lg font-medium' to='/'>Home</Link>
        <Link className='text-lg font-medium' to='/about'>About</Link>
        <Link className='text-lg font-medium' to='/product'>Product</Link>
        <Link className='text-lg font-medium' to='/courses'>Courses</Link>
      </div>
    </div>
  )
}

export default Navbar