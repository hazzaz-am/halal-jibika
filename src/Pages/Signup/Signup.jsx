import { Link } from "react-router-dom";
import Style from "./signup.module.css";
import { FcGoogle } from "react-icons/fc";
import { BsGithub } from "react-icons/bs";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";



const Signup = () => {
  const { createUser, googleSignin, githubSignin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const githubProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmpassword = form.confirmpassword.value;

    if (password !== confirmpassword) {
      setError("Password didn't match");
      return;
    } else if (password.length !== 6) {
      setError("Password must be 6 characters");
    } else {
      createUser(email, password)
        .then((res) => {
          console.log(res.user);
          setError("");
          form.reset();
        })
        .catch((error) => console.error(error.message));
    }
  };

  const handleGoogleSignin = (event) => {
    event.preventDefault()

    googleSignin(googleProvider)
    .then((res) => {
      const user = res.user;
      console.log(user)
      console.log("LoggedInWithGoogle")
    })
    .catch((error) => console.error(error.message))
  }

  const handleGithubSignin = (event) => {
    event.preventDefault()

    githubSignin(githubProvider)
    .then((res) => {
      console.log(res.user)
      console.log("LOGGEDINWITHGITHUB")
    })
    .catch((error) => console.error(error.message))
  }

  return (
    <section>
      <div className="container">
        <div className={Style.main__form}>
          <h2 className={Style.form__header}>Sign Up</h2>
          <form onSubmit={handleSubmit}>
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
              <label htmlFor="confirmpassword">Confirm Password</label>
              <input
                className={Style.form__control}
                type="password"
                name="confirmpassword"
                placeholder="Confirm Password"
              />
            </div>
            <p className={Style.error__message}>{error}</p>
            <div className={Style.form__group}>
              <button type="submit">Sign Up</button>
            </div>
            <p>
              Allready have an account ? <Link to="/signin">Signin Now</Link>
            </p>
          </form>

          <div className={Style.deviderd}>
          <hr />
          <h2 className={Style.alternative}>Or</h2>
          <hr />
          </div>

          <div className={Style.social__control}>
            <div className={Style.social__group}>
              <button onClick={handleGoogleSignin}>
                <FcGoogle /> Signup With Google
              </button>
            </div>
            <div className={Style.social__group}>
              <button onClick={handleGithubSignin}>
                <BsGithub />
                Signup with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
