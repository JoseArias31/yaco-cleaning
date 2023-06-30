import React from "react";
import '../Styles/Services.css'
import Offices from '../Images/Offices.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){

return (


    <div class="containerServices">
  <div className="row">
    
    <div className="col-sm-4 diagonal Colm1 listFS">
      
<h1 className="TextFS">Flexible Services</h1>
   
<ul className="text-lg text-md-35 FlexibleServicesList ">
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
    
    <div class="col-sm-4 diagonal Colm2 mi-componente"   
      style={{
        backgroundImage: `url(${Offices})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'}}>
       
    </div>
    <div class="col-sm-4 diagonal Colm3">Columna 3</div>
  </div>
</div>
)


}

export default Services;