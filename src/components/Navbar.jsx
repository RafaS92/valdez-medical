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
            <img src="/images/logo.png" alt="" className="logo" />
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
                {translate("hi")}
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#services"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                SERVICES
              </a>
            </li>
            <li className="nav-item">
              <a href="#team" className="nav-links" onClick={closeMobileMenue}>
                TEAM
              </a>
            </li>
            <li className="nav-item">
              <a
                href="#subscribe"
                className="nav-links"
                onClick={closeMobileMenue}
              >
                SUBSCRIBE
              </a>
            </li>

            <div className="last-section-navbar">
              <li className="nav-item">
                <a
                  href="#passion"
                  className="nav-links"
                  onClick={closeMobileMenue}
                >
                  ABOUT
                </a>
              </li>

              <li className="nav-item">
                <a
                  href="#subscribe"
                  className="nav-links"
                  onClick={closeMobileMenue}
                >
                  ACCOUNT
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
