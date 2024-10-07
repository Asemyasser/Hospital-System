import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const DoctorCard = () => {

    const data = [
        {
            img: "doctor-1.jpg",
            name: "Dr. Jason Kovalsky",
            profession: "Cardiologist"
        },
        {
            img: "doctor-2.jpg",
            name: "Patricia Mcneel",
            profession: "Pediatrist"
        },
        {
            img: "doctor-8.jpg",
            name: "William Khanna",
            profession: "Throat Specialist"
        },
        {
            img: "doctor-3.jpg",
            name: "Eric Patterson",
            profession: "Therapy"
        },
        {
            img: "doctor-6.jpg",
            name: "Mark Trevor",
            profession: "Therapy"
        },
        {
            img: "doctor-4.jpg",
            name: "Nolim Smith",
            profession: "Volunteer"
        },
        {
            img: "doctor-5.jpg",
            name: "Jason Kovalsky",
            profession: "Rehabiliation"
        },
        {
            img: "doctor-7.jpg",
            name: "Sarah Milles",
            profession: "Volunteer"
        }
    ]

  return (
    <>
        {
            data.map((d) => {
                return(
                    <div className="col-md-6 col-lg-3">
                        <div className="card h-100">
                            <img src={d.img} class="image card-img-top" alt="doctor-1"/>
                            <div className="card-body text-center">
                                <h5 className="card-title fw-bold">{d.name}</h5>
                                <p className="text-secondary fw-semibold">{d.profession}</p>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </>
  )
}

export default DoctorCard