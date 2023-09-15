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

const Home = () => {
    const [name, setName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDOB] = useState("");
    const [address, setAddress] = useState("");
    const [pincode, setPincode] = useState("");
    const [contactno, setContactNo] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("password");
    const [role, setRole] = useState("employee");
    const [user, setUser] = useState([]);
    const [buttonText, setButtonText] = useState('Register');
    const [id, setId]=useState("");

    useEffect(() => {
        getUser();
    }, [])

    const collectData = async () => {


        console.warn(name, email, address);
        if (!name || !gender || !dob || !address || !pincode || !contactno || !email) {
            alert("Please Fill All Fields!!")
            return false;
        }

        if(buttonText == "Register")
        {
            alert("registartion done...")
            let result = await fetch('http://localhost:5000/register', {
            method: 'POST',
            body: JSON.stringify({ name, gender, dob, address, pincode, contactno, email, password, role }),
            headers: {
                'Content-Type': 'application/json'
            },
            });

            result = await result.json()

            localStorage.setItem("user", JSON.stringify(result));
            //navigate('/')
            window.location.href = 'http://localhost:3000/User';
        }
        else
        {
            alert("Update done...")
            let result = await fetch(`http://localhost:5000/User/${id}`, {
            method: 'PUT',
            body: JSON.stringify({ name, gender, dob, address, pincode, contactno, email }),
            headers: {
                'Content-Type': 'application/json'
            },
            });
            result=await result.json();
            window.location.href = 'http://localhost:3000/User';
        }
        window.location.href = 'http://localhost:3000/User';

    }

    const getUser = async () => {
        let result = await fetch('http://localhost:5000/User');
        result = await result.json();
        setUser(result);
    }

    // const getuserdetail = async ()=>{
    //     let result = await fetch(`http://localhost:5000/User/${id}`);
    //        result=await result.json();
    //        setName(result.name)
    //        setGender(result.gender)
    //        setDOB(result.dob)
    //        setAddress(result.address)
    //        setPincode(result.pincode)
    //        setContactNo(result.contactno)
    //        setEmail(result.email)
           
    //   }
    const updateuser = async (id) => {
        //alert(id)
        setId(id);
        setButtonText('Update');
            let result = await fetch(`http://localhost:5000/User/${id}`);
               result=await result.json();
               setName(result.name)
               setGender(result.gender)
               setDOB(result.dob)
               setAddress(result.address)
               setPincode(result.pincode)
               setContactNo(result.contactno)
               setEmail(result.email)
               
    }

    const deleteuser = async (id) => {
        //alert(id)
        let result = fetch(`http://localhost:5000/User/${id}`, {
            method: "Delete"
        });
        //alert(JSON.stringify(result))
        result = await result.json()
        window.location.href = 'http://localhost:3000/User';
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
                                    <h5 className="modal-title" id="modalCenterTitle">User Detail</h5>
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
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="number" className="form-control" id="subject" placeholder="Contact No" value={contactno} onChange={(e) => setContactNo(e.target.value)} />
                                                                <label htmlFor="subject">Contact No</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating"  >
                                                                <div className="from-control" >
                                                                    <input type="radio" id="subject" placeholder="gender" name="inlineRadioOptions" value={'m'} onChange={(e) => setGender(e.target.value)} />Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                                                    <input type="radio" name="inlineRadioOptions" id="subject" placeholder="gender" value={'f'} onChange={(e) => setGender(e.target.value)} />Feamle&nbsp;&nbsp;&nbsp;
                                                                    &nbsp;&nbsp;&nbsp;<input type="radio" name="inlineRadioOptions" id="subject" placeholder="gender" value={'o'} onChange={(e) => setGender(e.target.value)} />Other
                                                                </div>

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
                                                                <input type="email" className="form-control" id="subject" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                                                <label htmlFor="subject">Email</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="date" className="form-control" id="subject" placeholder="Dob" value={dob} onChange={(e) => setDOB(e.target.value)} />
                                                                <label htmlFor="subject"></label>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="form-floating">
                                                                <input type="number" className="form-control" id="subject" placeholder="Pin_code" value={pincode} onChange={(e) => setPincode(e.target.value)} />
                                                                <label htmlFor="subject">Pin code</label>
                                                            </div>
                                                        </div>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                <input type="password" className="form-control" id="subject" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                <label htmlFor="subject">Password</label>
                                </div>
                            </div>
                        </div> */}
                                            <div className="row g-3">
                                                <div className="col-12">
                                                    <div className="form-floating">
                                                        <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} value={address} onChange={(e) => setAddress(e.target.value)} />
                                                        <label htmlFor="message">Address</label>
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
                <Header name="User"/>

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
                                            <th>Gender</th>
                                            <th>Email</th>
                                            <th>Contact</th>
                                            <th>DOB</th>
                                            <th>Address</th>
                                            <th>Pincode</th>
                                            <th>Role</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody className="table-border-bottom-0">

                                        {
                                            user.map((item, index) =>
                                                <tr key={item._id}>
                                                    <td>{index + 1}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.gender}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.contactno}</td>
                                                    <td>{formatDate(item.dob)}</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.pincode}</td>
                                                    <td>{item.role}</td>


                                                    <td>
                                                        <div className="dropdown">
                                                            <button type="button" className="btn p-0 dropdown-toggle hide-arrow" data-bs-toggle="dropdown">
                                                                <i className="bx bx-dots-vertical-rounded" />
                                                            </button>
                                                            <div className="dropdown-menu">
                                                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-edit-alt me-1" />  <button onClick={() => updateuser(item._id)} data-bs-toggle="modal" data-bs-target="#modalCenter" id="edit"> Edit</button></a>
                                                                <a className="dropdown-item" href="javascript:void(0);"><i className="bx bx-trash me-1" /><button onClick={() => deleteuser(item._id)} > Delete</button></a>
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

export default Home;
