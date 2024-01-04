/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useContext, useEffect } from "react";
import Style from "../lastestjobs.module.css";
import { AuthContext } from "./../../../Provider/AuthProvider";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";

const LatestJobCard = ({ job }) => {
  const { loading, isJobFavorite, addToFavourite } = useContext(AuthContext);

  return (
    <div className={Style.job__card}>
      {loading && <Loading />}
      <div className={Style.job__card__header}>
        <span className={Style.job__position}>
          <a>{job.position}</a>
        </span>
        <button
          onClick={() => addToFavourite(job)}
          className={Style.favourite__job}
        >
          {isJobFavorite(job.id) ? "❤️" : "🤍"}
        </button>
      </div>

      <div className={Style.company__logo}>
        <img
          src={job.logo}
          alt=""
        />
      </div>

      <div className={Style.company__details}>
        <h5 className={Style.job__title}>{job.title}</h5>
        <p className={Style.job__company}>{job.companyName}</p>
        <p className={Style.job__description}>{job.description}</p>
      </div>

      <div className={Style.job__cta}>
        <Link to={`/details/${job.id}`}>
          <button className={Style.job__apply}>Job Details</button>
        </Link>
      </div>
    </div>
  );
};

export default LatestJobCard;
