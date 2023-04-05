import React from "react";
import rectangle from "../images/Rectangle.svg";
import arrow from "../images/Vector.svg";
import CustomStyles from "../CustomStyles";

const RedirectButton = (): JSX.Element => {
  return (
    <button className={CustomStyles.redirectButton.buttonWrapper}>
      <img className={CustomStyles.redirectButton.imgOne} src={rectangle} />
      <img className={CustomStyles.redirectButton.imgTwo} src={arrow} />
    </button>
  );
};

export default RedirectButton;
