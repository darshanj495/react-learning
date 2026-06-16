import React from 'react'
import Section1 from './components/section1/section1'

const App = () => {


  const users=[
    {
      img:'https://plus.unsplash.com/premium_photo-1664299097964-35cfe9448911?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:'',
      tag:'Satisfied'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29ya2luZyUyMHByb2ZmZXNzaW9uYWx8ZW58MHwxfDB8fHww',
      text:'',
      tag:'Underserved'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661589915345-51d6f69f4b1c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2ZmZXNzaW9uYWx8ZW58MHwxfDB8fHww',
      text:'',
      tag:'Underbanked'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661591104970-b66c56160275?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:'',
      tag:'Undertaker'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1661764601699-10c47be708aa?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:'',
      tag:'Underdog'
    },
    {
      img:'https://plus.unsplash.com/premium_photo-1663040518652-9bc24a06df88?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      text:'',
      tag:'Undertable'
    }
    
  ]
  return (
    <div>
      <Section1 users={users}/>
    </div>
  )
}

export default App