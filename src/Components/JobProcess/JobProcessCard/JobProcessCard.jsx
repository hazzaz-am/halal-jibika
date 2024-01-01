/* eslint-disable react/prop-types */
import Style from "./JobProcessCard.module.css";

const JobProcessCard = ({ title, image }) => {
  return (
    <div className={Style.process__card}>
      <div className={Style.process__card__img}>
        <img
          src={image}
          alt=""
        />
      </div>
        <h3 className={Style.jobprocess__title}>{title}</h3>     
    </div>
  );
};

export default JobProcessCard;
