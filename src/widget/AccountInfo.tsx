import React from "react";
// import AccountCreated from "../AccountCreated/AccountCreated";
// import BreakLine from "../BreakLine/BreakLine";
// import AddButton from "../Button/AddButton";

const AccountInfo = () => {
  const userAccountInfo = {
    CRMId: "1234567890",
    BIStatus: "ROUGE",
    YTDSpend: "1238.00",
    VIBStatus2024: "not eligible until 2024",
    VIBUntill: "Mar 3,2024",
    qualifiedForVIB: "Mar 3,2023",
    VIBRougeUntil: "Dec 6,2024",
    points: "763pts",
  };
  return (
    <>
      <div className="mt-5 text-black font-bold text-xl mb-3 ">
        Account Information
      </div>
      {/* <BreakLine /> */}
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Risk Factor
        </div>
        <select className=" text-left leading-4 text-sm ">
          <option>No Known Risk</option>
          <option>...</option>
        </select>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Account Status
        </div>
        <select className="text-left leading-4  text-sm">
          <option>Active</option>
          <option>....</option>
        </select>
      </div>
      <div className="mt-3 flex space-x-4 mb-6 ">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Account Created On
        </div>
        <div className="basis-5/6 text-left leading-4 text-sm">
          {/* <AccountCreated /> */}
        </div>
      </div>
      <div className="mt-6 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">CRM ID</div>
        <div className="basis-5/6 text-left leading-4  text-sm">
          {userAccountInfo.CRMId}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">BI Status</div>
        <div className="basis-5/6 text-left text-sm leading-4 text-red-500 ">
          {userAccountInfo.BIStatus}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          YTD spend ($)
        </div>
        <div className="basis-5/6 text-left leading-4 text-sm">
          ${userAccountInfo.YTDSpend}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Spend($)needed for VIB Status through 2024
        </div>
        <div className="basis-5/6 text-left leading-4  text-sm">
          {userAccountInfo.VIBStatus2024}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">VIB Until</div>
        <div className="basis-5/6 text-left leading-4  text-sm">
          {userAccountInfo.VIBUntill}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3 ">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Qualified for VIB
        </div>
        <div className="basis-5/6 text-left leading-4  text-sm">
          {userAccountInfo.qualifiedForVIB}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          VIB Rouge Until
        </div>
        <div className="basis-5/6 text-left leading-4  text-sm">
          {userAccountInfo.VIBRougeUntil}
        </div>
      </div>
      <div className="mt-3 flex mb-2">
        <div className="basis-1/6 text-base leading-5 font-bold">Points</div>
        <div className="basis-4/6 text-left leading-4 text-sm ml-5">
          {userAccountInfo.points}
        </div>
        {/* <div className="basis-2/12 flex justify-end mr-5">
          <AddButton />
        </div> */}
      </div>
    </>
  );
};

export default AccountInfo;
