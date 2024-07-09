import React from 'react';
import '../../App.css'; // css file coming from home page/ also app page
import HomeDetails from '../HomeDetails';
import Footer from '../Footer';
import Cards from '../Cards';
import Chatbox from '../Chatbox';

function Home() {
  return (
    <>
      <HomeDetails />
      <Cards/>
      <Chatbox />
      <Footer />
    </>
  )
}

export default Home
