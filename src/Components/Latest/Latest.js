import React from 'react'
import './Latest.css'
import LatestCard from '../LatestCard/LatestCard';
import { GiWoodenChair } from 'react-icons/gi'

import useFetch from '../Custom /Fetch/useFetch';

function Latest() {
    const { data, isLoading, error } = useFetch('https://intra-deco.onrender.com/latestNews');
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

  return (
    <div className='trending latestContainer'>
    <div className="trendingHeader">
       <div className='outerHeader'>
       <h1>latest news</h1>
       <div className='signature'>
           <div className='borders'>
              <div className="signatureBorders"></div>
              <div className="signatureBorders2"></div>
           </div>
           <GiWoodenChair size={35}/>
           <div className='borders'>
              <div className="signatureBorders"></div>
              <div className="signatureBorders3"></div>
           </div>
       </div> 
       </div>
    </div>

    <div className='displayProducts'>
     {
       data.slice(2, 5).map((item, i) => {
           return (
               <div className=" latestCard">
                   <LatestCard
                   key={i}
                   data={item}
                   />
               </div>
           )
       })
     }
    </div>

   
   </div>
  )
}

export default Latest
