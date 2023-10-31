import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Faq from "../components/faq/Faq";
import Footer from "../components/footer/FooterSection";

import Header from "../components/header/Header";
import Portfolio from "../components/portfolio/Portfolio";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";
import Team from "../components/team/Team";

const Home = () => {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Team />
      <Portfolio />
      <Reviews />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
