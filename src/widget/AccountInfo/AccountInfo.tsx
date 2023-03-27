import React from "react";
import BreakLine from "../BreakLine/BreakLine";
import AddButton from "../Button/AddButton";
import { rouge, vib, beautyInsider } from "../images/image";
import { getDateByMonth, getTime } from "../DateFormater";

const AccountInfo = () => {
  let BIStatusImage;
  const riskFactors = ["No Known Risk", "second"];
  const accountStatus = ["Active", "second"];
  const userAccountInfo = {
    accountValue: "700",
    dateValue: 1678774018773,
    CRMId: "1234567890",
    BIStatus: "rouge",
    YTDSpend: "1238.00",
    VIBStatus2024: "Not eligible until 2024",
    VIBUntill: 1678774018773,
    qualifiedForVIB: 1678774018773,
    VIBRougeUntil: 1678774018773,
    points: "763pts",
  };
  if (userAccountInfo.BIStatus === "rouge") {
    BIStatusImage = rouge;
  } else if (userAccountInfo.BIStatus === "vib") {
    BIStatusImage = vib;
  } else {
    BIStatusImage = beautyInsider;
  }
  return (
    <div className="mb-2">
      <div className="mt-5 text-black font-bold text-xl mb-3 ">
        Account Information
      </div>
      <div className="mt-3 mb-3 mr-5">
        <BreakLine />
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Risk Factor
        </div>
        <div className=" text-left leading-4 text-sm">
          <select>
            {riskFactors.map((riskFactor, index) => (
              <option key={index}>{riskFactor}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Account Status
        </div>
        <select className="text-left ml-3 leading-4 text-sm">
          {accountStatus.map((status, index) => (
            <option key={index}>{status}</option>
          ))}
        </select>
      </div>
      <div className="mt-3 flex space-x-4 mb-6 ">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Account Created On
        </div>
        <div className="basis-5/6 text-left leading-4 text-sm">
          <div className="flex space-x-2">
            <div>{getDateByMonth(userAccountInfo.dateValue)}</div>
            <div>at</div>
            <div>{getTime(userAccountInfo.dateValue)}</div>
          </div>
          <div className="flex space-x-2">
            <div>Sepora.com</div>
            <div>MCD</div>
            <div>{userAccountInfo.accountValue}</div>
          </div>
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
        <div className="basis-5/6 text-left text-sm leading-4 text-red-500">
          <img src={BIStatusImage} alt="Rouge Logo"></img>
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
          {getDateByMonth(userAccountInfo.VIBUntill)}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3 ">
        <div className="basis-1/6 text-base leading-5 font-bold">
          Qualified for VIB
        </div>
        <div className="basis-5/6 text-left leading-4  text-sm">
          {getDateByMonth(userAccountInfo.qualifiedForVIB)}
        </div>
      </div>
      <div className="mt-3 flex space-x-4 mb-3">
        <div className="basis-1/6 text-base leading-5 font-bold">
          VIB Rouge Until
        </div>
        <div className="basis-5/6 text-left leading-4  text-sm">
          {getDateByMonth(userAccountInfo.VIBRougeUntil)}
        </div>
      </div>
      <div className="mt-3 flex">
        <div className="basis-1/6 text-base leading-5 font-bold">Points</div>
        <div className="basis-4/6 text-left leading-4 text-sm ml-5">
          {userAccountInfo.points}
        </div>
        <div className="basis-2/12 flex justify-end mr-5">
          <AddButton />
        </div>
      </div>
    </div>
  );
};

export default AccountInfo;
