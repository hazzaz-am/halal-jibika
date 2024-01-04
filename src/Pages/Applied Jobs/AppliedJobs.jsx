import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from './../../Components/Loading/Loading';
import { Link } from "react-router-dom";
import Style from "../../Components/LatestJobs/lastestjobs.module.css"

const AppliedJobs = () => {

    const {apply, loading} = useContext(AuthContext)
  return (
    <section>
      <div className="container">
        <h2 className={Style.applied__jobs__title}>Your Applied Jobs</h2>

        <div className={Style.favourite__container}>
          {apply.map((job) => (
            <div
              key={job.id}
              className={Style.job__card}
            >
              {loading && <Loading />}
              <div className={Style.job__card__header}>
                <span className={Style.job__position}>
                  <a>{job.position}</a>
                </span>
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
                <Link>
                  <button disabled className={Style.job__apply__btn}>Applied</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppliedJobs;
