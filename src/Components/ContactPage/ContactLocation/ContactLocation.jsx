import ContactCard from "./ContactCard/ContactCard";
import Style from "./ContactLocation.module.css";
import phone from "/public/phone.png";
import locatin from "/public/352521_location_on_icon.png"
import message from "/public/letter.png"

const ContactLocation = () => {
  return (
    <section>
      <div className="container">
        <h2 className={Style.connect__heading}>Get In Touch</h2>

        <div className={Style.connect__container}>
          <ContactCard
            title={"(207) 555-0119"}
            image={phone}
          />
          <ContactCard
            title={"2118 Thornridge , NY , USA"}
            image={locatin}
          />
          <ContactCard
            title={"ckctm12@gmail.com"}
            image={message}
          />
        </div>
      </div>
    </section>
  );
};

export default ContactLocation;
