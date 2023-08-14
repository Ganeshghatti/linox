import React from 'react'
import Home from "./Home/Home";
import Navbar from "./Navbar/Navbar";
import "./FullHome.scss";
import Services from './Services/Services';
import Testimonials from './Testimonials/Testimonials';
import Details from './Details/Details';
import Contact_us from './Contact-us/Contact_us';
import CustomFooter from "./Footer/Footer"; // Renamed the import

export default function FullHome() {
  return (
    <div className='fullhome'>
      <Navbar/>
      <Home/>
      <Services/>
      <Testimonials/>
      <Details/>
      <Contact_us/>
      <CustomFooter/>
    </div>
  )
}
