import React, { useState, useEffect } from "react";
import translate from "../i18n/translate";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenue = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <a href="#home" className="navbar-logo" onClick={closeMobileMenue}>
            <img
              src="https://i.pinimg.com/originals/68/66/95/68669512018f0863f9674db42c64630c.jpg"
              alt=""
              className="logo"
            />
            <p>Valdez Medical</p>
          </a>
          <div className="menu-icon" onClick={handleClick}>
            <i className="fas fa-bars" />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <a
                href="#passion"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                {translate("home")}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="/services"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                {translate("services")}
              </a>
            </li>

            <li className="nav-item">
              <a
                href="#subscribe"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                {translate("subscribe")}
              </a>
            </li>

            <div className="last-section-navbar">
              <li className="nav-item">
                <a
                  href="#passion"
                  className="nav-links"
                  onClick={closeMobileMenue}
                >
                  {translate("about")}
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#subscribe"
                  className="nav-links"
                  onClick={closeMobileMenue}
                >
                  {translate("contact")}
                </a>
              </li>
            </div>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
