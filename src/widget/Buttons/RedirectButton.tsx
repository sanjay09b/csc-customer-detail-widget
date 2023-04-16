import rectangle from "../images/Rectangle.svg";
import arrow from "../images/Vector.svg";
import customStyle from "../customStyle";

const RedirectButton = (): JSX.Element => {
  return (
    <button className={customStyle.redirectButton.buttonWrapper}>
      <img className={customStyle.redirectButton.imgOne} src={rectangle} />
      <img className={customStyle.redirectButton.imgTwo} src={arrow} />
    </button>
  );
};

export default RedirectButton;
