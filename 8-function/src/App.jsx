import React from 'react'

const App = () => {
  
  const x = "";
  return (
    <div>
      <input type='text' onChange={(elem)=>{
        console.log(elem)
        x+=str(elem)
        console.log(elem)
      }} placeholder='Enter Name' /> 
    </div>
  )
}

export default App
