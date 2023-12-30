import { NavLink } from "react-router-dom";
import { BiSolidUser } from "react-icons/bi";
import Style from "./header.module.css";

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className={Style.navbar__container}>
          <div className={Style.header__logo}>
            <h1 className={Style.heading}>HALAL JIBIKA</h1>
          </div>

          <div className={Style.navbar}>
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/jobs">Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/favourite">Favourite</NavLink>
              </li>
              <li>
                <NavLink to="/appliedjobs">Applied Jobs</NavLink>
              </li>
              <li>
                <NavLink to="/newjob">New Jobs</NavLink>
              </li>
            </ul>
          </div>

          <div className={Style.header__profile}>
            <button className={Style.header__cta}>
              <NavLink to="/signin">Signin</NavLink>
            </button>
            <button className={Style.header__cta}>
              <NavLink to="/signup">Signup</NavLink>
            </button>
            <button className={Style.header__cta}>
              <NavLink to="/signout">Signout</NavLink>
            </button>
            <button className={Style.profile}>
              <span>Hazzaz</span>
              <span className={Style.profile__picture}>
                <BiSolidUser />
              </span>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
