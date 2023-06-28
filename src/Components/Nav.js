import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Styles/Nav.css';

function NavBar() {
  return (
    
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
    <div class="container">
      <a class="navbar-brand" href="#">
        <img src="https://placeholder.pics/svg/150x50/888888/EEE/Logo" alt="..." height="36" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">What We Do</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Services</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="">Contact Us</a>
          </li>
         
        </ul>
      </div>
    </div>
  </nav>
 
  );
}

export default NavBar;