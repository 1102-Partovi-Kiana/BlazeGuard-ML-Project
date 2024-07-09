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
import Articles from './components/pages/Articles';
import Article1 from './components/pages/Article1';
import Article2 from './components/pages/Article2';
import Article3 from './components/pages/Article3';
import Article4 from './components/pages/Article4';
import Article5 from './components/pages/Article5';
import Article6 from './components/pages/Article6';
import Article7 from './components/pages/Article7';


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
            <Route exact path="/articles" element={<Articles />} />
            <Route exact path="/articles/article1" element={<Article1 />} />
            <Route exact path="/articles/article2" element={<Article2 />} />
            <Route exact path="/articles/article3" element={<Article3 />} />
            <Route exact path="/articles/article4" element={<Article4 />} />
            <Route exact path="/articles/article5" element={<Article5 />} />
            <Route exact path="/articles/article6" element={<Article6 />} />
            <Route exact path="/articles/article7" element={<Article7 />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
