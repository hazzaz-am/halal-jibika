/* eslint-disable react/prop-types */
import Style from "./Member.module.css";

const MemberCard = ({title, position, image}) => {
  return (
    <div className={Style.member__card}>
      <div className={Style.card__image}>
        <img
          src={image}
          alt="Jane"
        />
      </div>
      <div className={Style.card__details}>
        <h5 className={Style.member__title}>{title}</h5>
        <span className={Style.member__position}>{position}</span>
        <p className={Style.member__desc}>
          Some text that describes me lorem ipsum ipsum lorem.
        </p>
        <p className={Style.member__email}>example@example.com</p>
        <p>
          <button className={Style.contact__cta}>Contact</button>
        </p>
      </div>
    </div>
  );
};

export default MemberCard;
