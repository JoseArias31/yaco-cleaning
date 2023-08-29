import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Projects.css'

function Projects() {

return(

    
 

  <div id='projects' className="carousel-inner py-4">
    
   
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/181.webp"
                className="card-img-top"
                alt="Waterfall"
              />
              <div className="card-body">
                <h5 className="card-title">Houses</h5>
                <p className="card-text">
                House cleaning encompasses comprehensive maintenance in residential spaces included basements and backyards.It involves tasks like dusting, vacuuming, mopping floors, cleaning windows, sanitizing surfaces, and organizing living areas. Beyond these, aiming to establish hygienic environment that ensures the well-being of residents.
                </p>
                <a href="#!" className="btn btn-primary">Projects</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp"
                className="card-img-top"
                alt="Sunset Over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Offices-Buildings</h5>
                <p className="card-text">
                Office cleaning maintains an organized workspace in commercial settings. It includes tidying desks, equipment, common areas, and break rooms. The scope extends to cleaning bathrooms, garbage removal, and thorough carpet vacuuming. This fosters a professional, inviting atmosphere and promotes a healthy work environment for all.
                </p>
                <a href="#!" className="btn btn-primary">Projects</a>
              </div>
            </div>
          </div>

          <div className="col-md-4 col-sm-6">
            <div className="card">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/standard/nature/183.webp"
                className="card-img-top"
                alt="Sunset over the Sea"
              />
              <div className="card-body">
                <h5 className="card-title">Post-Construction</h5>
                <p className="card-text">
                Post-construction cleaning is the meticulous process of removing debris, dust, and residue left behind after construction or renovation projects. This specialized cleaning involves cleaning surfaces, windows, and fixtures, as well as removing construction materials. Post-construction cleaning restores the site to a safe and presentable condition for occupancy.
                </p>
                <a href="#!" className="btn btn-primary">Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  </div>
 
);

}

export default Projects;