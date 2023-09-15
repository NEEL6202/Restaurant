import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  const [menu_breakfast, setBreakfast] = useState([]);
  const [menu_launch, setLaunch] = useState([]);
  const [menu_dinner, setDinner] = useState([]);
  useEffect(() => {
    getMenu_breakfast();
    getMenu_launch();
    getMenu_dinner();
  }, [])

  const getMenu_breakfast = async () => {
    let result = await fetch('http://localhost:5000/Menu_breakfast');
    result = await result.json();
    setBreakfast(result);
  }

  const getMenu_launch = async () => {
    let result = await fetch('http://localhost:5000/Menu_launch');
    result = await result.json();
    setLaunch(result);
  }

  const getMenu_dinner = async () => {
    let result = await fetch('http://localhost:5000/Menu_dinner');
    result = await result.json();
    setDinner(result);
  }

  return (
    <div>
      <Header name="Menu" />
      {/* Menu Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h5 className="section-title ff-secondary text-center text-primary fw-normal">Food Menu</h5>
            <h1 className="mb-5">Most Popular Items</h1>
          </div>
          <div className="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">
            <ul className="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                  <i className="fa fa-coffee fa-2x text-primary" />
                  <div className="ps-3">
                    <small className="text-body">Popular</small>
                    <h6 className="mt-n1 mb-0">Breakfast</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                  <i className="fa fa-hamburger fa-2x text-primary" />
                  <div className="ps-3">
                    <small className="text-body">Special</small>
                    <h6 className="mt-n1 mb-0">Launch</h6>
                  </div>
                </a>
              </li>
              <li className="nav-item">
                <a className="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                  <i className="fa fa-utensils fa-2x text-primary" />
                  <div className="ps-3">
                    <small className="text-body">Lovely</small>
                    <h6 className="mt-n1 mb-0">Dinner</h6>
                  </div>
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div id="tab-1" className="tab-pane fade show p-0 active">
                <div className="row g-4">
                  <div className="col-lg-3">
                    <div className="search-container">
                      <form style={{ display: "flex" }}>
                        <input type="text" placeholder="Search.." name="search" id="search" className="form-control " style={{ flexGrow: 1 }} />
                        <button type="submit" className="btn btn-primary " style={{ flexGrow: 1 }}><i className="fa fa-search" /></button>
                      </form>
                    </div>

                    <br></br>
                    <div className="form-floating">
                      <label>Category</label>
                      <select className="form-select" id="select1">
                        <option ></option>
                        <option value="chinice">Chinice</option>
                        <option value="mexicon">Mexicon</option>
                        <option value="indian">Indian</option>
                      </select>
                      {/* <label htmlFor="select1">Category</label> */}
                    
                    </div>
                    
                    <br></br>
                    
                    <div className="card">
                  <div className="card-heading" style={{textAlign:"left" , marginLeft:10}}>
                    <a data-toggle="collapse" data-target="#collapseThree" style={{textAlign:"left"}}>Filter Price</a>
                  </div>
                  <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                    <div className="card-body">
                        <ol style={{textAlign:"left"}} >
                          <li  className="service-item rounded pt-1" ><a href="#">$0.00 - $50.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1" ><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$100.00 - $150.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$150.00 - $200.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$200.00 - $250.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">250.00+</a></li>
                        </ol>
                      
                    </div>
                  </div>
                </div>
                  </div>
                  <div className="col-lg-9">

                    {
                      menu_breakfast.map((item, index) =>
                        <>
                        <div className="d-flex align-items-center">
                          <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt style={{ width: 80 }} />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primary">{item.price}</span>
                            </h5>
                            <small className="fst-italic">{item.description}</small>
                          </div>

                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="btn btn-primary  py-1" >ADD</button><br/>
                          
                        </div>
                        <br></br>
                        </>
                      )

                    }
                  </div>

                </div>
              </div>
              <div id="tab-2" className="tab-pane fade show p-0">
                <div className="row g-4">
                <div className="col-lg-3">
                    <div className="search-container">
                      <form style={{ display: "flex" }}>
                        <input type="text" placeholder="Search.." name="search" id="search" className="form-control " style={{ flexGrow: 1 }} />
                        <button type="submit" className="btn btn-primary " style={{ flexGrow: 1 }}><i className="fa fa-search" /></button>
                      </form>
                    </div>

                    <br></br>
                    <div className="form-floating">
                      <label>Category</label>
                      <select className="form-select" id="select1">
                        <option ></option>
                        <option value="chinice">Chinice</option>
                        <option value="mexicon">Mexicon</option>
                        <option value="indian">Indian</option>
                      </select>
                      {/* <label htmlFor="select1">Category</label> */}
                    
                    </div>
                    
                    <br></br>
                    
                    <div className="card">
                  <div className="card-heading" style={{textAlign:"left" , marginLeft:10}}>
                    <a data-toggle="collapse" data-target="#collapseThree" style={{textAlign:"left"}}>Filter Price</a>
                  </div>
                  <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                    <div className="card-body">
                        <ol style={{textAlign:"left"}} >
                          <li  className="service-item rounded pt-1" ><a href="#">$0.00 - $50.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1" ><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$100.00 - $150.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$150.00 - $200.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$200.00 - $250.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">250.00+</a></li>
                        </ol>
                      
                    </div>
                  </div>
                </div>
                  </div>
                  <div className="col-lg-9">
                      
                  {
                    menu_launch.map((item, index) =>

                        <div className="d-flex align-items-center">
                          <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt style={{ width: 80 }} />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primary">{item.price}</span>
                            </h5>
                            <small className="fst-italic">{item.description}</small>
                            
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="btn btn-primary  py-1" >ADD</button><br/>
                        </div>
                      


                    )
                  }
                      </div>
                </div>
              </div>
              <div id="tab-3" className="tab-pane fade show p-0">
                <div className="row g-4">
                <div className="col-lg-3">
                    <div className="search-container">
                      <form style={{ display: "flex" }}>
                        <input type="text" placeholder="Search.." name="search" id="search" className="form-control " style={{ flexGrow: 1 }} />
                        <button type="submit" className="btn btn-primary " style={{ flexGrow: 1 }}><i className="fa fa-search" /></button>
                      </form>
                    </div>

                    <br></br>
                    <div className="form-floating">
                      <label>Category</label>
                      <select className="form-select" id="select1">
                        <option ></option>
                        <option value="chinice">Chinice</option>
                        <option value="mexicon">Mexicon</option>
                        <option value="indian">Indian</option>
                      </select>
                      {/* <label htmlFor="select1">Category</label> */}
                    
                    </div>
                    
                    <br></br>
                    
                    <div className="card">
                  <div className="card-heading" style={{textAlign:"left" , marginLeft:10}}>
                    <a data-toggle="collapse" data-target="#collapseThree" style={{textAlign:"left"}}>Filter Price</a>
                  </div>
                  <div id="collapseThree" className="collapse show" data-parent="#accordionExample">
                    <div className="card-body">
                        <ol style={{textAlign:"left"}} >
                          <li  className="service-item rounded pt-1" ><a href="#">$0.00 - $50.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1" ><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$50.00 - $100.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$100.00 - $150.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$150.00 - $200.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">$200.00 - $250.00</a></li>
                          <li className="service-item rounded pt-1"><a href="#">250.00+</a></li>
                        </ol>
                      
                    </div>
                  </div>
                </div>
                  </div>

                <div className="col-lg-9">
                     
                  {
                    menu_dinner.map((item, index) =>

                        <div className="d-flex align-items-center">
                          <img className="flex-shrink-0 img-fluid rounded" src="img/menu-1.jpg" alt style={{ width: 80 }} />
                          <div className="w-100 d-flex flex-column text-start ps-4">
                            <h5 className="d-flex justify-content-between border-bottom pb-2">
                              <span>{item.name}</span>
                              <span className="text-primary">{item.price}</span>
                            </h5>
                            <small className="fst-italic">{item.description}</small>
                          </div>
                          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <button className="btn btn-primary  py-1" >ADD</button><br/>
                        </div>
                      


                    )
                  }
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Menu End */}
      <Footer />
    </div>
  )
}
export default Menu;