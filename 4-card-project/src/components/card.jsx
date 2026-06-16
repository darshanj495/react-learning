import React from 'react'
import {Bookmark} from 'lucide-react'


const Card = (props) => {
  return (
     <div className="card">
        <div className="top">
          <img src={props.brandLogo} alt=''/>
          <button>Save <Bookmark size={15}/></button>
        </div>
        <div className="center">
          <h3 className='subtitle'>{props.companyName}</h3>
          <span>{props.datePosted}</span>
          <h2 className='subtitle-1'>{props.post}</h2>
          <div className='type'>
            <h2>{props.tag1}</h2>
            <h2>{props.tag2}</h2>
          </div>
        </div>
        <hr className="divider" />
        <div className="bottom">
          <div>
            <h2>${props.pay}/hr</h2>
            <p>{props.location}</p>
          </div>
          <button>Apply Now</button>
        </div>
      </div>
  )
}

export default Card
