import React from 'react'
import'./LatestCard.css';
import { MdOutlineNavigateNext } from 'react-icons/md'

function LatestCard({data}) {
  return (
    <div className='latestCard'>
      <img src={data.imagePost} className="imagePost"/>
      <div className='news'>
        <div className='rod'></div>
        <h5>{data.title}</h5>
        <div className='pContainer'>
        <p>{data.description}...</p>
        </div>
        <button className='newsBtn'>
           <span>read more </span> 
           <span><MdOutlineNavigateNext/></span>
        </button>
      </div>
    </div>
  )
}

export default LatestCard
