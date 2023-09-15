import React from "react";
import Header from "./Home_menu";
import Footer from "./Footer";

const Home = () => {
  return (
<div>
  <div className="container-xxl bg-white p-0">
    <Header/>
    <div>
  {/* Service Start */}
  <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-4">
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-user-tie text-primary mb-4" />
              <h5>Master Chefs</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-utensils text-primary mb-4" />
              <h5>Quality Food</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-cart-plus text-primary mb-4" />
              <h5>Online Order</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
          <div className="service-item rounded pt-3">
            <div className="p-4">
              <i className="fa fa-3x fa-headset text-primary mb-4" />
              <h5>24/7 Service</h5>
              <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Service End */}
  {/* Testimonial Start */}
<div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
  <div className="container">
    <div className="text-center">
      <h5 className="section-title ff-secondary text-center text-primary fw-normal">Testimonial</h5>
      <h1 className="mb-5">Our Clients Say!!!</h1>
    </div>
    <div className="owl-carousel testimonial-carousel">
      <div className="testimonial-item bg-transparent border rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-1.jpg" style={{width: 50, height: 50}} />
          <div className="ps-3">
            <h5 className="mb-1">Client Name</h5>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item bg-transparent border rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-2.jpg" style={{width: 50, height: 50}} />
          <div className="ps-3">
            <h5 className="mb-1">Client Name</h5>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item bg-transparent border rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-3.jpg" style={{width: 50, height: 50}} />
          <div className="ps-3">
            <h5 className="mb-1">Client Name</h5>
            <small>Profession</small>
          </div>
        </div>
      </div>
      <div className="testimonial-item bg-transparent border rounded p-4">
        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
        <p>Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam</p>
        <div className="d-flex align-items-center">
          <img className="img-fluid flex-shrink-0 rounded-circle" src="img/testimonial-4.jpg" style={{width: 50, height: 50}} />
          <div className="ps-3">
            <h5 className="mb-1">Client Name</h5>
            <small>Profession</small>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{/* Testimonial End */}

</div>


    <Footer/>
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
</div>

  )
}

export default Home;
