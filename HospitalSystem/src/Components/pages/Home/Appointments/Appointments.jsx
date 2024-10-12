import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import appointmentLeft from "../../../../assets/images/appointment-left.jpg";
import appointmentright from "../../../../assets/images/appointment-right.jpg";

function Appointments() {
  return (
    <section className="appointment">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-12 p-0">
            <div className="appointment-left">
              <img
                src={appointmentLeft}
                alt="Background Image"
                className="background-img"
              />
              <div className="time-info">
                <div className="al-title mb-4">
                  <h2 className="">
                    <span>24 Hours </span>
                  </h2>
                  <h2>Opening Our Services</h2>
                </div>
                <div className="dep-item d-flex justify-content-between flex-wrap">
                  <div className="day-name">Satarday</div>
                  <div className="day-time">8:00 am-10:00 pm</div>
                </div>
                <div className="dep-item d-flex justify-content-between flex-wrap">
                  <div className="day-name">Sunday</div>
                  <div className="day-time">6:00 am-8:00 pm</div>
                </div>
                <div className="dep-item d-flex justify-content-between flex-wrap">
                  <div className="day-name">Monday</div>
                  <div className="day-time">6:00 am-2:00 pm</div>
                </div>
                <div className="dep-item d-flex justify-content-between flex-wrap">
                  <div className="day-name">Tuesday</div>
                  <div className="day-time">7:00 am-9:00 pm</div>
                </div>
                <div className="dep-item d-flex justify-content-between flex-wrap">
                  <div className="day-name">Widnessday</div>
                  <div className="day-time">10:00 am-12:00 pm</div>
                </div>
                <div className="dep-item d-flex justify-content-between flex-wrap">
                  <div className="day-name">Thirsday</div>
                  <div className="day-time">2:00 am-6:00 pm</div>
                </div>
                <div className="dep-item d-flex justify-content-between flex-wrap">
                  <div className="day-name">Friday</div>
                  <div className="day-time">Closed</div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12 p-0">
            <div className="appointment-right">
              <img
                src={appointmentright}
                alt="Background Image"
                className="background-img"
              />
              <div className="ar-title mb-4">
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
                <button className="lab-btn bg-white" type="submit">
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
