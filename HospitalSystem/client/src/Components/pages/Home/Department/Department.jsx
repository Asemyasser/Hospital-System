import department1 from "../../../../assets/images/department1.png";
import department3 from "../../../../assets/images/department3.png";
import department4 from "../../../../assets/images/department4.png";
import department5 from "../../../../assets/images/department5.png";
import department6 from "../../../../assets/images/department6.png";
import department7 from "../../../../assets/images/department7.png";
import department8 from "../../../../assets/images/department8.png";
import department9 from "../../../../assets/images/department9.png";
import departmentMain from "../../../../assets/images/department-main.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "../Home.module.css"; // Importing CSS module

function Department() {
  return (
    <section className={`${styles.departments} ${styles["padding-tb"]} pb-0`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles["feature-header"]} text-center mb-5`}>
              <h2 className="fw-light">We Are The</h2>
              <h2 className="fw-bolder">Best Our Departments Centers</h2>
            </div>
            <div className={styles["departments-content"]}>
              <div className="row">
                <div className="col-12">
                  <ul
                    className={`${styles["department-imgs"]} mb-2 d-flex justify-content-center flex-wrap`}
                  >
                    <li>
                      <a href="">
                        <img src={department1} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department7} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department3} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department4} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department5} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department6} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department7} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department8} alt="department" />
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <img src={department9} alt="department" />
                      </a>
                    </li>
                  </ul>
                  <div className={styles["department-main"]}>
                    <div className="row flex-row-reverse align-items-center">
                      <div className="col-12 col-lg-6">
                        <div className={`${styles["post-img"]} h-100 w-100`}>
                          <img
                            src={departmentMain}
                            className="w-100"
                            alt="department"
                          />
                        </div>
                      </div>
                      <div className="col-12 col-lg-6">
                        <div className={styles["post-content"]}>
                          <h3>Speciality Rhinology 1</h3>
                          <p className="mb-2">
                            Procedur arrain manu producs rather convenet cuvate
                            mantna this man Manucur produc rather conven cuvatie
                            mantan this conven cuvate bad Credibly envisioneer
                            ubiquitous niche markets transparent relations
                            Dramatically enable worldwide action items whereas
                            magnetic source motin was procedur arramin
                          </p>
                          <ul className="d-flex flex-wrap p-0">
                            <li className="w-50 py-1">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="me-2 text-primary"
                              />
                              Qualified Doctors
                            </li>
                            <li className="w-50 py-1">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="me-2 text-primary"
                              />
                              Feel like Home Services
                            </li>
                            <li className="w-50 py-1">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="me-2 text-primary"
                              />
                              24x7 Emergency Services
                            </li>
                            <li className="w-50 py-1">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="me-2 text-primary"
                              />
                              Outdoor Checkup
                            </li>
                            <li className="w-50 py-1">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="me-2 text-primary"
                              />
                              General Medical
                            </li>
                            <li className="w-50 py-1">
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="me-2 text-primary"
                              />
                              Easy and Affordable Billing
                            </li>
                          </ul>
                          <a
                            href=""
                            className="btn btn-primary rounded-0 mt-3 px-3 py-2"
                          >
                            Appoinment Now{" "}
                            <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Department;
