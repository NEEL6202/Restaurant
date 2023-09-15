import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { set } from "mongoose";

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

const Menu = () => {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [meal, setMeal] = useState("");
    const [description, setDescription] = useState("");
    const [menu_data, setMenu] = useState([]);
    const [buttonText, setButtonText] = useState('Submit');
    const [id, setId] = useState("");

    useEffect(() => {
        getMenu();
    }, [])

    const collectData = async () => {


        if (!name || !category || !description || !price || !meal) {
            alert("Please Fill All Fields!!")
            return false;
        }

        if (buttonText == "Submit") {
            alert("registartion done...")
            alert(meal)
            alert(description)
            let result = await fetch('http://localhost:5000/Menu_detail', {
                method: 'POST',
                body: JSON.stringify({ name, category, price, meal, description }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            result = await result.json()

            window.location.href = 'http://localhost:3000/Menu_detail';
        }
        else {
            alert("Update done...")
            let result = await fetch(`http://localhost:5000/Menu_detail/${id}`, {
                method: 'PUT',
                body: JSON.stringify({ name, category, price, meal, description }),
                headers: {
                    'Content-Type': 'application/json'
                },
            });
            result = await result.json();
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
        result = await result.json();
        setName(result.name)
        setCategory(result.category)
        setPrice(result.price)
        setMeal(result.meal)
        setDescription(result.description)

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



    return (
        <div>
            {/* Vertically Centered Modal */}
            <div className="col-lg-6 col-md-12">
                <div className="mt-3">
                    {/* Modal */}
                    <div className="modal fade" id="modalCenter" tabIndex={-1} aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="modalCenterTitle">Menu Detail</h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <form>
                                        <div className="row g-">

                                            <div className="col-md-6">
                                                {/* <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 350, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /> */}
                                                <div className="wow fadeInUp">

                                                    <div className="row g-3">

                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="text" className="form-control" id="subject" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                                                                <label htmlFor="subject">Name</label>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="text" className="form-control" id="subject" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                                                                <label htmlFor="subject">category</label>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <select className="form-select" id="select1" value={category} onChange={(e) => setCategory(e.target.value)}>
                                                                    <option value="0">Category</option>
                                                                    <option value="chinice">Chinice</option>
                                                                    <option value="mexicon">Mexicon</option>
                                                                    <option value="indian">Indian</option>
                                                                </select>
                                                                {/* <label htmlFor="select1">Category</label> */}
                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="wow fadeInUp" data-wow-delay="0.2s">

                                                    <div className="row g-3">

                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="number" className="form-control" id="subject" placeholder="price" value={price} onChange={(e) => setPrice(e.target.value)} />
                                                                <label htmlFor="subject">Price</label>
                                                            </div>
                                                        </div>
                                                        {/* <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="number" className="form-control" id="subject" placeholder="Duration" value={duration} onChange={(e) => setDuration(e.target.value)} />
                                                                <label htmlFor="subject">Duration</label>
                                                            </div>
                                                        </div> */}
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <select className="form-select" id="select1" value={meal} onChange={(e) => setMeal(e.target.value)}>
                                                                    <option value="0">Meal</option>
                                                                    <option value="breakfast">Breakfast</option>
                                                                    <option value="launch">Launch</option>
                                                                    <option value="dinner">Dinner</option>
                                                                </select>
                                                                {/* <label htmlFor="select1">Meal</label> */}
                                                            </div>
                                                        </div>


                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} value={description} onChange={(e) => setDescription(e.target.value)} />
                                                        <label htmlFor="message">Description</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <button className="btn btn-primary w-100 py-3" type="submit" onClick={collectData}>{buttonText}</button>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl bg-white p-0">
                {/* <Sidebar/> */}
                <Header name="Menu" />

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
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Meal</th>
                                            <th>Price</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">

                                        {
                                            menu_data.map((item, index) =>
                                                <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.category}</td>
                                                    <td>{item.meal}</td>
                                                    <td>{item.price}</td>
                                                    <td>{item.description}</td>


                                                    <td>
                                                        <div className="dropdown">
                                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <i className="bx bx-dots-vertical-rounded" />
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" />  <button onClick={() => updatemenu(item._id)} data-bs-toggle="modal" data-bs-target="#modalCenter" id="edit"> Edit</button></a>
                                                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /><button onClick={() => deletemenu(item._id)} > Delete</button></a>
                                                            </div>

                                                        </div>
                                                    </td>
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

export default Menu;
