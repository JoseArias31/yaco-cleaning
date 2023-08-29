import React, { useState } from "react";
import '../Styles/whatWeDo.css'
import BeContactedForm from "./BeContacted";
import 'bootstrap/dist/css/bootstrap.min.css';
import ImgHover from "./CleaningImg";


function WhatWeDo(){
      const [showList, setShowList] = useState(true);

      const toggleList = () => {
        setShowList(!showList);
      };
return (


<div className="WhatWeDoContainer row">
<div className="WhatWeDoLeft col-md-6"></div>
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

    
<div className="containerList">
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

<div className="WhatWeDoRight col-md-6">

{/* <div className="SocialIcons">
<a href="https://instagram.com/gojosearias?igshid=YmMyMTA2M2Y=" target="_blank" rel="noopener noreferrer">
<img alt="siguenos en instagram" height="60" width="60" src={require('../Images/instagram.png')} title="siguenos en instagram" /></a>

<a href="https://wa.me/16474252986" target="_blank" rel="noopener noreferrer">
<img alt="siguenos en whatsapp" height="60" width="60" src={require('../Images/whatsapp.png')} title="siguenos en whatsapp" /></a>

<a href="mailto:gojosearias@gmail.com" target="_blank" rel="noopener noreferrer">
<img alt="Email Us" height="60" width="60" src={require('../Images/mail.png')} title="siguenos en whatsapp" /></a>

</div> */}


<h1 className="h1">
<img id="phone" src={require('../Images/icons phone.png')}
        alt='Phone Icone' />
       Drop your Number to be Contacted!
      </h1>
      <BeContactedForm />
</div>

</div>

)

}

export default WhatWeDo;