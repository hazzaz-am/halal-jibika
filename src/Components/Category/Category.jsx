import { categoryData } from "../../Utilities/JobCategory/category";
import CategoryCard from "../CategoryCard.jsx/CategoryCard";
import Style from "./category.module.css";

const Category = () => {
  return (
    <section>
      <div className="container">
        <div className={Style.ctegory__section__heading}>
          <h3 className={Style.ctegory__heading}>
            Explore job by <span>Categories</span>
          </h3>
        </div>

        <div className={Style.catgegory__container}>
          {categoryData.map((category) => (
            <CategoryCard
              key={category.id}
              categories={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
