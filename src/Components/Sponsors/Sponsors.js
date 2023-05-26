import React from 'react'
import './Sponsors.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function Sponsors() {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

  return (
    <div >
      
      <Carousel responsive={responsive} className="sponsors">
         <div className='sponsorShoppeFabs'></div>
         <div className='sponsorSummerCamp'></div>
         <div className='sponsorMountain'></div>
         <div className='sponsorSpoon'></div>
         <div className='sponsorVintageSpoon'></div>
         <div className='sponsorWalkingDreams'></div>
         <div className='sponsorCoffee'></div>
         <div className='sponsorRoyalAnchor'></div>
      </Carousel>

    </div>
  )
}

export default Sponsors
