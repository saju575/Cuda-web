import styles from "./about.module.css";

const About = () => {
  return (
    <section className={`${styles.about_section} pt-20 pb-24 px-2`} id="about">
      <div className="container mx-auto">
        {/* 
          section header
        */}
        <div className="mb-14">
          <h2 className="section_heading text">About Us</h2>
          <p className={`${styles.little_descripton}`}>Know about us.</p>
        </div>

        {/* 
          content
        */}
        <div className=" flex flex-col md:flex-row items-center justify-between px-4 gap-10">
          {/* 
            left
          */}
          <div className="md:w-1/2">
            <img
              src="https://small-bizsense.com/wp-content/uploads/2019/02/video-animation-company.jpg"
              alt="Company Logo"
              className={`${styles.zoom_effect} rounded-lg shadow-lg`}
            />
          </div>

          {/* 
            right
          */}
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
              About Cuda
            </h2>
            <p className="text-gray-600 text-2xl leading-relaxed">
              We are Cuda, a passionate team of developers and designers
              dedicated to crafting awesome websites and mobile apps. With our
              expertise, we turn ideas into interactive digital experiences that
              delight our clients and their users.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
