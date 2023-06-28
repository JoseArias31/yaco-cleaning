//import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import NavBar from './Components/Nav';
import CompanyName from './Components/CompanyName';
import Projects from './Components/Projects'

function App() {
  return (
    <div>
  <NavBar />
  <CompanyName />
  <Projects />
  </div>
  );
}

export default App;
