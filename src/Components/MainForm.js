import React from "react";
import '../Styles/MainForm.css'
import 'bootstrap/dist/css/bootstrap.min.css';




function MainForm(){

return(
    <div className="mainFormContainer">
<div class="custom-shape-divider-top-1688313123">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
    </svg>
</div>


<div className="mainFormSections row">


<div className="col-md-6 imagToronto">

<img 
className="TorontoImg"
src={require('../Images/toronto.jpg')}
alt="House Background" 
/>

</div>


<div className="col-md-6">
<form className="mainForm">
  
  <div class="row mb-4">
  <h1 className="MainFromH1">Contact Us!</h1>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example1">First name*</label>
        <input type="text" id="form6Example1" class="form-control" required/>
        
      </div>
    </div>
    <div class="col">
      <div class="form-outline">
      <label class="form-label" for="form6Example2">Last name</label>
        <input type="text" id="form6Example2" class="form-control" />
        
      </div>
    </div>
  </div>

  
  <div class="form-outline mb-4">
  <label  class="form-label" for="form6Example3">Country</label>
    <input type="text" value="Canada" id="form6Example3" class="form-control" />
    
  </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example4">Address*</label>
    <input type="text" id="form6Example4" class="form-control" required/>
   
  </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example6">Number of Floors</label>
    <input type="number" id="form6Example6" class="form-control" />
    
  </div>

  <div class="form-outline">
      <label class="form-label" for="form6Example2">Area M2(Aprox)</label>
        <input type="text" id="form6Example2" class="form-control" />
        
      </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example5">Email Address*</label>
    <input type="email" id="form6Example5" class="form-control" required/>
    
  </div>

 
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example6">Phone Number</label>
    <input type="number" id="form6Example6" class="form-control" />
    
  </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example7">Additional information</label>
    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
    
  </div>

  <div className="checkboxServices">
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" />
    <label class="form-check-label" for="form6Example8">House</label>
  </div>

  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8"  />
    <label class="form-check-label" for="form6Example8">Office</label>  
  </div>

  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8"  />
    <label class="form-check-label" for="form6Example8">Post-Construction</label>
  </div>
  </div>

  <div className="submitBottonMainContainer">
  <button type="submit" class="btn btn-primary btn-block mb-4 submitBottonMain">Place order</button>
  </div>
</form>
</div>
</div>
</div>

)


}

export default MainForm;