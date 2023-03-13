import React from "react"; // we need this to make JSX compile
import RoughRewardsHeader from "./RougeRewardsHeader/RoughRewardsHeader";
import RoughRewardsTable from "./RougeRewardsTable/oughRewardsTable";

const RoughRewards = () => {
  return (
    <div className="mb-6">
      <RoughRewardsHeader />
      <RoughRewardsTable />
    </div>
  );
};

export default RoughRewards;
