import styles from "./reviews.module.css";

const reviews = [
  {
    id: 1,
    img: "resources/img/1.jpg",
    msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi omnis obcaecati sunt amet iste ut laudantium quo reprehenderit!",
    name: "Chanel iman",
  },
  {
    id: 1,
    img: "resources/img/2.jpg",
    msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi omnis obcaecati sunt amet iste ut laudantium quo reprehenderit!",
    name: "adriana lima",
  },
  {
    id: 1,
    img: "resources/img/3.jpg",
    msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi omnis obcaecati sunt amet iste ut laudantium quo reprehenderit!",
    name: "anne hathaway",
  },
  {
    id: 1,
    img: "resources/img/4.jpg",
    msg: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.Nisi omnis obcaecati sunt amet iste ut laudantium quo reprehenderit!",
    name: "emma stone",
  },
];

const Reviews = () => {
  return (
    <section
      className={`${styles.testmonial_section} pt-20 pb-24 px-2`}
      id="testmonial"
    >
      {/* 
        header section
    */}
      <div className="container mx-auto">
        <div className="mb-16">
          <h2 className="section_heading">what people say about us</h2>
          <p className={`${styles.little_descripton} text-center`}>
            Our clients love us!
          </p>
        </div>

        {/* 
            review content
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-24">
          {reviews.map((r) => (
            <div
              key={r.id}
              className="flex lg:flex-row flex-col justify-center items-center"
            >
              <div className={`${styles.client_photo} lg:mr-8 lg:w-[16rem]`}>
                <img src={r.img} alt="" />
              </div>
              <div
                className={`${styles.client_review} flex flex-col lg:items-start items-center `}
              >
                <p className="text-center lg:text-left">&quot;{r.msg}&quot;</p>
                <h3 className="text-white text-3xl font-semibold uppercase">
                  {r.name}
                </h3>
                <span className="text-[#ffdd99] text-xl">CEO of Pinterest</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
