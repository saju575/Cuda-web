import Contact from "../components/contact/Contact";
import Header from "../components/header/Header";
import Reviews from "../components/reviews/Reviews";
import Services from "../components/services/Services";

const Home = () => {
  return (
    <>
      <Header />
      <Services />
      <Reviews />
      <Contact />
    </>
  );
};

export default Home;
