import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styles from "../Home.module.css";

import heroBg from "../../../../assets/images/home-bg.jpg";

function Hero() {
  return (
    <section className={styles.hero}>
      <img
        src={heroBg}
        alt="Background Image"
        className={styles["background-img"]}
      />
      <div className={"container"}>
        <div className="row">
          <div className="col-12">
            <div
              className={`${styles["hero-content"]} text-center text-md-start`}
            >
              <h2 className="">Best Medical Clinic</h2>
              <h1>
                <b className="text-primary">Bringing Health</b> To Life For The
                Whole Family...
              </h1>
              <a href="" className="btn btn-primary rounded-0 mt-3 px-3 py-2">
                Get Appoinments{" "}
                <FontAwesomeIcon icon={faAnglesRight} size="xs" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
