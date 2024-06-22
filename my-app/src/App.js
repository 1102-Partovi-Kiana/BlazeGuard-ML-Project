import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import MeetTheCreators from './components/MeetTheCreators';
import ThankYou from './components/pages/ThankYou';
import Trailer from './components/pages/Trailer';
import Map from './components/pages/Map';
import FireInfo from './components/pages/FireInfo';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
            <Route exact path='/' element= {<Home/>} />
            <Route exact path='/services' element= {<Services/>} />
            <Route exact path='/contact' element= {<Contact/>} />
            <Route exact path="/thank-you" element={<ThankYou/>} />
            <Route exact path="/meet-the-creators" element={<MeetTheCreators />} />
            <Route exact path="/trailer" element={<Trailer />} />
            <Route exact path="/map" element={<Map />} />
            <Route exact path="/fire-info" element={<FireInfo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
