import React from 'react'
import Hero from '../../Components/Hero/Hero'
import './Landing.css'
import Trending from '../../Components/Trending/Trending'
import Modern from '../../Components/Modern/Modern'
import Crafts from '../../Components/Crafts/Crafts'
import Testimonials from '../../Components/Testimonials/Testimonials'
import Special from '../../Components/Special/Special'
import Indoor from '../../Components/Indoor/Indoor'
import Latest from '../../Components/Latest/Latest'
import Sponsors from '../../Components/Sponsors/Sponsors'
import Footer from '../../Components/Footer/Footer'

function Landing() {
  return (
    <div className='landingPage'>
      <Hero/>
      <Trending/>
      <Modern/>
      <Crafts/>
      <Testimonials/>
      <Special/>
      <Indoor/>
      <Latest/>
      <Sponsors/>
    </div>
  )
}

export default Landing
