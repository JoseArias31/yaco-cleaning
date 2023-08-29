import React from "react";
import '../Styles/Services.css'
import Offices from '../Images/Offices.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgHover from "./CleaningImg";
import  { useState } from 'react';
function Services(){
  const [showList, setShowList] = useState(true);

  const toggleList = () => {
    setShowList(!showList);
  };
return (


  <div id="services" className="containerServices">


 <div className="row row2">
  <div className="col-sm-6 diagonal Colm1 listFS">
  <div className="WhatWeDoLeft col-md-6">
  <h1 className="TextFS">Flexible Services</h1>
<p id="CompanyDescription">
We are a professional cleaning company based in Toronto, providing top-notch cleaning services for residential homes, commercial offices and post-construction sites
</p>

<div className="WhatWeDoLeftbottom">
<ImgHover />

</div>
</div>

    
<div className="container">
      <div className="row">
        <div className="col-md-6">
          {showList ? (
            <ul className="text-lg text-md-35 FlexibleServicesList live">
              <li className="listFS circle-checkmark">Office Spaces</li>
              <li className="listFS circle-checkmark">Conference Room</li>
              <li className="listFS circle-checkmark">Workstations</li>
              <li className="listFS circle-checkmark">Copy/printing room</li>
              <li className="listFS circle-checkmark">Floors</li>
              <li className="listFS circle-checkmark">Restrooms</li>
            </ul>
          ) : (
            <button className="btn btn-primary" onClick={toggleList}>
              Show List
            </button>
          )}
        </div>
        <div className="col-md-6">
          {showList ? (
            <ul className="text-lg text-md-35 FlexibleServicesList live">
              <li className="listFS circle-checkmark">Kitchens</li>
              <li className="listFS circle-checkmark">Hallways</li>
              <li className="listFS circle-checkmark">Basements</li>
              <li className="listFS circle-checkmark">Glasses</li>
              <li className="listFS circle-checkmark">Walls</li>
              <li className="listFS circle-checkmark">Lobby</li>
            </ul>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
 

  

  </div>

  

  
  <div
    className="col-sm-6 diagonal Colm2 mi-componente"
    style={{
      backgroundImage: `url(${Offices})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
    
    }}
  >
   
  </div>





</div>

  <div className="body">
  <h1 className="TextJanitor">Value Services</h1>
<ol className="janitorBody">
  <li className="liJanitor" style={{ '--accent-color': '#0D6EFD' }}>
    <div className="icon"><i className="fa-brands fa-codepen"></i></div>
    <div className="title">Removing Rubbish</div>
    <div className="descr"><p>Removing and disposing of waste materials and garbage from designated areas.</p></div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#6710F5' }}>
    <div className="icon"><i className="fa-brands fa-html5"></i></div>
    <div className="title">Dusting</div>
    <div className="descr"><p>Cleaning surfaces and objects by removing dust using cloths or dusters.</p></div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#6F42C1' }}>
    <div className="icon"><i className="fa-brands fa-css3"></i></div>
    <div className="title">Vacuuming</div>
    <div className="descr"><p> Using a vacuum cleaner to remove dirt, dust, and debris from floors, carpets, and upholstery.</p></div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#D63384' }}>
    <div className="icon"><i className="fa-brands fa-js"></i></div>
    <div className="title">Ordering Supplies</div>
    <div className="descr"><p>Placing orders for necessary cleaning and maintenance supplies to ensure availability.</p></div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#DC3545' }}>
    <div className="icon"><i className="fa-brands fa-github"></i></div>
    <div className="title">Managing Staff</div>
    <div className="descr"><p>Coordinating cleaning staff, assigning tasks, and providing guidance and support.</p></div>
  </li>
</ol>
</div>

</div>

)


}

export default Services;