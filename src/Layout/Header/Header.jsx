import { NavLink } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import Style from "./header.module.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { signoutUser, user } = useContext(AuthContext);

  const handleSignOut = () => {
    signoutUser()
      .then((res) => console.log(res.user, "SIGNEDOUT"))
      .catch((error) => console.log(error.message));
  };

  return (
    <header>
      <nav className="container">
        <div className={Style.navbar__container}>
          <div className={Style.header__logo}>
            <h1 className={Style.heading}>HALAL JIBIKA</h1>
          </div>

          <div className={Style.navbar}>
            <ul>
              <NavLink to="/">Home</NavLink>

              <NavLink to="/about">About</NavLink>

              <NavLink to="/contact">Contact</NavLink>

              <NavLink to="/jobs">Jobs</NavLink>
              <NavLink to="/favourite">Favourite</NavLink>

              {user && <NavLink to="/appliedjobs">Applied Jobs</NavLink>}

              {user && <NavLink to="/newjob">New Jobs</NavLink>}
            </ul>
          </div>

          <div className={Style.header__profile}>
            {user ? (
              <button
                onClick={handleSignOut}
                className={Style.header__cta}
              >
                <NavLink>Signout</NavLink>
              </button>
            ) : (
              <>
                <button className={Style.header__cta}>
                  <NavLink to="/signin">Signin</NavLink>
                </button>
                <button className={Style.header__cta}>
                  <NavLink to="/signup">Signup</NavLink>
                </button>
              </>
            )}

            {user && (
              <button className={Style.profile}>
                <span>{user?.displayName}</span>
                <span className={Style.profile__picture}>
                <img src={user ? user?.photoURL : <BiSolidUser />} alt="profile" />               
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
