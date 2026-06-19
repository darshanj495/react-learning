import React from 'react'

const App = () => {
  
  
  return (
    <div>
      <input type='text' onChange={(elem)=>{
        console.log('user is typing');
        console.log(elem.target.value);
      }} placeholder='Enter Name' /> 
    </div>
  )
}

export default App
