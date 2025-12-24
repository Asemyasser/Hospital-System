import departmentMain from "../../../../assets/images/department-main.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "./Department.module.css"; // Importing CSS module
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Department() {
  const { data, loading, error } = useFetch(`/api/departments`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section className={`${styles.departments} padding-tb pb-0`}>
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
                    {data?.map((department, index) => (
                      <li key={index}>
                        <Link to="/doctors">
                          <img
                            src={`${import.meta.env.VITE_API_URL}/${
                              department.img
                            }`}
                            alt="department"
                          />
                        </Link>
                      </li>
                    ))}
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
                          <h3>{data[0].header}</h3>
                          <p className="mb-2">{data[0].desc}</p>
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
                            href="#appointment"
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
