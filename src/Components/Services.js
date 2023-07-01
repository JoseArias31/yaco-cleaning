import React from "react";
import '../Styles/Services.css'
import Offices from '../Images/Offices.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){

return (


  <div className="containerServices">
  <div className="row row2">
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