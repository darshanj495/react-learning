import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='py-4 px-8 mt-10 gap-10 flex items-center justify-center p-4'>
        <Link className='text-xl font-semibold' to='/product/men'>Men</Link>
        <Link className='text-xl font-semibold' to='/product/women'>Women</Link>
      </div>
      <Outlet />
    </div>
    
  )
}

export default Product