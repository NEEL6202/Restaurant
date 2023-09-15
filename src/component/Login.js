import React from "react";
import { Link,useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";

const Login = () => {
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');
    const navigate = useNavigate();
    
    
    const handlelogin= async () => {
        alert("hello")
        console.warn(email,password)
        let result = await fetch('http://localhost:5000/login',{
            method:'post',
            body:JSON.stringify({email,password}),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        result = await result.json();
        localStorage.setItem("user_id",result[0]._id);
        localStorage.setItem("user",JSON.stringify(result));

        if(result[0].role === "customer")
        {
          alert(result[0].role)
          //navigate("/",{replace:true})
          window.location.href = 'http://localhost:3000/';
        }
        else{
            navigate("/Admin_home")
        }
       
    }
    return (
        <div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 className="section-title ff-secondary text-center text-primary fw-normal">Login</h5>
                        <h1 className="mb-5">Login for making order</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-12">
                            <div className="row gy-4">
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Booking</h5>
                                    <p><i className="fa fa-envelope-open text-primary me-2" />book@example.com</p>
                                </div>
                                <div className="col-md-4">
                                    <h5 className="section-title ff-secondary fw-normal text-start text-primary">Registartion</h5>
                                    <Link to = '/Registration'><p><i className="fa fa-envelope-open text-primary me-2" />Registration</p></Link>
                                    
                                </div>
                                <div className="col-md-4">
                                <h5 className="section-title ff-secondary fw-normal text-start text-primary">Forgot password</h5>
                                <Link to="/Forgot_password"><p><i className="fa fa-envelope-open text-primary me-2" />Forgot password</p></Link>
                                </div>
                            </div>
                        </div>
                        <form>
                        <div className="row g-">
                            <center>     
                                <div className="col-md-6">
                                {/* <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 350, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /> */}
                                <div className="wow fadeInUp" data-wow-delay="0.2s">

                                    <div className="row g-3">

                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="email" className="form-control" id="subject" placeholder="Email" onChange={(e)=>setEmail(e.target.value)} vlaue={email}/>
                                                <label htmlFor="subject">Email</label>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="form-floating">
                                                <input type="password" className="form-control" id="subject" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} vlaue={password}/>
                                                <label htmlFor="subject">Password</label>
                                            </div>
                                        </div>
                                        <div className="row g-3">
                                            <div className="col-12">
                                                <button className="btn btn-primary w-100 py-3"  onClick={handlelogin} type="submit">Login</button>
                                             </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </center>

                            
                            
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>


    )
}
export default Login;