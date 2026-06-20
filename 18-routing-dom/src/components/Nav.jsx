import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='nav'>
      <h3>My App</h3>
      <div className='links'>
        <Link to='/'>Home</Link>
        <Link to='/product'>Product</Link>
        <Link to='/about'>About</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Nav