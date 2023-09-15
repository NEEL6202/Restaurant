import React from "react";
import { useEffect,useState } from "react";
import { Link,useNavigate } from "react-router-dom";

const Otp = () =>{
   const [name,setName]=useState("");
   const [gender,setGender]=useState("");
   const [dob,setDOB]=useState("");
   const [address,setAddress]=useState("");
   const [pincode,setPincode]=useState("");
   const [contactno,setContactNo]=useState("");
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
   const [role,setRole]=useState("customer");
   const[uotp,setOtp]=useState("");
   const[loc_otp,setLoc_otp]=useState("");
   const[regcheck,setReg_check]=useState("");
   
   useEffect(() => {
      setLoc_otp(localStorage.getItem("otp"));
      
      setName(localStorage.getItem("name"));
      setGender(localStorage.getItem("gender"));
      setDOB(localStorage.getItem("dob"));
      setPincode(localStorage.getItem("pincode"));
      setAddress(localStorage.getItem("address"));
      setContactNo(localStorage.getItem("contactno"));
      setEmail(localStorage.getItem("email"));
      setPassword(localStorage.getItem("password"));
      setRole(localStorage.getItem("role"));
      
    })
  
     useEffect(() => {
       setReg_check(localStorage.getItem("regcheck"));
     })
  
  
    const navigate = useNavigate();

  
   
    const collectData= async ()=>{
      
    
   if(!uotp)
   {
     alert("Please Fill All Fields!!")
     return false;
   }


   if(uotp === loc_otp)
   {
      alert("otp valid")
      if(regcheck === "1")
      {
          alert("registartion done...")
          let result = await fetch('http://localhost:5000/register',{
          method:'POST',
          body: JSON.stringify({name,gender,dob,address,pincode,contactno,email,password,role}),       
          headers:{
              'Content-Type':'application/json'
          },
          });

          result = await result.json()
         
          localStorage.setItem("user",JSON.stringify(result));
          //navigate('/')
          window.location.href = 'http://localhost:3000/';
      }
      else
      {
        alert("forgot password")
        navigate("/Reset_password")
      }
   }
   else{
      alert("otp not valid...")
   }
     
  }
    return(
        <div>

        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                    <h5 className="section-title ff-secondary text-center text-primary fw-normal">Forgot Password</h5>
                    <h1 className="mb-5">Check your account</h1>
                </div>
                <div className="row g-4">
                    <form>
                    <div className="row g-">
                        <center>     
                            <div className="col-md-6">
                            {/* <iframe className="position-relative rounded w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameBorder={0} style={{minHeight: 350, border: 0}} allowFullScreen aria-hidden="false" tabIndex={0} /> */}
                            <div className="wow fadeInUp" data-wow-delay="0.2s">

                                <div className="row g-3">

                                    <div className="col-12">
                                        <div className="form-floating">
                                            <input type="number" className="form-control" id="subject" placeholder="otp" value={uotp} onChange={(e)=>setOtp(e.target.value)} />
                                            <label htmlFor="subject">Otp</label>
                                        </div>
                                    </div>
                                    <div className="row g-3">
                                        <div className="col-12">
                                            <button className="btn btn-primary w-100 py-3" type="submit" onClick={collectData}>Submit</button>
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
export default Otp;