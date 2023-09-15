import React from "react";
import { Link } from "react-router-dom";

const Header = (prop) => {
  return (

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
        <Link to = '/Admin_home'  className="nav-item nav-link active">Home</Link>
        <div className="nav-item dropdown">
          <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Settings</a>
          <div className="dropdown-menu m-0">
            <Link to = '/User'  className="dropdown-item">User</Link>
            <Link to = '/Menu_detail'  className="dropdown-item">Menu</Link>
            <Link to = '/Inventory'  className="dropdown-item">Inventory</Link>
            <Link to = '/Service'  className="dropdown-item">Service</Link>
            <Link to = '/Booking_data'  className="dropdown-item">Booking</Link>
            <Link to = '/Feedback'  className="dropdown-item">Feedback</Link>
            <Link to = '/login'  className="dropdown-item">Logout</Link>
            
            
            
          </div>
        </div>
        
      </div>
        
      
    </div>
  </nav>
  <div className="container-xxl py-5 bg-dark hero-header mb-5">
    <div className="container text-center my-5 pt-5 pb-4">
      <h1 className="display-3 text-white mb-3 animated slideInDown">{prop.name}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center text-uppercase">
        <li className="breadcrumb-item"><Link to="/Admin_home">Home</Link></li>
          <li className="breadcrumb-item text-white active" aria-current="page">{prop.name}</li>
        </ol>
      </nav>
    </div>
  </div>
</div>
{/* Navbar & Hero End */}
  
    </div>
  )
}

export default Header;
