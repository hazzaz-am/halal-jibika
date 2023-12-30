import Style from "./banner.module.css";
import img from "../../../public/undraw_interview_re_e5jn.svg";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section>
      <div className="container">
        <div className={Style.main__banner__area}>
          <div className={Style.main__banner__text}>
            <h2 className={Style.banner__heading}>
              Search Between More Then <span>50,000</span> Open Jobs.
            </h2>
            <p className={Style.jobs__keywords}>
              Trending Jobs Keywords: 
              <span>
                <a href="">Web Designer</a>
              </span>
              <span>
                <a href="">Web Developer</a>
              </span>
              <span>
                <a href="">IOS Developer</a>
              </span>
              <span>
                <a href="">Android Developer</a>
              </span>
            </p>
            <Link className={Style.explore__cta} to="/signup">
              <button>Explore Now</button>
            </Link>
          </div>

          <div className={Style.bannerimg}>
            <img
              src={img}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
