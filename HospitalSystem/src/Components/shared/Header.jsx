import { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import icon1 from "../../assets/images/nav-icon1.png";
import icon2 from "../../assets/images/nav-icon2.png";
import icon3 from "../../assets/images/nav-icon3.png";

function Header() {
  const [sidebarActive, setSidebarActive] = useState(false);
  const [isSticky, setIsSticky] = useState(true);

  useEffect(() => {
    const screenWidth = window.matchMedia("(min-width: 992px)");

    const handleScreenResize = () => {
      if (screenWidth.matches) {
        setIsSticky(false);
      } else {
        setIsSticky(true);
      }
    };

    handleScreenResize(); // Call on initial render

    // Add event listener for screen width changes
    screenWidth.addEventListener("change", handleScreenResize);

    // Cleanup function to remove event listener
    return () => {
      screenWidth.removeEventListener("change", handleScreenResize);
    };
  }, []);

  return (
    <>
      {/* Mobile Navbar */}
      <nav
        className={`navbar bg-white py-3 px-5 mobile ${
          isSticky ? "sticky-top" : ""
        }`}
      >
        <div className="container">
          <a href="./home.html">
            <img className="logo" src={logo} alt="Logo" />
          </a>

          <div className="contact-nav-info d-none d-lg-flex gap-4">
            <div className="d-flex gap-3 align-items-center">
              <img src={icon1} alt="Phone Icon" />
              <div>
                <p className="m-0 text-dark">Number:</p>
                <p className="m-0 text-dark fw-bold">+880123456789</p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <img src={icon2} alt="Email Icon" />
              <div>
                <p className="m-0 text-dark">Email:</p>
                <p className="m-0 text-dark fw-bold">Mukti@gmail.com</p>
              </div>
            </div>
            <div className="d-flex gap-3 align-items-center">
              <img src={icon3} alt="Address Icon" />
              <div>
                <p className="m-0 text-dark">Address:</p>
                <p className="m-0 text-dark fw-bold">
                  12 North West New York 100
                </p>
              </div>
            </div>
          </div>

          <button
            className="navbar-toggler d-lg-none"
            type="button"
            onClick={() => setSidebarActive(!sidebarActive)}
            title="Toggle Sidebar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        id="sidebar"
        className={`sidebar d-lg-none ${sidebarActive ? "active" : ""}`}
      >
        <ul className="list-unstyled">
          <li>
            <a href="./home.html" className="link-light">
              Home
            </a>
          </li>
          <li>
            <a href="./department.html" className="link-light">
              Departments
            </a>
          </li>
          <li>
            <a href="./doctors.html" className="link-light">
              Doctors
            </a>
          </li>
          <li>
            <a href="./services.html" className="link-light">
              Services
            </a>
          </li>
          <li>
            <a href="./blog.html" className="link-light">
              Blog
            </a>
          </li>
          <li>
            <a href="./about-us.html" className="link-light">
              About Us
            </a>
          </li>
          <li>
            <a href="./contactUs.html" className="link-light">
              Contact Us
            </a>
          </li>
        </ul>
      </div>

      {/* Desktop Navbar */}
      <nav className="bg-nav-color bg-color py-4 px-5 d-none d-lg-flex sticky-top">
        <div className="container">
          <ul className="text-white list-unstyled d-flex gap-5 fw-bold m-0">
            <li>
              <a href="./home.html" className="link-light">
                Home
              </a>
            </li>
            <li>
              <a href="./department.html" className="link-light">
                Departments
              </a>
            </li>
            <li>
              <a href="./doctors.html" className="link-light">
                Doctors
              </a>
            </li>
            <li>
              <a href="./services.html" className="link-light">
                Services
              </a>
            </li>
            <li>
              <a href="./blog.html" className="link-light">
                Blog
              </a>
            </li>
            <li>
              <a href="./about-us.html" className="link-light">
                About Us
              </a>
            </li>
            <li>
              <a href="./contactUs.html" className="link-light">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Header;
