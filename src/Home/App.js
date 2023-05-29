import 'bootstrap/dist/js/bootstrap.js';


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from '../Components/Nav/Bar';
import Landing from '../Pages/LandingPage/Landing';
import Footer from '../Components/Footer/Footer';
import { useState } from 'react';
import CartContextProvider from '../Components/Context/cartContect';
import Cart from '../Components/Cart/Cart';


function App() {


  return (
    <div className="App">
    <CartContextProvider>
      <Router>
        <Bar />
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/cart' element={<Cart/>}/>
        </Routes>
        <Footer/>
      </Router>
    </CartContextProvider>
    </div>
  );
}

export default App;
