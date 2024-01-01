import Style from "./AboutBanner.module.css";
import banner from "/public/About us page.gif";

const AboutBanner = () => {
  return (
    <section>
      <div className="container">
        <div className={Style.about__container}>
          <h2 className={Style.abouy__heading}>
            Get applications from the world best talents.
          </h2>

          <div className={Style.about__banner}>
            <img
              src={banner}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBanner;
