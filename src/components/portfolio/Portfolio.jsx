import { useState } from "react";
import Card from "./Card";
import styles from "./portfolio.module.css";

/* 
    dummy data
*/
const protfolio = [
  {
    img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60772b33907e880e718f1c5e_JobSites.jpg",
    id: 1,
    title: "Noteworthy technology acquisitions 2021",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    type: "web",
  },
  {
    img: "https://statanalytica.com/blog/wp-content/uploads/2023/06/Website-Project-Ideas.webp",
    id: 2,
    title: "Noteworthy technology acquisitions 2021",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    type: "web",
  },
  {
    img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60772b33907e880e718f1c5e_JobSites.jpg",
    id: 3,
    title: "Noteworthy technology acquisitions 2021",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    type: "web",
  },
  {
    img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60772b33907e880e718f1c5e_JobSites.jpg",
    id: 4,
    title: "Noteworthy technology acquisitions 2021",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    type: "web",
  },
  {
    img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60772b33907e880e718f1c5e_JobSites.jpg",
    id: 5,
    title: "Noteworthy technology acquisitions 2021",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    type: "app",
  },
  {
    img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60772b33907e880e718f1c5e_JobSites.jpg",
    id: 6,
    title: "Noteworthy technology acquisitions 2021",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    type: "app",
  },
  {
    img: "https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/60772b33907e880e718f1c5e_JobSites.jpg",
    id: 7,
    title: "Noteworthy technology acquisitions 2021",
    desc: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
    type: "app",
  },
];

const Portfolio = () => {
  const [seletedItem, setSeletedItem] = useState("all");
  return (
    <section
      className={`${styles.portfolio_section} pt-20 pb-24 px-2`}
      id="portfolio"
    >
      <div className="container mx-auto">
        {/* 
        section heading
        */}
        <div className="row">
          <h2 className="section_heading">our portfolio</h2>
          <p className={`${styles.little_descripton}`}>
            Explore Our Remarkable Achievements.
          </p>
        </div>
        <div className="row">
          <div className={`${styles.portfolio_filter}`}>
            <button
              type="button"
              className={`${seletedItem === "all" && styles.active}`}
              onClick={() => setSeletedItem("all")}
            >
              all
            </button>
            <button
              type="button"
              className={`${seletedItem === "web" && styles.active}`}
              onClick={() => setSeletedItem("web")}
            >
              web
            </button>
            <button
              type="button"
              className={`${seletedItem === "app" && styles.active}`}
              onClick={() => setSeletedItem("app")}
            >
              apps
            </button>
          </div>
        </div>

        {/* 
        CONTENT of portfolio
        */}
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {seletedItem === "all" &&
            protfolio.map((p) => <Card key={p.id} item={p} />)}

          {seletedItem === "web" &&
            protfolio
              .filter((a) => a.type === "web")
              .map((p) => <Card key={p.id} item={p} />)}

          {seletedItem === "app" &&
            protfolio
              .filter((a) => a.type === "app")
              .map((p) => <Card key={p.id} item={p} />)}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
