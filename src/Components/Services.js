import React from "react";
import '../Styles/Services.css'
import Offices from '../Images/Offices.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){

return (


  <div className="containerServices">
  <div className="row">
    <div className="col-sm-6 diagonal Colm1 listFS">
      <h1 className="TextFS">Flexible Services</h1>
      <ul className="text-lg text-md-35 FlexibleServicesList">
        <li className="listFS">Office Spaces</li>
        <li className="listFS">Conference Room</li>
        <li className="listFS">Workstations</li>
        <li className="listFS">Copy/printing room</li>
        <li className="listFS">Floors</li>
        <li className="listFS">Restrooms</li>
        <li className="listFS">Kitchens</li>
        <li className="listFS">Hallways</li>
        <li className="listFS">Basements</li>
        <li className="listFS">Glasses</li>
        <li className="listFS">Walls</li>
        <li className="listFS">Lobby</li>
      </ul>
    </div>
    <div className="col-sm-6 diagonal Colm2 mi-componente"
      style={{
        backgroundImage: `url(${Offices})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    ></div>
  </div>
  <div className="body">
  <h1 className="TextJanitor">OL standing cards</h1>
<ol className="janitorBody">
  <li className="liJanitor" style={{ '--accent-color': '#0D6EFD' }}>
    <div className="icon"><i className="fa-brands fa-codepen"></i></div>
    <div className="title">Codepen</div>
    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, impedit?</div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#6710F5' }}>
    <div className="icon"><i className="fa-brands fa-html5"></i></div>
    <div className="title">HTML 5</div>
    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#6F42C1' }}>
    <div className="icon"><i className="fa-brands fa-css3"></i></div>
    <div className="title">CSS 3</div>
    <div className="descr">Lorem ipsum dolor sit.</div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#D63384' }}>
    <div className="icon"><i className="fa-brands fa-js"></i></div>
    <div className="title">Javascript</div>
    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor laboriosam odio alias.</div>
  </li>
  <li className="liJanitor" style={{ '--accent-color': '#DC3545' }}>
    <div className="icon"><i className="fa-brands fa-github"></i></div>
    <div className="title">Github</div>
    <div className="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
  </li>
</ol>
</div>









</div>

)


}

export default Services;