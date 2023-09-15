import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Home = () => {
  return (
<div>
  <div className="container-xxl bg-white p-0">
  {/* <Sidebar/> */}
    <Header name="Home"/>
    
    <div>
    <h1>Home page </h1>

</div>


    <Footer/>
    {/* Back to Top */}
    <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
  </div>
</div>

  )
}

export default Home;
