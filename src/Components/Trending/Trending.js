import React, { useState } from 'react'
import './Trending.css'
import { GiWoodenChair } from 'react-icons/gi'


import Card from '../Product Card/Card';
import { PRODUCTS } from '../Data';


function Trending() {

  return (
    <div className='trending'>
     <div className="trendingHeader">
        <div className='outerHeader'>
        <h1>trending products</h1>
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
        PRODUCTS.map((item, i) => {
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

export default Trending
