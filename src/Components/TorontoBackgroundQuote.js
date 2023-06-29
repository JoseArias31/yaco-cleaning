import React from "react";
import '../Styles/TorontoBackgroundQuote.css'
import Button from 'react-bootstrap/Button';

function Toronto(){

return(
<div className="TorontoContainer">

<img 
className="TorontoImg"
src={require('../Images/Toronto-Background.png')}
alt="Toronto Background" 
/>
<div className="BotonQuoute">
<Button id="Quote" variant="dark">Start a Quote!</Button>
</div>
</div>


);

}

export default Toronto;