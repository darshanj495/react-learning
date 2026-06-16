import React from 'react'
import LeftCenter from './LeftCenter'
import RightCenter from './RightCenter'

const Center = (props) => {
  return (
    <div className='py-10 flex items-center justify-between h-[90vh] gap-10 px-18 '>
      <LeftCenter />
      <RightCenter users={props.users}/>
    </div>
  )
}

export default Center
