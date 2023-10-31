import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { useLocation } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  const location = useLocation();

  /* 
    handle mobile menu opening
  */
  const handleOverlayClick = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <nav className={`${styles.nav_bg} py-3 ${styles.nav} px-2`}>
      <div className="container flex justify-between mx-auto items-center">
        <HashLink to={"/#header"}>
          <img
            src="/resources/img/logo.png"
            alt="cuda"
            className={`${styles.logo}`}
          />
        </HashLink>

        {/* 
          Main navigation menu
        */}
        <ul className={`${styles.main_nav} lg:block hidden`}>
          <li>
            <HashLink
              smooth
              className={`${
                location.pathname === "/" &&
                (location.hash === "#header" || location.hash === "") &&
                styles.active_btn
              }`}
              to="/#header"
            >
              home
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              className={`${
                location.pathname === "/" &&
                location.hash === "#about" &&
                styles.active_btn
              }`}
              to="/#about"
            >
              about
            </HashLink>
          </li>
          <li>
            <HashLink
              className={`${
                location.pathname === "/" &&
                location.hash === "#service" &&
                styles.active_btn
              }`}
              smooth
              to="/#service"
            >
              service
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#team"
              className={`${
                location.pathname === "/" &&
                location.hash === "#team" &&
                styles.active_btn
              }`}
            >
              team
            </HashLink>
          </li>

          <li>
            <HashLink
              to="/#portfolio"
              className={`${
                location.pathname === "/" &&
                location.hash === "#portfolio" &&
                styles.active_btn
              }`}
            >
              portfolio
            </HashLink>
          </li>
          <li>
            <HashLink
              smooth
              to="/#testmonial"
              className={`${
                location.pathname === "/" &&
                location.hash === "#testmonial" &&
                styles.active_btn
              }`}
            >
              testmonial
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#faq"
              className={`${
                location.pathname === "/" &&
                location.hash === "#faq" &&
                styles.active_btn
              }`}
            >
              faq
            </HashLink>
          </li>

          <li>
            <HashLink
              smooth
              to="/#contact"
              className={`${
                location.pathname === "/" &&
                location.hash === "#contact" &&
                styles.active_btn
              }`}
            >
              contact
            </HashLink>
          </li>
        </ul>

        {/* 
        Mobile menu. Only render on small screens
      */}

        <div
          className={`${styles.mobile_menu}
        lg:hidden block`}
        >
          <span className={`text-white cursor-pointer`}>
            <FaBars onClick={handleOverlayClick} />
          </span>
          <div
            id="mynav"
            className={`${styles.overlay} ${
              isOverlayOpen && `${styles.overlay_block}`
            }`}
          >
            <span
              className={`${styles.close_btn} cursor-pointer`}
              onClick={handleOverlayClick}
            >
              &times;
            </span>
            <div className={`${styles.overlay_content}`}>
              <HashLink to="/#header" onClick={handleOverlayClick}>
                home
              </HashLink>
              <HashLink to="/#about" onClick={handleOverlayClick}>
                about
              </HashLink>
              <HashLink to="/#service" onClick={handleOverlayClick}>
                service
              </HashLink>
              <HashLink to="/#team" onClick={handleOverlayClick}>
                team
              </HashLink>

              <HashLink to="/#portfolio" onClick={handleOverlayClick}>
                portfolio
              </HashLink>
              <HashLink to="/#testmonial" onClick={handleOverlayClick}>
                testmonial
              </HashLink>
              <HashLink to="/#faq" onClick={handleOverlayClick}>
                faq
              </HashLink>
              <HashLink to="/#contact" onClick={handleOverlayClick}>
                contact
              </HashLink>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
