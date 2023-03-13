import React from "react"; // we need this to make JSX compile

const PointHistoryHeader = () => {
  return (
    <div className="flex mb-4 justify-between leading-5">
      <div className="text-base text-black basis-1/5 font-bold">
        Points History YTD
      </div>
      <div className="basis-4/5 text-right">
        <button className="text-customBlue text-sm font-normal">
          View Point History
        </button>
      </div>
    </div>
  );
};

export default PointHistoryHeader;
