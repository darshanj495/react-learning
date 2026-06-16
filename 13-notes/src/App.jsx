import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <form className='flex justify-between gap-4 p-10 '>
        <div className='flex flex-col gap-4 w-1/2'>
            <input type='text' placeholder='Enter Notes Heading' 
          className='px-5 py2 border-2 rounded ' 
        />
          <input type='text'
          className=' px-5 py2 h-20 border-2 rounded'
          placeholder='Write Details'/>
          <button className='bg-white text-black px-5 py-2 rounded'>Add Notes</button>
        </div>
        <img src='https://static.vecteezy.com/system/resources/previews/009/665/468/non_2x/notes-illustration-3d-free-png.png'
        className='h-50'/>
      </form>
    </div>
  )
}

export default App