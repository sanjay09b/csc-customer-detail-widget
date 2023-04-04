import React from "react";
import image from "../image/visa.png";
import image1 from "../image/deliveryicon.png";
import AutoReplenish from "./AutoReplenish";
import getDate from "../DateFormatter";

const sameDayData = {
  OrderId: "",
  title: "Same-Day Unlimited",
  since: 1678774018773,
  status: "active",
  annualFee: "49.00 ",
  expiry: 1678774018773,
  paymentmethod: "visa",
  payment: "*1234",
};

const Subscription = () => {
  return (
    <div>
      <div>
        <h1 className="font-bold text-xl mt-5 ">Subscriptions</h1>
      </div>
      <div>
        <hr className="  h-1 bg-black mr-6  mt-6"></hr>
      </div>

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
              ? `Member since ${getDate(sameDayData.since)}`
              : "Your subscription has been cancelled"}
          </div>
        </div>
      </div>
      <div className="flex space-x-9 mt-4">
        <div className="basis-1/5 text-sm font-bold ">
          {sameDayData.status === "active"
            ? `$ ${sameDayData.annualFee} Annually `
            : ""}
        </div>
        <div className="basis-1/3 text-sm text-gray-600 mr-6 ">
          {sameDayData.status === "active"
            ? `Renews ${getDate(sameDayData.expiry)}`
            : ""}
        </div>
        <div className="flex basis-1/2 justify-end text-sm text-blue-600 pr-5 mt-1">
          {sameDayData.status === "active" ? (
            <button>Cancel Subscription</button>
          ) : (
            ""
          )}
        </div>
      </div>

      <div className="flex  mt-6 mb-5 ">
        <div className="basis-1/5 text-sm font-bold ">Payment Method</div>
        <div className="flex basis-1/3 space-x-5  ">
          <div className=" w-16 h-8 pr-6 ml-7">
            {sameDayData.paymentmethod === "visa" ? (
              <img src={image} alt="" />
            ) : (
              <img src="" alt="" />
            )}
          </div>
          <div className="text-sm ">
            {sameDayData.paymentmethod === "visa"
              ? `visa ${sameDayData.payment}`
              : ""}
          </div>
        </div>
        <div className="basis-1/2 text-right text-sm text-blue-600 mr-6">
          {sameDayData.status === "active" ? <button>Edit</button> : ""}
        </div>
      </div>

      <div className="mr-6">
        <hr></hr>
      </div>

      <AutoReplenish />
    </div>
  );
};
export default Subscription;
