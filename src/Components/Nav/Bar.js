import React, { useContext } from 'react'
import './Nav.css'
import Search from '../Search/Search'
import Profile from '../Profile/Profile'
import { GiWoodenChair } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function Bar() {

  

  const style = {
    color: "white",
    fontSize: "62px",
    marginTop: "4px",
    marginRight: "4px",
  }
  return (
  <div className="navigation">
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
         <div class="container-fluid">
            <a class="navbar-brand" href="#">
              <span><GiWoodenChair style={style}/></span>
              <span><h1>Intra. <br/> <span className='logoSmall'>deco</span></h1></span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavDropdown">
              <ul class="navbar-nav">
                 <li class="nav-item">
                   <Link to='/'><a class="nav-link active" aria-current="page" href="#">Home</a></Link>
                 </li>
                 <li class="nav-item">
                 <Link to='/cart'><a class="nav-link active" aria-current="page" href="#">cart</a></Link>
                 </li>
                 <li class="nav-item">
                   <a class="nav-link" href="#">Pricing</a>
                 </li>
                 <li class="nav-item dropdown">
                   <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                     category
                   </a>
                     <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">
                          Something else here
                        </a></li>
                     </ul>
                 </li>
              </ul>
            </div>       
         </div>
         
         <div class="mostRight">
       <Profile/>
         </div>
       </nav>
  </div>
  )
}

export default Bar
