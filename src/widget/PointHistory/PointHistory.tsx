import React from "react"; // we need this to make JSX compile
import PointHistoryHeader from "./PointHistoryHeader/ointHistoryHeader";
import PointHistoryTable from "./PontHistoryTable/PointHistoryTable";

const PointHistory = () => {
  return (
    <div className="mb-6 mt-2">
      <PointHistoryHeader />
      <PointHistoryTable />
    </div>
  );
};

export default PointHistory;
