import React from "react";
import CustomStyles from "../CustomStyles";

const SuspendedStatusButton = (): JSX.Element => {
  return (
    <>
      <div className={CustomStyles.statusButtons.suspended}>Suspended</div>
    </>
  );
};

export default SuspendedStatusButton;
