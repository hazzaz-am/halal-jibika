import { Link } from "react-router-dom";
import Style from "./signup.module.css";

const Signup = () => {
  return (
    <section>
      <div className="container">
        <div className={Style.main__form}>
          <h2 className={Style.form__header}>Sign Up</h2>
          <form>
            <div className={Style.form__group}>
              <label htmlFor="fanme">Full Name</label>
              <input
                className={Style.form__control}
                type="text"
                name="fname"
                placeholder="Full Name"
              />
            </div>
            <div className={Style.form__group}>
              <label htmlFor="email">Email</label>
              <input
                className={Style.form__control}
                type="email"
                name="email"
                placeholder="Email Address"
              />
            </div>
            <div className={Style.form__group}>
                <label htmlFor="password">Password</label>
              <input
                className={Style.form__control}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className={Style.form__group}>
                <label htmlFor="password">Confirm Password</label>
              <input
                className={Style.form__control}
                type="password"
                name="password"
                placeholder="Confirm Password"
              />
            </div>
            <div className={Style.form__group}>
              <button type="submit">Sign Up</button>
            </div>
            <p>
              Allready have an account ? <Link to="/signin">Signin Now</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Signup;
