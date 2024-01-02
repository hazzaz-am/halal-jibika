import { Link } from "react-router-dom";
import Style from "./signin.module.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signin = () => {
  const { signinUser,resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signinUser(email, password)
      .then((res) => {
        console.log(res.user);
        console.log("LOGGEDIN");
        toast.success("Wellcome Halal Jibika", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      })
      .catch((error) => {
        console.error(error.message);
        toast.error('You are missing something', {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          });
      });
  };

  const handleForgotPassword = () => {

    resetPassword(email)
    .then((res) => {
      toast.info('Mail sent tour email', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        console.log(res.user)
    })
    .catch((error) =>  console.error(error.message))
  }

  return (
    <>
      <section>
        <div className="container">
          <div className={Style.main__form}>
            <h2 className={Style.form__header}>Sign In</h2>
            <form onSubmit={handleSubmit}>
              <div className={Style.form__group}>
                <label htmlFor="email">Email</label>
                <input
                  className={Style.form__control}
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className={Style.form__group}>
                <div className={Style.password__control}>
                  <label htmlFor="password">Password</label>
                  <label onClick={handleForgotPassword}>Forgot Password</label>
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
              <p>
                Not a member ? <Link to="/signup">Signup Now</Link>
              </p>
            </form>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Signin;
