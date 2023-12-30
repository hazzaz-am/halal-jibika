import { Link } from "react-router-dom";
import Style from "./signin.module.css";

const Signin = () => {
  return (
    <section>
      <div className="container">
        <div className={Style.main__form}>
        <h2 className={Style.form__header}>Sign In</h2>
          <form>
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
            <div className={Style.password__control}>
            <label htmlFor="password">Password</label>
            <label>Forgot Password</label>
            </div>
              <input
                className={Style.form__control}
                type="password"
                name="password"
                placeholder="Password"
              />
            </div>
            <div className={Style.form__group}>
              <button type="submit">Sign In</button>
            </div>
            <p>Not a member ? <Link to="/signup">Signup Now</Link></p>
          </form>
           
        </div>
      </div>
    </section>
  );
};

export default Signin;
