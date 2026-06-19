import React from 'react'

const App = () => {

  const user = {
    name:'Darshan',
    age:'19',
    city:'Kolhapur'
  }
  let user1 = localStorage.getItem('user1')
  console.log(JSON.parse(user1))
  return (
    <div>App</div>
  )
}

export default App