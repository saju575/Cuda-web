import styles from "./contact.module.css";

const Contact = () => {
  return (
    <section
      className={`${styles.contact_section} pt-20 pb-24 px-2`}
      id="contact"
    >
      <div className="container mx-auto">
        {/* 
          content heading
        */}
        <div className="mb-16">
          <h2 className="section_heading">get in touch</h2>
          <p className={`${styles.little_descripton}`}>
            1600 Pennsylvania Ave NW, Washington, DC 20500,United States of
            America. Tel:(202)458-111
          </p>
        </div>

        {/* 
          form content
        */}
        <div className="mx-2">
          <form className="lg:w-[70%] mx-auto">
            <div className="flex md:flex-row flex-col gap-5 mb-4">
              <div className="md:w-1/2">
                <input
                  type="text"
                  name="Name"
                  placeholder="Your Name *"
                  required
                />
              </div>
              <div className="md:w-1/2">
                <input
                  type="email"
                  name="Email"
                  placeholder="Your Email *"
                  required
                />
              </div>
            </div>
            <div className="row">
              <textarea
                name="Message"
                id=""
                cols="30"
                rows="10"
                placeholder="Your Message *"
                required
              ></textarea>
            </div>
            <div className="row">
              <input
                type="submit"
                value="send message"
                className={`btn ${styles.btn_submit}`}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
