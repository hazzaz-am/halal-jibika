import Style from "./Contact.module.css";

const ContactBanner = () => {
  return (
    <section className={Style.contact__banner__image}>
      <div className="container">
        <h2 className={Style.contact__banner__heading}>Contact Us.</h2>
      </div>
    </section>
  );
};

export default ContactBanner;
