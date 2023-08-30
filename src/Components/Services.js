import React from "react";
import '../Styles/Services.css'

import 'bootstrap/dist/css/bootstrap.min.css';

function Services(){
  
return (


  <section class="features-icons bg-light text-center services">
  <div class="container">
      <div class="row">
          <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex"><i class="bi-window m-auto text-primary"></i></div>
                  <img 

                  src={require('../Images/choose.png')}
                  alt="Toronto Background" 
                  />
                  <h3>Choose a Project</h3>
                  <p class="lead mb-0">Browse and Pick your Cleaning Project.</p>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                  <div class="features-icons-icon d-flex"><i class="bi-layers m-auto text-primary"></i></div>
                  <img 

                  src={require('../Images/appointment.png')}
                  alt="Toronto Background" 
                  />
                  <h3>Book</h3>
                  <p class="lead mb-0">Secure your Spot with a Quick Booking.</p>
              </div>
          </div>
          <div class="col-lg-4">
              <div class="features-icons-item mx-auto mb-0 mb-lg-3">
                  <div class="features-icons-icon d-flex"><i class="bi-terminal m-auto text-primary"></i></div>
                  <img 

                  src={require('../Images/schedule.png')}
                  alt="Toronto Background" 
                  />
                  <h3>Schedule</h3>
                  <p class="lead mb-0">Tailor the Schedule to Suit You.</p>
              </div>
          </div>
      </div>
  </div>
</section>
)


}

export default Services;