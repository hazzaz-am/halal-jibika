import Style from "./lastestjobs.module.css";
import company from "../../../public/company_logo_3.png";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const LatestJobs = () => {
  const [favourite, setFavourite] = useState(false);

  return (
    <section>
      <div className="container">
        <div className={Style.jobs__category}>
          <button>Latest Jobs</button>
          <button>Recent Jobs</button>
        </div>

        <div className={Style.jobs__container}>
          <div className={Style.job__card}>
            <div className={Style.job__card__header}>
              <span className={Style.job__position}>
                <a href="">Senior Developer</a>
              </span>
              <button
                onClick={() => setFavourite(!favourite)}
                className={Style.favourite__job}
              >
                {favourite ? "❤️" : "🤍"}
              </button>
            </div>

            <div className={Style.company__logo}>
              <img
                src={company}
                alt=""
              />
            </div>

            <div className={Style.company__details}>
              <h5 className={Style.job__title}>Senior Officer</h5>
              <p className={Style.job__position}>Microsoft</p>
              <p className={Style.job__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                cumque dolorem? Non optio illum recusandae?
              </p>
            </div>

            <div className={Style.job__cta}>
              <button className={Style.job__apply}>Apply Now</button>
            </div>
          </div>

          <div className={Style.job__card}>
            <div className={Style.job__card__header}>
              <span className={Style.job__position}>
                <a href="">Junior Developer</a>
              </span>
              <button
                onClick={() => setFavourite(!favourite)}
                className={Style.favourite__job}
              >
                {favourite ? "❤️" : "🤍"}
              </button>
            </div>

            <div className={Style.company__logo}>
              <img
                src={company}
                alt=""
              />
            </div>

            <div className={Style.company__details}>
              <h5 className={Style.job__title}>Senior Officer</h5>
              <p className={Style.job__position}>Microsoft</p>
              <p className={Style.job__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                cumque dolorem? Non optio illum recusandae?
              </p>
            </div>

            <div className={Style.job__cta}>
              <button className={Style.job__apply}>Apply Now</button>
            </div>
          </div>

          <div className={Style.job__card}>
            <div className={Style.job__card__header}>
              <span className={Style.job__position}>
                <a href="">Mid Level Developer</a>
              </span>
              <button
                onClick={() => setFavourite(!favourite)}
                className={Style.favourite__job}
              >
                {favourite ? "❤️" : "🤍"}
              </button>
            </div>

            <div className={Style.company__logo}>
              <img
                src={company}
                alt=""
              />
            </div>

            <div className={Style.company__details}>
              <h5 className={Style.job__title}>Senior Officer</h5>
              <p className={Style.job__position}>Microsoft</p>
              <p className={Style.job__description}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
                cumque dolorem? Non optio illum recusandae?
              </p>
            </div>

            <div className={Style.job__cta}>
              <button className={Style.job__apply}>Apply Now</button>
            </div>
          </div>
        </div>

        <div className={Style.explore__jobs}>
          <NavLink to="/jobs">
            <button className={Style.explore__btn}>Explore Jobs</button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default LatestJobs;
