import Style from "./error.module.css";
import error from "../../../public/404.png";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className={Style.error__section}>
        <img
          src={error}
          alt=""
        />
      </div>
      <div className={Style.error__btn}>
        <Link to="/">
          <button className={Style.far__from__home}>Back To Home</button>
        </Link>
      </div>
    </>
  );
};

export default Error;
