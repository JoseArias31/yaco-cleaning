//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './Components/Nav';
import CompanyName from './Components/CompanyName';
import Projects from './Components/Projects'
import Toronto from './Components/TorontoBackgroundQuote';
import WhatWeDo from './Components/whatWeDo';

function App() {
  return (
    <div>
  <NavBar />
  <CompanyName />
  <Projects />
  <Toronto />
  <WhatWeDo />
  </div>
  );
}

export default App;
