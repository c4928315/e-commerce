import React from 'react'
import './Special.css'
import { GiWoodenChair } from 'react-icons/gi'

import useFetch from '../Custom /Fetch/useFetch'
import Card from '../Product Card/Card'

function Special() {

    const { data, isLoading, error } = useFetch('https://intra-deco.onrender.com/Special_Products');
  
    if (isLoading) {
      return <div>Loading...</div>;
    }
    
    if (error) {
      return <div>Error: {error.message}</div>;
    }

  return (
    <div className='trending special'>
    <div className="trendingHeader">
       <div className='outerHeader'>
       <h1>special products</h1>
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
       data.map((item, i) => {
           return (
               <div className="card-product">
                   <Card
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

export default Special
