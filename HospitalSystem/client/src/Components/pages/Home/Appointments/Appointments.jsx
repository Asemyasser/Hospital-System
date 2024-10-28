import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appointmentLeft from "../../../../assets/images/appointment-left.jpg";
import appointmentright from "../../../../assets/images/appointment-right.jpg";

import styles from "../Home.module.css";

function Appointments() {
  return (
    <section className={styles.appointment}>
      <div className="container-fluid p-0">
        <div className="row">
          <div className="col-md-6 col-12 p-0">
            <div className={styles["appointment-left"]}>
              <img
                src={appointmentLeft}
                alt="Background Image"
                className={styles["background-img"]}
              />
              <div className={styles["time-info"]}>
                <div className={`${styles["al-title"]} mb-4`}>
                  <h2 className="">
                    <span>24 Hours </span>
                  </h2>
                  <h2>Opening Our Services</h2>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Satarday</div>
                  <div className={styles["day-time"]}>8:00 am-10:00 pm</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Sunday</div>
                  <div className={styles["day-time"]}>6:00 am-8:00 pm</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Monday</div>
                  <div className={styles["day-time"]}>6:00 am-2:00 pm</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Tuesday</div>
                  <div className={styles["day-time"]}>7:00 am-9:00 pm</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Widnessday</div>
                  <div className={styles["day-time"]}>10:00 am-12:00 pm</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Thirsday</div>
                  <div className={styles["day-time"]}>2:00 am-6:00 pm</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Friday</div>
                  <div className={styles["day-time"]}>Closed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0">
            <div className={styles["appointment-right"]}>
              <img
                src={appointmentright}
                alt="Background Image"
                className={styles["background-img"]}
              />
              <div className={`${styles["ar-title"]} mb-4`}>
                <h2>
                  <span>Make An</span>
                </h2>
                <h2>Appointment Now</h2>
              </div>
              <form action="/">
                <input
                  type="text"
                  id="fname"
                  name="firstName"
                  placeholder="Your Name"
                />
                <select
                  id="country"
                  name="country"
                  className="w-100"
                  title="country"
                >
                  <option value="1">Select Departments</option>
                  <option value="2">Dental</option>
                  <option value="3">U.C</option>
                </select>
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  placeholder="Phone Number"
                />
                <input
                  placeholder="Email Address"
                  type="date"
                  id="start"
                  name="trip-start"
                  value="2021-02-21"
                />
                <button
                  className={`${styles["lab-btn"]} bg-white`}
                  type="submit"
                >
                  <span>
                    Appointment Now{" "}
                    <FontAwesomeIcon icon={faAnglesRight} size="xs" />
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Appointments;
