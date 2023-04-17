import React from "react";
import customStyle from "../customStyle";

const Seperator = (): JSX.Element => {
  // return <hr className={customStyle.seperator} />;
  return (
    <div className="tw-my-2">
      <hr className={customStyle.seperator} />
    </div>
  );
};

export default Seperator;
