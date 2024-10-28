import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import doctor1 from "../../../assets/images/doctor-1.jpg";
import doctor2 from "../../../assets/images/doctor-2.jpg";
import doctor3 from "../../../assets/images/doctor-3.jpg";
import doctor4 from "../../../assets/images/doctor-4.jpg";
import doctor5 from "../../../assets/images/doctor-5.jpg";
import doctor6 from "../../../assets/images/doctor-6.jpg";
import doctor7 from "../../../assets/images/doctor-7.jpg";
import doctor8 from "../../../assets/images/doctor-8.jpg";

const DoctorCard = () => {
  const data = [
    {
      img: doctor1,
      name: "Dr. Jason Kovalsky",
      profession: "Cardiologist",
    },
    {
      img: doctor2,
      name: "Patricia Mcneel",
      profession: "Pediatrist",
    },
    {
      img: doctor8,
      name: "William Khanna",
      profession: "Throat Specialist",
    },
    {
      img: doctor3,
      name: "Eric Patterson",
      profession: "Therapy",
    },
    {
      img: doctor6,
      name: "Mark Trevor",
      profession: "Therapy",
    },
    {
      img: doctor4,
      name: "Nolim Smith",
      profession: "Volunteer",
    },
    {
      img: doctor5,
      name: "Jason Kovalsky",
      profession: "Rehabiliation",
    },
    {
      img: doctor7,
      name: "Sarah Milles",
      profession: "Volunteer",
    },
  ];

  return (
    <>
      {data.map((d) => {
        return (
          <div className="col-md-6 col-lg-3">
            <div className="card h-100">
              <img src={d.img} class="image card-img-top" alt="doctor" />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{d.name}</h5>
                <p className="text-secondary fw-semibold">{d.profession}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default DoctorCard;
