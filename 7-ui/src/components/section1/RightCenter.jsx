import React from 'react'
import Rightcard from './Rightcard'

const RightCenter = (props) => {
  return (
    <div id="right" className='h-full w-2/3 p-5  rounded-4xl flex flex-nowrap overflow-x-auto gap-10'>
      {props.users.map(function(users, index){
        return <Rightcard key={index} users={users} index={index} />
      })}
    </div>
  )
}

export default RightCenter