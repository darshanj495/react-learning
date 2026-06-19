import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [num, setnum] = useState(0)
  const [num1, setnum1] = useState(10)
  useEffect(function(){
    console.log('use effect is running')
  },[num])
  
  return (
    <div>
      <h1>num1 is: {num}</h1>
      <h1>num2 is: {num1}</h1>
      <button 
      style={{ padding: "20px", border: "1px solid black" }}
      onMouseEnter={()=>{
        console.log("entered");
        setnum(prev => prev + 1);
      }}
      onMouseLeave={()=>{
        setnum1(prev => prev+1);
      }}>
        Hover Me
      </button>
    </div>
  )
}

export default App