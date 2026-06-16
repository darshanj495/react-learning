import React from 'react'
import Card from './components/cards.jsx'

const App = () => {
  return (
    <div className="parent">
      <Card user='Don' age={18}/>
      <Card user='Darshan Joshi' age={19}/>

    </div>
  )
}

export default App
