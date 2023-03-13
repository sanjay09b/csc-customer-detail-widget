import React from "react"; // we need this to make JSX compile
import LinkedAccounts from "./LinkedAccounts/LinkedAccounts";
import PointHistory from "./PointHistory/ointHistory";
import RoughRewards from "./RougeRewards/RoughRewards";

const PRL = () => {
  return (
    <div>
      <PointHistory />
      <RoughRewards />
      <LinkedAccounts />
    </div>
  );
};

export default PRL;
