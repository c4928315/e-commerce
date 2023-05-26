import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import './Search.css'

function Search() {
  return (
    <div className='searchArea'>    
        <div className='searchButtonArea'>
        <button className='searchButton'  data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
          <AiOutlineSearch/>
        </button>
        </div>
        <div className="collapse collapse-horizontal" id="collapseWidthExample">
           <input type="text" className="search-input" placeholder="search..."/>
           <div className="search">
           <AiOutlineSearch/>
           </div>
        </div>        
    </div>
  )
}

export default Search

