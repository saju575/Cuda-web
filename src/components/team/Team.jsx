import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./team.module.css";

/* 
  dumm data
*/
const members = [
  {
    id: 1,
    img: "resources/img/1.jpg",
    desc: "Visionary leader steering Cuda towards success, overseeing operations, and setting the strategic course for our digital innovation journey.",
    role: "CEO",
    name: "ANNE HATHAWAY",
  },
  {
    id: 2,
    img: "resources/img/2.jpg",
    desc: "A tech-savvy innovator fusing technology with creativity to build groundbreaking solutions and explore uncharted digital realms.",
    role: "Creative Engineer",
    name: "kate upton",
  },
  {
    id: 3,
    img: "resources/img/3.jpg",
    desc: "Master of aesthetics, sculpting digital experiences with an artistic touch, ensuring your projects stand out with captivating visuals.",
    role: "lead designer",
    name: "olivia wilde",
  },
  {
    id: 4,
    img: "resources/img/4.jpg",
    desc: "Architect of digital landscapes, our lead developer crafts robust, user-friendly websites and mobile apps with precision and expertise",
    role: "lead developer",
    name: "ashley greene",
  },
  {
    id: 5,
    img: "resources/img/4.jpg",
    desc: "Driving online visibility, our SEO/Marketing expert employs strategies to enhance your digital presence, connecting you with your audience effectively",
    role: "SEO/Marketing Specialist",
    name: "ashley greene",
  },
];

const Team = () => {
  return (
    <section className={`${styles.team_section} pt-20 pb-24 px-2`} id="team">
      <div className="container mx-auto">
        {/* 
          section header
        */}
        <div className="mb-14">
          <h2 className="section_heading text">meet our beautiful team</h2>
          <p className={`${styles.little_descripton}`}>
            We are a small team of designers and developers who help brands with
            big ideas.
          </p>
        </div>

        {/* 
          swiper slider
        */}
        <div>
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 2000, // 2 seconds per slide
              disableOnInteraction: true,
            }}
            loop={true} // Enable the loop
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {/* 
            content 
          */}
            {members.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="w-[90%] mx-auto md:w-96   p-4 rounded-lg shadow-lg bg-white hover:shadow-xl transition duration-300 transform hover:-translate-y-2">
                  <div className="relative rounded-full overflow-hidden w-36 h-36 md:w-48 md:h-48 lg:w-64 lg:h-64 mx-auto">
                    <img
                      src={member.img}
                      alt="Profile"
                      className="object-cover w-full h-full rounded-full"
                    />
                  </div>
                  <div className="text-center mt-4 h-60">
                    <h3 className="text-3xl font-semibold uppercase  md:text-3xl lg:text-4xl">
                      {member.name}
                    </h3>
                    <p className="text-gray-500 text-xl md:text-2xl lg:text-3xl capitalize">
                      {member.role}
                    </p>
                    <p className="text-gray-700 mt-2 text-xl">{member.desc}</p>
                  </div>
                  <div className="flex justify-center mt-4 gap-4">
                    <a
                      href="#"
                      className={`${styles.social_icon}`}
                      title="Twitter"
                    >
                      <i className="cursor-pointer">
                        <FaTwitter className="text-3xl cursor-pointer" />
                      </i>
                    </a>
                    <a
                      href="#"
                      className={`${styles.social_icon}`}
                      title="LinkedIn"
                    >
                      <i className="cursor-pointer">
                        <FaLinkedin className="text-3xl " />
                      </i>
                    </a>
                    <a
                      href="#"
                      className={`${styles.social_icon}`}
                      title="Facebook"
                    >
                      <i className="cursor-pointer">
                        <FaFacebook className={`text-3xl  `} />
                      </i>
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Team;
