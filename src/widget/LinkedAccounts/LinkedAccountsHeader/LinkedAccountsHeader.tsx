import React from "react";

const LinkedAccountsHeader = () => {
  return (
    <div className="flex flex-row justify-between mb-4 leading-5">
      <div className="text-base basis-1/5 font-bold">Linked Accounts</div>
      <div className="basis-4/5 text-right ">
        <button className="text-customBlue text-sm font-normal">
          Link Another Account
        </button>
      </div>
    </div>
  );
};

export default LinkedAccountsHeader;
