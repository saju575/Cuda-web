import styles from "./services.module.css";

/* 
  dummy data for sevices
*/
const services = [
  {
    id: 1,
    title: "Branding",
    img: "resources/img/flag.png",
    desc: "Elevate your brand identity with captivating logos and messaging that leave a lasting impression on your audience.",
  },
  {
    id: 2,
    title: "development",
    img: "resources/img/gears.png",
    desc: "We craft robust and responsive websites and mobile apps tailored to your unique business needs.",
  },
  {
    id: 3,
    title: "design",
    img: "resources/img/crayon.png",
    desc: "Our creative team designs visually stunning interfaces, ensuring a seamless user experience and exceptional aesthetics.",
  },
  {
    id: 4,
    title: "rocket science",
    img: "resources/img/rocket.png",
    desc: "Explore cutting-edge solutions and innovation that propel your digital projects into the future of technology.",
  },
];

const Services = () => {
  return (
    //   <!-- START SERVICE SECTION -->
    <section
      className={`${styles.service_section} pt-20 pb-24 px-2`}
      id="service"
    >
      <div className="container mx-auto">
        {/* 
            section heading
        */}
        <div className="mb-16">
          <h2 className="section_heading">service we provide</h2>
          <p className={`${styles.little_descripton}`}>
            We are working with both individuals and businesses from all over
            the globe to create awesome website and apptications.
          </p>
        </div>

        {/* 
            section contens
        */}
        <div className="row grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-20">
          {services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-start items-center"
            >
              <img
                src={service.img}
                alt={service.title}
                className={`${styles.service_icon}`}
              />
              <h3 className="text-white text-3xl font-semibold uppercase">
                {service.title}
              </h3>
              <p className="text-[#f2e7f4] text-2xl mt-4">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
