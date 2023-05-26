import React from 'react'
import './Testimonials.css'

function Testimonials() {

    const style = {
        "width": "10px",
        "height": "10px",
        "border-radius": "50%"
    }

  return (


<div id="carouselExampleIndicators" class="carousel slide testimonaialCarousel">
  <div class="carousel-indicators testimonyActive">
    <button className='navBtn' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" style={style} class="active"  aria-current="true" aria-label="Slide 1"></button>
    <button className='navBtn' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" style={style} aria-label="Slide 2"></button>
    <button className='navBtn' type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" style={style} aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className='testimonyContent'>
       <div className='profilePicPosition'><div class="topDecor"></div></div> 
       <p className='userTestimony'>What is the Science Space? The Science Space is a forum dedicated to sharing, exchanging, and exploring knowledge under the umbrella of science.</p>
       <div className='profilePicPosition'>
      <div className="testimonialImage" style={{backgroundImage: 'url("https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}></div>
      </div>
       <p className='userName'>fatma fizal</p>
       <p className='occupation'>UI/UX designer</p>
     </div>
    </div>
    <div class="carousel-item">
    <div className='testimonyContent'>
    <div className='profilePicPosition'><div class="topDecor"></div></div> 
       <p className='userTestimony'>What is the Science Space? The Science Space is a forum dedicated to sharing, exchanging, and exploring knowledge under the umbrella of science.</p>
       <div className='profilePicPosition'>
      <div className="testimonialImage" style={{backgroundImage: 'url("https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}></div>
      </div>
       <p className='userName'>fatma fizal</p>
       <p className='occupation'>UI/UX designer</p>
     </div>
    </div>
    <div class="carousel-item testimonyCarouselItem">
    <div className='testimonyContent'>
    <div className='profilePicPosition'><div class="topDecor"></div></div> 
       <p className='userTestimony'>What is the Science Space? The Science Space is a forum dedicated to sharing, exchanging, and exploring knowledge under the umbrella of science.</p>
      <div className='profilePicPosition'>
      <div className="testimonialImage" style={{backgroundImage: 'url("https://images.pexels.com/photos/6000065/pexels-photo-6000065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")'}}></div>
      </div>
       <p className='userName'>fatma fizal</p>
       <p className='occupation'>UI/UX designer</p>
     </div>
    </div>
  </div>
  <button class="carousel-control-prev btnDiasabled" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next btnDiasabled" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    
  )
}

export default Testimonials
