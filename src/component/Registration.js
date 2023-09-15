import React from "react";
import { Link ,useNavigate} from "react-router-dom";
import { useState,useEffect } from "react";

const Registration = () =>{
    const [name,setName]=useState("");
    const [gender,setGender]=useState("");
    const [dob,setDOB]=useState("");
    const [address,setAddress]=useState("");
    const [pincode,setPincode]=useState("");
    const [contactno,setContactNo]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [role,setRole]=useState("customer");
    
    const navigate = useNavigate();

   
    const collectData= async ()=>{
      
      console.warn(name,email,address);
     if(!name || !gender || !dob || !address || !pincode || !contactno || !email || !password )
     {
       alert("Please Fill All Fields!!")
       return false;
     }
     let otp=Math.floor(100000 + Math.random() * 900000);
     localStorage.setItem("otp",otp);

    
     localStorage.setItem("name",name);
     localStorage.setItem("gender",gender);
     localStorage.setItem("dob",dob);
     localStorage.setItem("address",address);
     localStorage.setItem("pincode",pincode);
     localStorage.setItem("contactno",contactno);
     localStorage.setItem("email",email);
     localStorage.setItem("password",password);
     localStorage.setItem("role",role);
     localStorage.setItem("regcheck",1);
    
    navigate('/Otp')
    }
    return(
        <div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Registration</h5>
                    <h1 className="mb-5">Create an account</h1>
                </div>
                <div className="row g-4">
                    <div className="col-12">
                        <div className="row gy-4">
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                <p><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
                            </div>
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Login</h5>
                                <Link to="/Login"><p><i className="fa fa-envelope-open text-primary me-2" />Login</p></Link>
                            </div>
                            <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Forgot password</h5>
                                <Link to="/Forgot_password"><p><i className="fa fa-envelope-open text-primary me-2" />Forgot password</p></Link>
                            </div>
                        </div>
                    </div>
                    <form>
                    <div className="row g-">
                        
                            <div className="col-md-6">
                            {/* <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 350, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /> */}
                            <div className="wow fadeInUp" data-wow-delay="0.2s">

                                <div className="row g-3">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="text" className="form-control" id="subject" placeholder="Name"   value={name} onChange={(e)=>setName(e.target.value)} />
                                            <label htmlFor="subject">Name</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="subject" placeholder="Contact No" value={contactno} onChange={(e)=>setContactNo(e.target.value)} />
                                            <label htmlFor="subject">Contact No</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <div className="from-control" style={{backgroundColor:"white", height:60}}>
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio"  id="subject" placeholder="gender" name="inlineRadioOptions" value={'m'} onChange={(e)=>setGender(e.target.value)}/>Male&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="inlineRadioOptions"  id="subject" placeholder="gender" value={'f'} onChange={(e)=>setGender(e.target.value)}/>Feamle&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type="radio" name="inlineRadioOptions"  id="subject" placeholder="gender" value={'o'} onChange={(e)=>setGender(e.target.value)}/>Other&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
                                            <input type="email" className="form-control" id="subject" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                                            <label htmlFor="subject">Email</label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="date" className="form-control" id="subject" placeholder="Dob"value={dob} onChange={(e)=>setDOB(e.target.value)} />
                                            <label htmlFor="subject"></label>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="subject" placeholder="Pin_code" value={pincode} onChange={(e)=>setPincode(e.target.value)}/>
                                            <label htmlFor="subject">Pin code</label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                <input type="password" className="form-control" id="subject" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                                <label htmlFor="subject">Password</label>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: 150 }} defaultValue={""} value={address} onChange={(e)=>setAddress(e.target.value)} />
                                    <label htmlFor="message">Address</label>
                                </div>
                            </div>
                        </div>
                        <div className="row g-3">
                            <div className="col-12">
                                <button className="btn btn-primary w-100 py-3" onClick={collectData} type="submit">Register</button>
                            </div>
                        </div>
                        
                    </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

    )
}
export default Registration;