import React from "react";
import compose from "../images/compose.png";
import customStyle from "../customStyle";

const EditIcon = (): JSX.Element => {
  return (
    <div className={customStyle.editImageContainer}>
      <img className={customStyle.editImage} src={compose} alt="Edit Icon" />
    </div>
  );
};

export default EditIcon;
