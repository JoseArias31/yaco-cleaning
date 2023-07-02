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


<div className="col-md-6">

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
      <label class="form-label" for="form6Example1">First name</label>
        <input type="text" id="form6Example1" class="form-control" />
        
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
  <label class="form-label" for="form6Example3">Company name</label>
    <input type="text" id="form6Example3" class="form-control" />
    
  </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example4">Address</label>
    <input type="text" id="form6Example4" class="form-control" />
   
  </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example5">Email</label>
    <input type="email" id="form6Example5" class="form-control" />
    
  </div>

 
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example6">Phone</label>
    <input type="number" id="form6Example6" class="form-control" />
    
  </div>

  
  <div class="form-outline mb-4">
  <label class="form-label" for="form6Example7">Additional information</label>
    <textarea class="form-control" id="form6Example7" rows="4"></textarea>
    
  </div>

  
  <div class="form-check d-flex justify-content-center mb-4">
    <input class="form-check-input me-2" type="checkbox" value="" id="form6Example8" checked />
    <label class="form-check-label" for="form6Example8"> Create an account? </label>
  </div>

  
  <button type="submit" class="btn btn-primary btn-block mb-4">Place order</button>
</form>
</div>
</div>
</div>

)


}

export default MainForm;