import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Styles/Projects.css'

function Projects() {

return(

    
 

  <div className="carousel-inner py-4">
    
   
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Houses</a>
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Buildings-Offices</a>
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
                <h5 className="card-title">Card title</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up the bulk
                  of the card's content.
                </p>
                <a href="#!" className="btn btn-primary">Post-Construction</a>
              </div>
            </div>
          </div>
        </div>
      </div>
   
  </div>
 
);

}

export default Projects;