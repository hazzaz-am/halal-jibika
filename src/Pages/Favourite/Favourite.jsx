import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../../Components/Loading/Loading";
import Style from "../../Components/LatestJobs/lastestjobs.module.css";
import { Link } from "react-router-dom";

const Favourite = () => {
  const { favourite, addToFavourite, loading, isJobFavorite } =
    useContext(AuthContext);

    
  return (
    <section>
      <div className="container">
        <h2 className={Style.favourite__heading}>Favourite</h2>
        <div className={Style.favourite__container}>
          {favourite.map((job) => (
            <div
              key={job.id}
              className={Style.job__card}
            >
              {/* {error && <h1 className={Style.errorHandle}>Something Went Wrong</h1>} */}
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
                  <button className={Style.job__apply}>Show Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Favourite;
