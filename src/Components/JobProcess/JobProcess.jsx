import Style from "./JobProcess.module.css";
import JobProcessCard from "./JobProcessCard/JobProcessCard";

const JobProcess = () => {
  return (
    <section>
      <div className="container">
        <div className={Style.jobprocess__topbar}>
          <h2 className={Style.dreamjob__heading}>
            Easy Step To Get Your <span>Dream Job</span>
          </h2>
        </div>
        <div className={Style.jobprocess__container}>
          <JobProcessCard
            title={"Create Your Account"}
            image={
              "https://html.creativegigstf.com/khuj/khuj/images/icon/edit.svg"
            }
          />
          <JobProcessCard
            title={"Search Your Job"}
            image={
              "https://html.creativegigstf.com/khuj/khuj/images/icon/activity.svg"
            }
          />
          <JobProcessCard
            title={"Apply For Job"}
            image={
              "https://html.creativegigstf.com/khuj/khuj/images/icon/document.svg"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default JobProcess;
