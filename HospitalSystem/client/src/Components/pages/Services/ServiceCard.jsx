import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./Services.css";
import service1 from "../../../assets/images/services-1.jpg";
import service2 from "../../../assets/images/services-2.jpg";
import service3 from "../../../assets/images/services-3.jpg";
import service4 from "../../../assets/images/services-4.jpg";
import service5 from "../../../assets/images/services-5.jpg";

const ServiceCard = () => {
  const data = [
    {
      img: service1,
      service: "24/7 Emergency Care",
      details: `Our hospital offers round-the-clock emergency services with a
                team of experienced doctors, nurses, and paramedics ready to
                provide immediate care. Equipped with state-of-the-art
                facilities, our emergency department handles everything from
                minor injuries to life-threatening conditions with efficiency
                and compassion.`,
    },
    {
      img: service2,
      service: "Comprehensive Cardiology Services",
      details: `Our cardiology department provides a full range of heart care
                services, from preventative screenings and diagnostic tests to
                advanced treatments and surgeries. Our team of specialists is
                dedicated to delivering personalized care, helping patients
                manage heart conditions and lead healthier lives.`,
    },
    {
      img: service3,
      service: "Advanced Oncology Care",
      details: `Our oncology center provides comprehensive cancer care,
                combining advanced technology with a compassionate approach.
                From diagnosis to treatment and recovery, we offer a
                multidisciplinary team of specialists to support patients and
                their families every step of the way.`,
    },
    {
      img: service4,
      service: "Outpatient Surgery",
      details: `Our outpatient surgery center offers a convenient and efficient
                option for a wide range of surgical procedures that do not
                require an overnight stay. With state-of-the-art facilities and
                experienced surgical teams, we ensure a safe and comfortable
                experience, allowing patients to return home the same day.`,
    },
    {
      img: service5,
      service: "Rehabiliation and Physical Therapy",
      details: `Our rehabilitation services are designed to help patients regain
                strength, mobility, and independence after an injury, surgery,
                or illness. Our team of physical therapists, occupational
                therapists, and speech therapists work together to create
                personalized treatment plans tailored to each patient's needs
                and goals.`,
    },
  ];

  return (
    <>
      {data.map((d, index) => {
        return (
          <div className={`carousel-item ${index === 0 ? "active" : ""}`}>
            <div className="d-flex justify-content-center align-items-center gap-4 p-5 my-5 flex-wrap">
              <div className="image">
                <img
                  className="container-fluid carousel-img"
                  src={d.img}
                  alt="Service-1"
                />
              </div>

              <div className="services-text">
                <h5 className="fw-bold">{d.service}</h5>
                <div className="service-details text-secondary-emphasis">
                  {d.details}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ServiceCard;
