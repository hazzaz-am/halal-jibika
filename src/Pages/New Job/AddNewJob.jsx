import Style from "./addnewjob.module.css";
import axios from "axios";

const AddNewJob = () => {
  // const {jobs} = useContext(AuthContext)

  const handleNewJobFrom = (event) => {
    event.preventDefault();

    const form = event.target;
    const company = form.company.value;
    const logo = form.logo.value;
    const title = form.title.value;
    const position = form.position.value;
    const location = form.location.value;
    const salary = form.salary.value;
    const description = form.description.value;

    console.log(company, logo, title, position, location, salary, description);

    axios
      .post("http://localhost:9000/jobs", {
        companyName: company,
        logo: logo,
        title: title,
        position: position,
        location: location,
        salary: salary,
        description: description
      })
      .then((response) => {
        form.reset();
        console.log(response.data);
      })
      .catch((error) => console.error(error.message));
  };

  return (
    <section>
      <div className="container">
        <h2 className={Style.addnewjob__heading}>Add New Job</h2>
        <div className={Style.job__container}>
          <form onSubmit={handleNewJobFrom}>
            <div className={Style.form__control}>
              <label htmlFor="company">Company Name</label>
              <input
                type="text"
                placeholder="Company Name"
                name="company"
              />
            </div>
            <div className={Style.form__control}>
              <label htmlFor="logo">Logo</label>
              <input
                type="url"
                placeholder="Logo Url"
                name="logo"
              />
            </div>
            <div className={Style.form__control}>
              <label htmlFor="title">Title</label>
              <input
                type="text"
                placeholder="Title"
                name="title"
              />
            </div>
            <div className={Style.form__control}>
              <label htmlFor="position">Position</label>
              <input
                type="text"
                placeholder="Position"
                name="position"
              />
            </div>
            <div className={Style.form__control}>
              <label htmlFor="location">Location</label>
              <input
                type="text"
                placeholder="Location"
                name="location"
              />
            </div>
            <div className={Style.form__control}>
              <label htmlFor="salary">Salary</label>
              <input
                type="number"
                placeholder="Salary"
                name="salary"
              />
            </div>
            <div className={Style.form__control}>
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                placeholder="Description"
              ></textarea>
            </div>
            <div className={Style.button__for__newJob}>
              <button
                type="submit"
                className={Style.add__new__job}
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddNewJob;
