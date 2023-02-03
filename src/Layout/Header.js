import "./Header.css";
import { Fragment } from "react";
import mealsImage from "../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

  return (
    <Fragment>
      <header className="header">
        <h1>Delicius Food</h1>
        <HeaderCartButton onClick={props.onCartShow} />
      </header>
      <div className="main-image">
        <img src={mealsImage} alt="Food on table" />
      </div>
    </Fragment>
  );
};

export default Header;
