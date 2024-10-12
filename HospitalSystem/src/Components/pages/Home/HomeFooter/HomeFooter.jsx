import {
  faAnglesRight,
  faEnvelope,
  faGlobe,
  faHouse,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import footerBg from "../../../../assets/images/footer-bg.png";

function HomeFooter() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="footer-top py-lg-5 border-bottom">
              <img
                src={footerBg}
                alt="Background Image"
                className="background-img"
              />
              <div className="row g-3">
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="contact-info">
                    <h3>Contact Info</h3>
                    <p>
                      Rapidiously seize wireless strategic theme areas and
                      corporate testing procedures. Uniquely
                    </p>
                    <ul className="lab-ul p-0">
                      <li>
                        <FontAwesomeIcon
                          icon={faHouse}
                          className="me-2 text-primary"
                        />
                        Suite 02 New Elephant Road usa
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faPhone}
                          className="me-2 text-primary"
                        />
                        +880 142 258 123, 02-96936
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          className="me-2 text-primary"
                        />
                        <a href="#" className="text-dark">
                          info@mukti.com
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faGlobe}
                          className="me-2 text-primary"
                        />
                        <a href="#" className="text-dark">
                          info@mukti.com
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="doctor-info mb-5 mb-sm-0">
                    <h3>Our Doctors</h3>
                    <ul className="lab-ul">
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Dr. Nick Sims
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Dr. Michael Linden
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Dr. Max Turner
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Dr. Amy Adams
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Dr. Julia Jameson
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Dr. Michael Linden
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="services-info mb-5 mb-sm-0 ms-0">
                    <h3>Our Services</h3>
                    <ul className="lab-ul">
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Outpatient Surgery
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Cardiac Clinic
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Ophthalmology Clinic
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          Gynaecological Clinic
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          Outpatient Rehabilitation
                        </a>
                      </li>
                      <li>
                        <FontAwesomeIcon
                          icon={faAnglesRight}
                          className="me-2"
                          size="xs"
                        />
                        <a href="#" className="text-dark">
                          {" "}
                          Ophthalmology Clinic
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="col-12 col-sm-6 col-xl-3">
                  <div className="time-info">
                    <h3>opening hours</h3>
                    <div className="dep-item">
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Satarday</div>
                        <div className="day-time">8:00 am-10:00 pm</div>
                      </div>
                    </div>
                    <div className="dep-item">
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Sunday</div>
                        <div className="day-time">6:00 am-8:00 pm</div>
                      </div>
                    </div>
                    <div className="dep-item">
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Monday</div>
                        <div className="day-time">6:00 am-2:00 pm</div>
                      </div>
                    </div>
                    <div className="dep-item">
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Tuesday</div>
                        <div className="day-time">7:00 am-9:00 pm</div>
                      </div>
                    </div>
                    <div className="dep-item">
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Widnessday</div>
                        <div className="day-time">10:00 am-12:00 pm</div>
                      </div>
                    </div>
                    <div className="dep-item">
                      <div className="dep-item-inner d-flex justify-content-between">
                        <div className="day-name">Thirsday</div>
                        <div className="day-time">2:00 am-6:00 pm</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p className="text-capitalize text-center">
                Copyright © 2021
                <a className=" ms-1 text-primary fw-bold" href="home.html">
                  Mukti
                </a>
                . Designed by
                <a href="" className="ms-1 text-dark fw-bold">
                  LabArtisan
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
