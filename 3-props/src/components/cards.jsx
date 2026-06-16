import React from 'react'

const cards = (props) => {
  return (
    <div className="card">
        <img src='https://images.unsplash.com/photo-1768092754652-c89fc7f48474?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></img>
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
        <button>Hello</button>
      </div>
  )
}

export default cards
