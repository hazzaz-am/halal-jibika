import { useState } from "react";
import "./JobDetail.css";
import { useLoaderData } from "react-router";

const JobDetails = () => {
  const details = useLoaderData();
  const [disable, setDisable] = useState(false)

  console.log(details);

  return (
    <section className="job__details">
      <div className="container">
        <div
          style={{ paddingTop: "20px" }}
          className="section__title"
        >
          <h2 className="jobdetails__heading">Make your decision wisely</h2>
        </div>

        <div
          className="container post"
          style={{
            background: "#fff",
            boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
            padding: "30px",
            borderRadius: "12px",
          }}
        >
          <div className="post__owner_info">
            <img
              src={details.logo}
              alt="Darkento Ltd."
            />
            <div className="info">
              <h4>{details.companyName}</h4>
            </div>
          </div>
          <div className="post__body">
            <h3>{details.title}</h3>
            <span>Job Position: {details.position}</span>
            <p>{details.description}</p>
            <p>
              <span>Job Type:</span> Full-time
            </p>
            <p>
              <span>About Us:</span> <br /> Our {details.companyName} Company is
              a dynamic and growing tech firm dedicated to providing innovative
              solutions in the field of IT Sector . We take pride in our
              commitment to delivering high-quality products and services while
              fostering a collaborative and inclusive work environment.
            </p>
            <p>
              <span>Job Description: </span>
              <br /> We are currently seeking a talented {details.position}
              {details.title} to join our passionate team. The ideal candidate
              will have a solid understanding of both front-end and back-end
              technologies, excellent problem-solving skills, and a passion for
              creating seamless and intuitive user experiences.
            </p>
            <p>
              <span>Responsibilities: </span> <br />
              <ul>
                <li>
                  Collaborate with cross-functional teams to design, develop,
                  and implement new features and enhancements.
                </li>
                <li>
                  Write clean, efficient, and maintainable code across the full
                  stack.
                </li>
                <li>
                  Conduct thorough testing to ensure the reliability and
                  security of applications.
                </li>
                <li>
                  Stay updated on industry trends and contribute to continuous
                  improvement initiatives.
                </li>
                <li>
                  Provide technical support and troubleshooting as needed.
                </li>
              </ul>
            </p>
            <p>
              <span>Benefits:</span> <br />
              <ul>
                <li>Competitive salary</li>
                <li>Health insurance</li>
                <li>Flexible work hours</li>
                <li>Professional development opportunities</li>
                <li>Collaborative and inclusive work environment</li>
              </ul>
            </p>
            <p>
              <span>How to Apply:</span>
              <br />
              If you are passionate about technology and eager to contribute to
              a dynamic team, please submit your resume and a cover letter
              detailing your relevant experience to {details.companyName}
              @gmail.com. Include {details.title} - [Your Name] in the subject
              line.
            </p>
            <p>
              <span>Application Deadline: 10/3/2024</span> <br />
              Our {details.companyName} Company is an equal opportunity
              employer. We encourage candidates from all backgrounds to apply.
            </p>
            <div className="buttons">
              <button onClick={() => setDisable(true)} disabled= {disable} className={`apply__btn ${disable}`}>Apply Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
