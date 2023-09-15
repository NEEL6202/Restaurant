import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useState,useEffect } from "react";

const Booking = () =>{
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [duration, setDuration] = useState("");
  const [price, setPrice] = useState("");
  const [menu_data, setMenu] = useState([]);
  const [buttonText, setButtonText] = useState('Submit');
  const [id, setId]=useState("");

  useEffect(() => {
      //getMenu();
  }, [])

  const collectData = async () => {


      if (!name || !category || !duration || !price ) {
          alert("Please Fill All Fields!!")
          return false;
      }

      if(buttonText == "Submit")
      {
          alert("registartion done...")
          let result = await fetch('http://localhost:5000/Menu_detail', {
          method: 'POST',
          body: JSON.stringify({ name, category,price,duration }),
          headers: {
              'Content-Type': 'application/json'
          },
          });

          result = await result.json()

          window.location.href = 'http://localhost:3000/Menu_detail';
      }
      else
      {
          alert("Update done...")
          let result = await fetch(`http://localhost:5000/Menu_detail/${id}`, {
          method: 'PUT',
          body: JSON.stringify({ name, category,price,duration }),
          headers: {
              'Content-Type': 'application/json'
          },
          });
          result=await result.json();
          window.location.href = 'http://localhost:3000/Menu_detail';
      }
      window.location.href = 'http://localhost:3000/Menu_detail';

  }

  const getMenu = async () => {
      let result = await fetch('http://localhost:5000/Menu_detail');
      result = await result.json();
      setMenu(result);
  }

  const updatemenu = async (id) => {
      //alert(id)
      setId(id);
      setButtonText('Update');
          let result = await fetch(`http://localhost:5000/Menu_detail/${id}`);
             result=await result.json();
             setName(result.name)
             setCategory(result.category)
             setPrice(result.price)
             setDuration(result.duration)
             
  }

  const deletemenu = async (id) => {
      //alert(id)
      let result = fetch(`http://localhost:5000/Menu_detail/${id}`, {
          method: "Delete"
      });
      //alert(JSON.stringify(result))
      result = await result.json()
      window.location.href = 'http://localhost:3000/Menu_detail';
  }

    return(
        <div>
          <Header name="Booking"/>
            {/* Reservation Start */}
  <div className="container-xxl py-5 px-0 wow fadeInUp" data-wow-delay="0.1s">
    <div className="row g-0">
      <div className="col-md-6">
        <div className="video">
          <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
            <span />
          </button>
        </div>
      </div>
      <div className="col-md-6 bg-dark d-flex align-items-center">
        <div className="p-5 wow fadeInUp" data-wow-delay="0.2s">
          <h5 className="section-title ff-secondary text-start text-primary fw-normal">Reservation</h5>
          <h1 className="text-white mb-4">Book A Table Online</h1>
          <form>
            <div className="row g-3">
            <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>Table 1</option>
                    <option value={2}>Table 2</option>
                    <option value={3}>Table 3</option>
                  </select>
                  <label htmlFor="select1">Table No</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>Menu 1</option>
                    <option value={2}>Menu 2</option>
                    <option value={3}>Menu 3</option>
                  </select>
                  <label htmlFor="select1">Menu</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating date" id="date3" data-target-input="nearest">
                  <input type="text" className="form-control datetimepicker-input" id="datetime" placeholder="Date & Time" data-target="#date3" data-toggle="datetimepicker" />
                  <label htmlFor="datetime">Date &amp; Time</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-floating">
                  <select className="form-select" id="select1">
                    <option value={1}>People 1</option>
                    <option value={2}>People 2</option>
                    <option value={3}>People 3</option>
                  </select>
                  <label htmlFor="select1">No Of People</label>
                </div>
              </div>
              <div className="col-12">
                <div className="form-floating">
                  <textarea className="form-control" placeholder="Special Request" id="message" style={{height: 100}} defaultValue={""} />
                  <label htmlFor="message">Special Request</label>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary w-100 py-3" type="submit">Book Now</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  <div className="modal fade" id="videoModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content rounded-0">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Youtube Video</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
        </div>
        <div className="modal-body">
          {/* 16:9 aspect ratio */}
          <div className="ratio ratio-16x9">
            <iframe className="embed-responsive-item" src id="video" allowFullScreen allowscriptaccess="always" allow="autoplay" />
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Reservation Start */}
  <Footer/>
        </div>
    )
}
export default Booking;