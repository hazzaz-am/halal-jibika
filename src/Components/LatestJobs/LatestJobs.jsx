import Style from "./lastestjobs.module.css";
import { NavLink } from "react-router-dom";
import LatestJobCard from "./LatestJobCard/LatestJobCard";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Loading from "../Loading/Loading";

const LatestJobs = () => {
  const { jobs, loading } = useContext(AuthContext);

  return (
    <section>
      <div className="container">
        <div className={Style.jobs__category}>
          <button>Latest Jobs</button>
          <button>Recent Jobs</button>
        </div>

        <div className={Style.jobs__container}>
          {/* {error && <h1 className={Style.errorHandle}>Something Went Wrong</h1>} */}
          {loading && <Loading />}

          {jobs
            .map((job) => (
              <LatestJobCard
                key={job.id}
                job={job}
              />
            ))
            .slice(-5)}
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
