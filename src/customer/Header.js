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
    <div className="container text-center my-5 pt-5 pb-4">
      <h1 className="display-3 text-white mb-3 animated slideInDown" id="title">{prop.name}</h1>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb justify-content-center text-uppercase">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
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
