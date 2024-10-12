import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import doctor1 from "../../../../assets/images/doctor1.jpg";
import doctor2 from "../../../../assets/images/doctor2.jpg";
import doctor3 from "../../../../assets/images/doctor3.jpg";
import doctor4 from "../../../../assets/images/doctor4.jpg";

function Doctors() {
  return (
    <section className="doctors padding-tb">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="doctors-header text-center mb-5">
              <h2 className="fw-light">Meet Our</h2>
              <h2 className="fw-bolder">Mukti Professional Doctors</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="doctor-item">
                  <div className="doctor-img overflow-hidden">
                    <img src={doctor1} alt="doctor" className="w-100" />
                  </div>
                  <div className="doctor-content">
                    <div className="doctor-name p-3 text-white">
                      <h4 className="text-white">Dr. Jason Kovalsky</h4>
                      <p className="digi">Cardiologist</p>
                    </div>
                    <ul className="doctor-contact p-3 position-relative">
                      <li>
                        <span className="text-dark">Phone :</span> 658 222 127
                        964
                      </li>
                      <li>
                        <span className="text-dark">Email :</span>{" "}
                        admin@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="doctor-item">
                  <div className="doctor-img overflow-hidden">
                    <img src={doctor2} alt="doctor" className="w-100" />
                  </div>
                  <div className="doctor-content">
                    <div className="doctor-name p-3 text-white">
                      <h4 className="text-white">Dr. Jason Kovalsky</h4>
                      <p className="digi">Cardiologist</p>
                    </div>
                    <ul className="doctor-contact p-3 position-relative">
                      <li>
                        <span className="text-dark">Phone :</span> 658 222 127
                        964
                      </li>
                      <li>
                        <span className="text-dark">Email :</span>{" "}
                        admin@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="doctor-item">
                  <div className="doctor-img overflow-hidden">
                    <img src={doctor3} alt="doctor" className="w-100" />
                  </div>
                  <div className="doctor-content">
                    <div className="doctor-name p-3 text-white">
                      <h4 className="text-white">Dr. Jason Kovalsky</h4>
                      <p className="digi">Cardiologist</p>
                    </div>
                    <ul className="doctor-contact p-3 position-relative">
                      <li>
                        <span className="text-dark">Phone :</span> 658 222 127
                        964
                      </li>
                      <li>
                        <span className="text-dark">Email :</span>{" "}
                        admin@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-4 col-md-6 col-12">
                <div className="doctor-item">
                  <div className="doctor-img overflow-hidden">
                    <img src={doctor4} alt="doctor" className="w-100" />
                  </div>
                  <div className="doctor-content">
                    <div className="doctor-name p-3 text-white">
                      <h4 className="text-white">Dr. Jason Kovalsky</h4>
                      <p className="digi">Cardiologist</p>
                    </div>
                    <ul className="doctor-contact p-3 position-relative">
                      <li>
                        <span className="text-dark">Phone :</span> 658 222 127
                        964
                      </li>
                      <li>
                        <span className="text-dark">Email :</span>{" "}
                        admin@gmail.com
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="doctors-btn text-center">
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
