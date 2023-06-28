import React from "react";

function WhatWeDo(){
return (


<div className="WhatWeDoContainer">

<div className="WhatWeDoLeft">
<p>
We are a professional cleaning company based in Toronto, providing top-notch cleaning services for residential homes, commercial offices and post-construction sites
</p>

<div className="WhatWeDoIcons">
<img 
className="IconsWhatWeDo"
src={require('../Images/Icon House.png')}
alt="House Background" 
/>
<img 
className="IconsWhatWeDo"
src={require('../Images/Icons Office.png')}
alt="House Background" 
/>
<img 
className="IconsWhatWeDo"
src={require('../Images/Construction Building.png')}
alt="House Background" 
/>

</div>
<img 
className="TorontoImg"
src={require('../Images/CanadianHouseNoBackground.png')}
alt="House Background" 
/>
</div>

<div className="WhatWeDoRight">
  
</div>



</div>

)

}

export default WhatWeDo;