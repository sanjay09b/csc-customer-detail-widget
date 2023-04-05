import React from "react";
import CustomStyles from "../CustomStyles";

const BannedStatusButton = (): JSX.Element => {
  return (
    <>
      <div className={CustomStyles.statusButtons.banned}>Banned</div>
    </>
  );
};

export default BannedStatusButton;
