import React from 'react'

const Rightcard = (props) => {
  return (
    <div className='h-full w-1/3 overflow-hidden relative bg-red-500 rounded-4xl shrink-0'>
      <img src={props.users.img} alt='' className='h-full object-cover'/>
      <div className='absolute top-0 left-0 h-full w-full  p-7 flex flex-col justify-between '>
        <h2 className='bg-white text-xl font-semibold rounded-full h-11 w-11 text-center flex justify-center items-center'>{props.index+1}</h2>
        <div>
          <p className='text-lg leading-thight text-white mb-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse aut eaque totam aliquam cum necessitatibus?</p>
          <div className='flex justify-between'>
            <button className='bg-blue-600 text-white font-medium px-7 py-2 rounded-full'>{props.users.tag}</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><i class="ri-arrow-right-line"></i></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rightcard
