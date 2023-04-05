import React from "react";
import CustomStyles from "../CustomStyles";

const DeactivatedStatusButton = (): JSX.Element => {
  return (
    <>
      <div className={CustomStyles.statusButtons.deactivated}>Deactivated</div>
    </>
  );
};

export default DeactivatedStatusButton;
