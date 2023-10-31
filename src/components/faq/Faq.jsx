import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

import "react-accessible-accordion/dist/fancy-example.css";
import styles from "./faq.module.css";

/* 
  dummy question
*/
const items = [
  {
    id: 1,
    heading: "What does Cuda specialize in?",
    content: "Cuda specializes in building both websites and mobile apps.",
  },
  {
    id: 2,
    heading: "What makes Cuda stand out from other web development companies?",
    content:
      "Cuda stands out due to its passionate team of developers and designers dedicated to crafting interactive digital experiences.",
  },
  {
    id: 3,
    heading: "How does Cuda describe its approach to web development?",
    content:
      "Cuda turns ideas into interactive digital experiences that delight clients and their users with their expertise.",
  },
  {
    id: 4,
    heading: "Can you tell us about Cuda's team?",
    content:
      "Cuda's team is composed of dedicated and passionate developers and designers who work collaboratively to create outstanding digital solutions.",
  },
  {
    id: 5,
    heading: "What types of clients does Cuda typically work with?",
    content:
      "Cuda works with a diverse range of clients, including businesses, startups, and organizations looking to enhance their online presence.",
  },
  {
    id: 6,
    heading:
      "What technologies and tools does Cuda use in web and mobile app development?",
    content:
      "Cuda leverages a wide range of modern technologies and tools to ensure efficient and innovative web and mobile app development.",
  },
  {
    id: 7,
    heading: "How does Cuda approach the design aspect of projects?",
    content:
      "Cuda places a strong emphasis on design, ensuring that user interfaces and experiences are visually appealing and user-friendly.",
  },
  {
    id: 8,
    heading: "What is Cuda's primary goal when working on a project?",
    content:
      "Cuda's primary goal is to transform client ideas into digital solutions that not only meet but exceed client expectations.",
  },
  {
    id: 9,
    heading:
      "Does Cuda provide ongoing support and maintenance for the websites and apps they develop?",
    content:
      "Yes, Cuda offers ongoing support and maintenance services to ensure that websites and apps remain functional and up-to-date.",
  },
  {
    id: 10,
    heading:
      "How can potential clients get in touch with Cuda to discuss their web or mobile app development needs?",
    content:
      "Potential clients can contact Cuda through their website or by reaching out to their team via email or phone for inquiries and consultations.",
  },
];

const Faq = () => {
  return (
    <section className={`${styles.faq_section} pt-20 pb-24 px-2`} id="faq">
      <div className="container mx-auto">
        {/* 
          section header
        */}
        <div className="mb-14">
          <h2 className="section_heading text">Question</h2>
          <p className={`${styles.little_descripton}`}>
            Usually asking Answer to question
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8">
          {/* 
            left content
          */}
          <div className="flex flex-col items-start gap-9">
            <img src="/resources/faq.svg" alt="faq" className="w-48" />
            <h5 className="text-5xl font-semibold">
              Frequently asking question
            </h5>
            <p className="text-2xl text-left">
              We have listed answers to some of your common questions here. I
              urge you to take a look at this list before asking us questions.
              Then you will not have to wait for our answer and you will save
              valuable time.
            </p>
          </div>

          {/* 
            right content including question and answer 
          */}
          <div className="h-[450px] overflow-y-auto">
            <Accordion allowZeroExpanded>
              {items.map((item) => (
                <AccordionItem key={item.id}>
                  <AccordionItemHeading className="text-3xl">
                    <AccordionItemButton>{item.heading}</AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel className="text-3xl py-4 pl-6 text-left">
                    {item.content}
                  </AccordionItemPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
