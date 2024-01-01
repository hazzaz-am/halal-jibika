/* eslint-disable react/prop-types */
import Style from "./ContactCard.module.css"

const ContactCard = ({title, image}) => {
    return (
        <div className={Style.connect__card}>
            <div className={Style.connect__card__image}>
                <img src={image} alt="" />
            </div>

            <h5 className={Style.connect__card__title}>{title}</h5>
        </div>
    );
};

export default ContactCard;