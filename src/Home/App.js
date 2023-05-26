import 'bootstrap/dist/js/bootstrap.js';


import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Bar from '../Components/Nav/Bar';
import Landing from '../Pages/LandingPage/Landing';


function App() {
  return (
    <div className="App">
      <Router>
        <Bar />
        <Routes>
          <Route path='/' element={<Landing/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
