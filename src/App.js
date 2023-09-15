import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./customer/Home";
import Home_menu from './customer/Home_menu';
import Header from './customer/Header';
import Footer from './customer/Footer';
import Menu from './customer/Menu';
import Team from './customer/Team';
import Aboutus from './customer/Aboutus';
import Contactus from './customer/Contactus';
import Booking from './customer/Booking';
import Login from './component/Login';
import Registration  from './component/Registration';
import Forgot_password from './component/Forgot_password';
import Otp from './component/Otp';
import Reset_password from './component/Reset_password';
import Admin_home from './admin/home';
import User from './admin/User';
import Menu_detail from './admin/Menu';
import Inventory from './admin/Inventory';
import Service from './admin/Service';
import Booking_data from './admin/Booking';
import Feedback from './admin/Feedback';
import Store from './customer/Store';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path='/Menu' element={<Menu/>}></Route>
          <Route exact path='/Team' element={<Team/>}></Route>
          <Route exact path='/Aboutus' element={<Aboutus/>}></Route>
          <Route exact path='/Contactus' element={<Contactus/>}></Route>
          <Route exact path='/Booking' element={<Booking/>}></Route>
          <Route exact path='/Login' element={<Login/>}></Route>
          <Route exact path='/Registration' element={<Registration/>}></Route>
          <Route exact path='/Forgot_password' element={<Forgot_password/>}></Route>
          <Route exact path='/Otp' element={<Otp/>}></Route>
          <Route exact path='/Reset_password' element={<Reset_password/>}></Route>
          <Route exact path='/Admin_home' element={<Admin_home/>}></Route>
          <Route exact path='/User' element={<User/>}></Route>
          <Route exact path='/Menu_detail' element={<Menu_detail/>}></Route>
          <Route exact path='/Inventory' element={<Inventory/>}></Route>
          <Route exact path='/Service' element={<Service/>}></Route>
          <Route exact path='/Booking_data' element={<Booking_data/>}></Route>
          <Route exact path='/Feedback' element={<Feedback/>}></Route>
          <Route exact path='/Store' element={<Store/>}></Route>

        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
