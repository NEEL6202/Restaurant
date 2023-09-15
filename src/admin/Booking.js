import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

const Booking_data = () => {
    
    const [booking_data, setBooking_data] = useState([]);
    const [buttonText, setButtonText] = useState('Submit');
    const [id, setId]=useState("");

    useEffect(() => {
        getBooking();
    }, [])

       const getBooking = async () => {
        let result = await fetch('http://localhost:5000/Booking_detail');
        result = await result.json();
        setBooking_data(result);
    }

    return (
        <div>
            
            <div className="container-xxl bg-white p-0">
                {/* <Sidebar/> */}
                <Header name="Booking" />

                <div className="row">
                    <div class="col-xl-12">

                        <div className="col-1" style={{ marginLeft: 1200, marginBottom: 10 }}>
                            <button className="btn btn-primary w-100 py-3" type="submit" data-bs-toggle="modal" data-bs-target="#modalCenter">Add</button>
                        </div>
                        <div class="card mb-8">


                            <div className="table-responsive text-nowrap">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th>Sr. No.</th>
                                            <th>Customer</th>
                                            <th>Table no</th>
                                            <th>No Of people</th>
                                            <th>Price</th>
                                            <th>Menu </th>
                                            <th>Special Request</th>
                                            <th>Date/Time</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">

                                        {
                                            booking_data.map((item, index) =>
                                                <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.table_no}</td>
                                                    <td>{item.no_of_person}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.menu_id}</td>
                                                    <td>{item.special_request}</td>
                                                    <td>{item.date_time}</td>
                                                    
                                                </tr>

                                            )
                                        }


                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>



                </div>


                <Footer />
                {/* Back to Top */}
                <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up" /></a>
            </div>
        </div>

    )
}

export default Booking_data;
