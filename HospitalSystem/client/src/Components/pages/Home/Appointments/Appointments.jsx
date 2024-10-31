import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appointmentLeft from "../../../../assets/images/appointment-left.jpg";
import appointmentright from "../../../../assets/images/appointment-right.jpg";

import styles from "../Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";

function Appointments() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/workingHours"
        );
        console.log(response.data[0]);
        setData(response.data[0]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return (
    <section id="appointment" className={styles.appointment}>
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
                  <div className={styles["day-name"]}>Saturday</div>
                  <div className={styles["day-time"]}>{data.days.saturday}</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Sunday</div>
                  <div className={styles["day-time"]}>{data.days.sunday}</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Monday</div>
                  <div className={styles["day-time"]}>{data.days.monday}</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Tuesday</div>
                  <div className={styles["day-time"]}>{data.days.tuesday}</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Wednesday</div>
                  <div className={styles["day-time"]}>
                    {data.days.wednesday}
                  </div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Thursday</div>
                  <div className={styles["day-time"]}>{data.days.thursday}</div>
                </div>
                <div
                  className={`${styles["dep-item"]} d-flex justify-content-between flex-wrap`}
                >
                  <div className={styles["day-name"]}>Friday</div>
                  <div className={styles["day-time"]}>{data.days.friday}</div>
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
              <form action="" method="post">
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
