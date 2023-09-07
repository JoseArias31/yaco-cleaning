import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Nav.css';

function NavBar() {
  return (
    
    <nav id="NavBar" class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#projects">What We Do</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#gallery">Gallery</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contactUs">Contact Us</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
 
  );
}

export default NavBar;