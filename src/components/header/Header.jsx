import styles from "./header.module.css";

const Header = () => {
  return (
    // <!-- START HEADER SECTION -->
    <header id="header" className={`${styles.header}`}>
      <div className="container mx-auto">
        <div className={`${styles.hero_text_box}`}>
          <h1 className={`${styles.hero_text} font-semibold`}>
            Hi there! We are the new kids on the block and we build awesome
            websites and mobile apps.
          </h1>
          <a href="#contact" className={`btn ${styles.btn_hero}`}>
            work with us!
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
