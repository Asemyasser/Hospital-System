import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./Hero.module.css";
import useFetch from "../hooks/useFetch";

function Hero() {
  const { data, loading, error } = useFetch(`/api/hero`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <section className={styles.hero}>
      <img
        src={`${import.meta.env.VITE_API_URL}/${data[0].heroCover}`}
        alt="Background Image"
        className="background-img"
      />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div
              className={`${styles["hero-content"]} text-center text-md-start`}
            >
              <h2 className="">{data[0].header}</h2>
              <h1>
                <b className="text-primary">{data[0].coloredDesc}</b>{" "}
                {data[0].desc}
              </h1>
              <a
                href="#appointment"
                className="btn btn-primary rounded-0 mt-3 px-3 py-2"
              >
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
