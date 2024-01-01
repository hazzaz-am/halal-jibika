import Style from "./ContactForm.module.css";
import contact from "/public/Forms.gif"

const ContactForm = () => {
  return (
    <section>
      <div className="container">
        <h2 className={Style.contact__form__heading}>Send us Message</h2>
        <div className={Style.form__container}>
          <div className={Style.form__fields}>
            <form>
              <div className={Style.form__control}>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                />
              </div>
              <div className={Style.form__control}>
                <label htmlFor="name">Number</label>
                <input
                  type="number"
                  placeholder="Number"
                  name="number"
                />
              </div>
              <div className={Style.form__control}>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className={Style.form__control}>
                <label htmlFor="message">Message</label>
                <textarea name="message" placeholder="Write your message"></textarea>
              </div>
              <div className={Style.form__control}>
                <button className={Style.message__btn}>Send Message</button>
              </div>
            </form>
          </div>

          <div className={Style.form__image}>
            <img
              src={contact}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
