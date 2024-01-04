import { useEffect } from "react";
import { useState } from "react";
import Style from "./AllJobs.module.css";
import SingleJob from "../SingleJob/SingleJob";

const AllJobs = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    try {
      const alljobs = async () => {
        const res = await fetch("http://localhost:9000/jobs");
        const jobsData = await res.json();
        setJobs(jobsData);
      };
      alljobs();
    } catch (error) {
      console.error(error.message);
    }
  }, []);



  return (
    <section>
      <div className="container">
        <div className={Style.jobs__header}>
          <h2 className={Style.jobs__heading}>Jobs You May Be Interested In</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida
          </p>
        </div>
        <div className={Style.alljobs}>
          {jobs.map((job) => (
            <SingleJob
              key={job.uniqueID}
              jobData={job}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllJobs;
