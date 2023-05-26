import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='hero'>
      <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
         <div class="carousel-inner">
            <div class="carousel-item active">
              <div className='heroAdverts hero1'>
                <h3>Get 20%-30% Off On All Interior Sets</h3>
                <p>interior design</p>
                <button type="button" class="btn btn-warning">shop now</button>
              </div>
              <img src="https://images.pexels.com/photos/6707628/pexels-photo-6707628.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" class="d-block w-100" alt="...1"/>
            </div>
            <div class="carousel-item">
              <div className='heroAdverts hero2'>
                <h3>Descover Best Of Styling Cataloug, 2023</h3>
                <p>Save 35% off</p>
                <button type="button" class="btn btn-warning">shop now</button>
              </div>
              <img src="https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" class="d-block w-100" alt="...2"/>
            </div>
         </div>
         <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <div className='prevNext'>
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            </div>
              <span class="visually-hidden">Previous</span>
         </button>
         <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <div className='prevNext'>
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
            </div>
              <span class="visually-hidden">Next</span>
         </button>
    </div>

    <div className='heroBottom'>
        <div className="heroBottomContent hBC1">
        <div className='heroAdverts advertHBC1'>
                <h3>Saving Big Offer</h3>
                <p>Save 35% off</p>
                <button type="button" class="btn btn-warning">shop now</button>
              </div>
        </div>
        <div className="heroBottomContent hBC2">
        <div className='heroAdverts advertHBC2'>
                <h3>Get Upto 40% Off</h3>
                <p>Save 35% off</p>
                <button type="button" class="btn btn-warning">shop now</button>
              </div>
        </div>
    </div>
  </div>
  )
}

export default Hero
