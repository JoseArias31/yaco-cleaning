import React from "react";
import '../Styles/Footer.css'
function Footer() {
return(

          <div className="container-fluid my-5">
            <footer className="text-center text-lg-start text-white" style={{ backgroundColor: '#1c2331' }}>
              <section className="d-flex justify-content-between p-4" style={{ backgroundColor: '' }}>
                <div className="me-5">
                  <span>Get connected with us on social networks:</span>
                </div>
                <div>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-google"></i>
                  </a>
                  <a href="" className="text-white me-4">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </section>
      
              <section className="">
                <div className="container text-center text-md-start mt-5">
                  <div className="row mt-3">
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Yaco Cleaning</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                      <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                      </p>
                    </div>
      
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                      <h6 className="text-uppercase fw-bold">Products</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                      <p>
                        <a href="#!" className="text-white">MDBootstrap</a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">MDWordPress</a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">BrandFlow</a>
                      </p>
                      <p>
                        <a href="#!" className="text-white">Bootstrap Angular</a>
                      </p>
                    </div>
      
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                      <h6 className="text-uppercase fw-bold">Contact</h6>
                      <hr className="mb-4 mt-0 d-inline-block mx-auto" style={{ width: "60px", backgroundColor: "#7c4dff", height: "2px" }} />
                      <p><i className="fas fa-home mr-3"></i> Toronto, ON.</p>
                      <p><i className="fas fa-envelope mr-3"></i> gojosearias@gmail.com</p>
                      <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    </div>
                  </div>
                </div>
              </section>
      
              <div className="text-center p-3" style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}>
                ©CopyRigths 2023 Yaco Cleaning Powered By  
                <a className="text-white" href="https://mdbootstrap.com/"> Jose Arias</a>
              </div>
            </footer>
          </div>
        );
      };
      
    

export default Footer;


