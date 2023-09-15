const express= require("express");
const cors=require("cors");
require('../database/connection');
const User= require('../database/User');
const Menu=require('../database/Menu');
const Inventory=require('../database/Inventory');
const Service=require('../database/Service');
const Booking=require('../database/Booking');

const app = express()
app.use(express.json())
app.use(cors())
const nodemailer = require('nodemailer');
const { default: Feedback } = require("../src/admin/Feedback");

let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: '19bmiit096@gmail.com',
        pass: 'ragsmlizggilkdie',
    }
})

//Testing success
transporter.verify((error, success) => {
    if (error) {
        console.log(error);
    }
    else {
        console.log("Ready for message");
        console.log(success);
    }
});

//----------to send mail-------------

app.post('/Otp',async (req,resp) => {
    const mailOptions = {
             from: '"Neel"19bmiit096@gmail.com',
             to: req.body.email,
             subject: "Verify Your Email",
             html: '<a href="http://localhost:3000/"><p>Verify your email address to complete the signup and login into your account.</p><p>This link expires in 6 hours</p><p>Press to Procced.</p><p>your otp is below</p><h1>{otp}</h1></a>'
         };
         transporter.sendMail(mailOptions)
})

//-----------send mail------------
function sendMail(email,otp){
    transporter.verify((error, success) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log("Ready for message");
            console.log(success);
        }
    });
     console.log("The email is",email)
     const mailOptions = {
        from: '"Steve"19bmiit096@gmail.com',
        to: email,
        subject: "SALON DIVINE Verify Your Email",
        html: '<a href="http://localhost:3000/otpverification"><p>Verify OTP to Sign up your account</p><p>Your One Time Password is</p></a>'+otp
    };
    transporter.sendMail(mailOptions)
}

//-------registration----------------

app.post("/Register", async(req,resp)=>{
    let user = new User(req.body);
    let result = await user.save();
    result = result.toObject();
    delete result.password;
    resp.send(result);
})

//------------login-----------------
app.post("/login", async (req, resp) => {

    //console.log(req.body.email,req.body.password)
    if(req.body.password && req.body.email){
        //console.log("heelo")
        let user=await User.find({password:req.body.password})
        console.log(user)
        if (user) {
            console.log(user)
             resp.send(user)   
        }
        else {
             resp.send({ result: 'No user found' })
        }
    }
    else {
         resp.send({ result: 'No user found' })
     }
    
    
})

//--------View User------------

app.get("/User", async (req,resp)=>{
    let user = await User.find();
    if(user.length>0)
    {
        resp.send(user)
    }
    else
    {
        resp.send({result:"No User Found"})
    }
})

//----------delete user----------
app.delete("/User/:id",async(req,resp)=>{
    const result = await User.deleteOne({_id:req.params.id})
    resp.send(result);
})

//------------find user by id ---------------
app.get("/User/:id", async (req,resp)=>{
    let result = await User.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})

//------------find user by role ---------------
app.get("/employee_role", async (req,resp)=>{
    let result = await User.find({role:"employee"});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})


//------------------update user------------
app.put("/User/:id" , async(req,resp, next)=>{
    let result = await User.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
});

//-------add menu----------------

app.post("/Menu_detail", async(req,resp)=>{
    console.log(req.body);
    let menu = new Menu(req.body);
    let result = await menu.save();
    
    resp.send(result);
})


//--------View menu------------

app.get("/Menu_detail", async (req,resp)=>{
    let menu = await Menu.find();
    if(menu.length>0)
    {
        resp.send(menu)
    }
    else
    {
        resp.send({result:"No User Found"})
    }
})

//----------delete menu----------
app.delete("/menu_detail/:id",async(req,resp)=>{
    const result = await Menu.deleteOne({_id:req.params.id})
    resp.send(result);
})

//------------find menu by id ---------------
app.get("/Menu_detail/:id", async (req,resp)=>{
    let result = await Menu.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})

//------------find menu by meal ---------------
app.get("/Menu_breakfast", async (req,resp)=>{
    let result = await Menu.find({meal:"breakfast"});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})

//------------find menu by meal ---------------
app.get("/Menu_launch", async (req,resp)=>{
    let result = await Menu.find({meal:"launch"});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})

//------------find menu by meal ---------------
app.get("/Menu_dinner", async (req,resp)=>{
    let result = await Menu.find({meal:"dinner"});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})

//------------------update menu------------
app.put("/Menu_detail/:id" , async(req,resp, next)=>{
    let result = await Menu.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
});

//-------add inventory----------------

app.post("/Inventory_detail", async(req,resp)=>{
    let inventory = new Inventory(req.body);
    let result = await inventory.save();
    resp.send(result);
})


//--------View inventory------------

app.get("/Inventory_detail", async (req,resp)=>{
    let inventory = await Inventory.find();
    if(inventory.length>0)
    {
        resp.send(inventory)
    }
    else
    {
        resp.send({result:"No User Found"})
    }
})

//----------delete inventory----------
app.delete("/Inventory_detail/:id",async(req,resp)=>{
    const result = await Inventory.deleteOne({_id:req.params.id})
    resp.send(result);
})

//------------find inventory by id ---------------
app.get("/Inventory_detail/:id", async (req,resp)=>{
    let result = await Inventory.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})


//------------------update inventory------------
app.put("/Inventory_detail/:id" , async(req,resp, next)=>{
    let result = await Inventory.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
});


//-------add service----------------

app.post("/Service_detail", async(req,resp)=>{
    let service = new Service(req.body);
    let result = await service.save();
    resp.send(result);
})


//--------View service------------

app.get("/Service_detail", async (req,resp)=>{
    let service = await Service.find();
    if(service.length>0)
    {
        resp.send(service)
    }
    else
    {
        resp.send({result:"No User Found"})
    }
})

//----------delete service----------
app.delete("/Service_detail/:id",async(req,resp)=>{
    const result = await Service.deleteOne({_id:req.params.id})
    resp.send(result);
})

//------------find service by id ---------------
app.get("/Service_detail/:id", async (req,resp)=>{
    let result = await Service.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})


//------------------update Service------------
app.put("/Service_detail/:id" , async(req,resp, next)=>{
    let result = await Service.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
});

//--------View Feedback------------

app.get("/Feedback", async (req,resp)=>{
    let feedback = await Feedback.find();
    if(feedback.length>0)
    {
        resp.send(feedback)
    }
    else
    {
        resp.send({result:"No User Found"})
    }
})

//-------add booking----------------

app.post("/Booking_detail", async(req,resp)=>{
    let booking = new Booking(req.body);
    let result = await booking.save();
    resp.send(result);
})


//--------View booking------------

app.get("/Booking_detail", async (req,resp)=>{
    let booking = await Booking.find();
    if(booking.length>0)
    {
        resp.send(booking)
    }
    else
    {
        resp.send({result:"No User Found"})
    }
})

//----------delete booking----------
app.delete("/Booking_detail/:id",async(req,resp)=>{
    const result = await Booking.deleteOne({_id:req.params.id})
    resp.send(result);
})

//------------find booking by id ---------------
app.get("/Booking_detail/:id", async (req,resp)=>{
    let result = await Booking.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result)
    }
    else
    {
        resp.send({result:"No Product Found"})
    }
})


//------------------update booking------------
app.put("/Booking_detail/:id" , async(req,resp, next)=>{
    let result = await Booking.updateOne(
        {_id: req.params.id},
        {
            $set : req.body
        }
    )
    resp.send(result)
});


app.listen(5000);