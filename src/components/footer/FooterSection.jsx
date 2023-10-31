import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa6";
import { HashLink } from "react-router-hash-link";
import styles from "./footer.module.css";
function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* 
              description
            */}

          <div className={`flex flex-col gap-10`}>
            <span>
              <img
                src="/resources/img/logo.png"
                alt="cuda"
                className={`${styles.logo}`}
              />
            </span>
            <p className="text-2xl text-[#ff9]">
              We have a dedicated team of professionals to build awesome
              websites and mobile apps.
            </p>
          </div>

          {/* 
            policy link
          */}

          <div className={`${styles.footer_col} text-2xl text-white`}>
            <h3>Company</h3>
            <ul>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">treams & condition</a>
              </li>
              <li>
                <a href="#">lates blog</a>
              </li>
            </ul>
          </div>

          {/* 
            quick links for each sections
          */}
          <div className={`${styles.footer_col} text-2xl`}>
            <h3>Quick links</h3>
            <ul>
              <li>
                <HashLink smooth to="/#home">
                  home
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#about">
                  about
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#service">
                  service
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#team">
                  team
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#portfolio">
                  portfolio
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#testmonial">
                  testimonial
                </HashLink>
              </li>
              <li>
                <HashLink smooth to="/#faq">
                  faq
                </HashLink>
              </li>

              <li>
                <HashLink smooth to="/#contant">
                  contact
                </HashLink>
              </li>
            </ul>
          </div>

          {/* 
            social links
          */}
          <div className={`${styles.footer_col} text-2xl`}>
            <h3>Social page</h3>
            <ul>
              <li className="flex items-center gap-5 text-white">
                <FaFacebook />
                <a href="#">facebook</a>
              </li>
              <li className="flex items-center gap-5 text-white">
                <FaTwitter />
                <a href="#">twitter</a>
              </li>
              <li className="flex items-center gap-5 text-white">
                <FaInstagram />
                <a href="#">instagram</a>
              </li>
              <li className="flex items-center gap-5 text-white">
                <FaLinkedinIn />
                <a href="#">linkedin</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <p className={`${styles.copyright_text}`}>
              Copy write &copy;2023 @ Cuda
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
