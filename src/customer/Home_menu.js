import React from "react";
import { Link } from "react-router-dom";

const Home_menu = () => {
    return(
        <div>
           {/* Navbar & Hero Start */}
<div className="container-xxl position-relative p-0">
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
    <a href className="navbar-brand p-0">
      <h1 className="text-primary m-0"><i className="fa fa-utensils me-3" />Restoran</h1>
      {/* <img src="img/logo.png" alt="Logo"> */}
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
      <span className="fa fa-bars" />
    </button>
    <div className="collapse navbar-collapse" id="navbarCollapse">
      <div className="navbar-nav ms-auto py-0 pe-4">
        <Link to = '/'  className="nav-item nav-link active">Home</Link>
        <Link to = '/Aboutus'  className="nav-item nav-link active">About</Link>
        <Link to = '/Contactus'  className="nav-item nav-link active">Contact</Link>
        <Link to = '/Menu'  className="nav-item nav-link active">Menu</Link>
        <Link to = '/Service'  className="nav-item nav-link active">Service</Link>
        
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Setings</a>
          <div className="dropdown-menu m-0">
          <Link to ="/Profile" className="dropdown-item">Profile</Link>
            <Link to ="/Change password" className="dropdown-item">Change Password</Link>
            <Link to ="/Login" className="dropdown-item">Logout</Link>
          </div>
        </div>
       
      </div>
      <Link to = '/booking'  className="btn btn-primary py-2 px-4">Book A Table</Link>
     
    </div>
  </nav>
  <div className="container-xxl py-5 bg-dark hero-header mb-5">
    <div className="container my-5 py-5">
      <div className="row align-items-center g-5">
        <div className="col-lg-6 text-center text-lg-start">
          <h1 className="display-3 text-white animated slideInLeft">Enjoy Our<br />Delicious Meal</h1>
          <p className="text-white animated slideInLeft mb-4 pb-2">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
          <a href className="btn btn-primary py-sm-3 px-sm-5 me-3 animated slideInLeft">Book A Table</a>
        </div>
        <div className="col-lg-6 text-center text-lg-end overflow-hidden">
          <img className="img-fluid" src="img/hero.png" alt />
        </div>
      </div>
    </div>
  </div>
</div>
{/* Navbar & Hero End */}

        </div>
    )
}

export default Home_menu;