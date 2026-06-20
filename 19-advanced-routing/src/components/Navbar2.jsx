import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className='bg-gray-800 text-white p-5'>
      <button onClick={()=>{
        navigate('/');
      }} className='bg-red-400 px-5 py-2 rounded cursor-pointer m-2 active:scale-95'>Return to Home</button>
      <button onClick={()=>{
        navigate(-1);
      }} className='bg-red-400 px-5 py-2 rounded cursor-pointer m-2 active:scale-95'>Back</button>
      <button onClick={()=>{
        navigate(+1);
      }} className='bg-red-400 px-5 py-2 rounded cursor-pointer m-2 active:scale-95'>Next</button>
    </div>
  )
}

export default Navbar2