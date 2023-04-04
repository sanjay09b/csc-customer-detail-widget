import React from "react";
import image1 from "../image/deliveryicon.png";
import getDate from "../DateFormatter";

const AutoReplenish = () => {
  const sameDayData = {
    title: "Auto Replenish",
    since: 1678774018773,
    
    status: "Cancelled",
    expiry: 1678774018773,
    id: "id 1",
  };
  return (
    <div>
      <div className="flex mt-4 ">
        <div className=" w-8 h-12">
          <img src={image1} alt="" />
        </div>
        <div className="">
          <div>
            <h1 className="flex basis-1/2  font-bold text-xl pl-4">
              {sameDayData.title}
            </h1>
          </div>
          <div className="text-sm pl-4 font-normal ">
            {sameDayData.status === "active"
              ? `Member since ${sameDayData.since}`
              : "Your subscription has been cancelled"}
          </div>
        </div>
      </div>
      <div className="flex space-x-9 mt-4">
        <div className="basis-1/5 text-sm font-bold ">{sameDayData.status}</div>
        <div className="basis-1/3 text-sm text-gray-600 mr-6 ">
          {sameDayData.status === "active"
            ? `Renews ${sameDayData.expiry}`
            : `Expired on ${getDate(sameDayData.expiry)}`}
        </div>
        <div className="flex basis-1/2 justify-end text-sm text-blue-600 pr-5 mt-1">
          {sameDayData.status === "active" ? "" : <button>Renew</button>}
        </div>
      </div>
      ;
    </div>
  );
};

export default AutoReplenish;
