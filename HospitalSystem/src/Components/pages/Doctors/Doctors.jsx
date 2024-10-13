import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import DoctorCard from './DoctorCard';
import Footer from "./../../shared/Footer";

const Doctors = () => {

  return (
    <>
      <h2 class="d-flex flex-column align-items-center fw-lighter mt-5 pt-5">
        Meet Our <span class="fw-bold">Mukti Professional Doctors</span>
      </h2>

      <div className="container py-5">
        <div className="row gy-4">

            <DoctorCard/>

        </div>
      </div>
      
      <Footer/>
    </>
  )
}

export default Doctors