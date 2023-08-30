
import '../Styles/whatWeDo.css'
import BeContactedForm from "./BeContacted";
import 'bootstrap/dist/css/bootstrap.min.css';



function WhatWeDo(){
   return(
<div>

<h1 className="h1">
<img id="phone" src={require('../Images/icons phone.png')}
        alt='Phone Icone' />
       Drop your Number to be Contacted!
      </h1>
      <BeContactedForm />
</div>
)

}

export default WhatWeDo;