/* eslint-disable react/prop-types */
import Style from "./CategoryCard.module.css";


const CategoryCard = ({categories: {title, jobNums, image}}) => {
  return (
    <>
      <div className={Style.category__card}>
        <div className={Style.category__card__img}>
          <img
            src={image}
            alt=""
          />
        </div>
        <h4 className={Style.category__title}>{title}</h4>
        <span className={Style.job__numbers}>{jobNums} JOBS</span>
      </div>
    </>
  );
};

export default CategoryCard;
