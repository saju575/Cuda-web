import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { Link } from "react-router-dom";
import styles from "./navbar.module.css";

const Navbar = () => {
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  /* 
    handle mobile menu opening
  */
  const handleOverlayClick = () => {
    setIsOverlayOpen(!isOverlayOpen);
  };

  return (
    <nav className={`${styles.nav_bg} py-3 ${styles.nav} px-2`}>
      <div className="container flex justify-between mx-auto items-center">
        <Link to={"/"}>
          <img
            src="/resources/img/logo.png"
            alt="cuda"
            className={`${styles.logo}`}
          />
        </Link>

        {/* 
          Main navigation menu
        */}
        <ul className={`${styles.main_nav} lg:block hidden`}>
          <li>
            <Link className={`${styles.active_btn}`} to="/#header">
              home
            </Link>
          </li>
          <li>
            <Link to="/#service">service</Link>
          </li>
          <li>
            <Link to="/#team">team</Link>
          </li>
          <li>
            <Link to="/#skill">skill</Link>
          </li>
          <li>
            <Link to="/#portfolio">portfolio</Link>
          </li>
          <li>
            <Link to="/#testmonial">testmonial</Link>
          </li>
          <li>
            <Link to="/#contact">contact</Link>
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
              <Link to="/#header" onClick={handleOverlayClick}>
                home
              </Link>
              <Link to="/#service" onClick={handleOverlayClick}>
                service
              </Link>
              <Link to="/#team" onClick={handleOverlayClick}>
                team
              </Link>
              <Link to="/#skill" onClick={handleOverlayClick}>
                skill
              </Link>
              <Link to="/#portfolio" onClick={handleOverlayClick}>
                portfolio
              </Link>
              <Link to="/#testmonial" onClick={handleOverlayClick}>
                testmonial
              </Link>
              <Link to="/#contact" onClick={handleOverlayClick}>
                contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
