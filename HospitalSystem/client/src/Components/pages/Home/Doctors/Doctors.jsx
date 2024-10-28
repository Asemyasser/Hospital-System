import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doctor1 from "../../../../assets/images/doctor1.jpg";
import doctor2 from "../../../../assets/images/doctor2.jpg";
import doctor3 from "../../../../assets/images/doctor3.jpg";
import doctor4 from "../../../../assets/images/doctor4.jpg";
import styles from "../Home.module.css";

function Doctors() {
  const doctors = [
    {
      name: "Dr. Jason Kovalsky",
      title: "Cardiologist",
      phone: "658 222 127",
      email: "admin@gmail.com",
      img: doctor1,
    },
    {
      name: "Patricia Mcneel",
      title: "Pediatrist",
      phone: "658 222 127",
      email: "admin@gmail.com",
      img: doctor2,
    },
    {
      name: "William Khanna",
      title: "Throat Specialist",
      phone: "658 222 127",
      email: "admin@gmail.com",
      img: doctor3,
    },
    {
      name: "Eric Patterson",
      title: "Therapy",
      phone: "658 222 127",
      email: "admin@gmail.com",
      img: doctor4,
    },
  ];

  return (
    <section className={styles.doctors + " " + styles["padding-tb"]}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={styles["doctors-header"] + " text-center mb-5"}>
              <h2 className="fw-light">Meet Our</h2>
              <h2 className="fw-bolder">Mukti Professional Doctors</h2>
            </div>
            <div className="row justify-content-center">
              {doctors.map((doctor, index) => (
                <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-12">
                  <div className={styles["doctor-item"]}>
                    <div className={styles["doctor-img"] + " overflow-hidden"}>
                      <img src={doctor.img} alt="doctor" className="w-100" />
                    </div>
                    <div className={styles["doctor-content"]}>
                      <div
                        className={`${styles["doctor-name"]} ${
                          styles[`cl-${index + 1}`]
                        } p-3 text-white`}
                      >
                        <h4 className="text-white">{doctor.name}</h4>
                        <p className="digi">{doctor.title}</p>
                      </div>
                      <ul
                        className={
                          styles["doctor-contact"] + " p-3 position-relative"
                        }
                      >
                        <li>
                          <span className="text-dark">Phone :</span>{" "}
                          {doctor.phone}
                        </li>
                        <li>
                          <span className="text-dark">Email :</span>{" "}
                          {doctor.email}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={styles["doctors-btn"] + " text-center"}>
              <a
                href="./doctors.html"
                className="btn btn-primary rounded-0 mt-3 px-4 py-2"
              >
                View All Doctors{" "}
                <FontAwesomeIcon icon={faAnglesRight} size="xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Doctors;
