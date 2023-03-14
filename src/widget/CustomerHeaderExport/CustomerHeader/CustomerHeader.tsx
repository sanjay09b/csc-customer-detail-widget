import React from "react";
import "./CustomerHeader.css";

const CustomerHeader = (props: any) => {
  return (
    <div className="flex">
      <div className="font-bold text-xl mx-4 my-3">
        {props.information.firstName}'s Personal Information
      </div>
      <div className="mx-4 my-3">
        <div className="flex text-customBlue space-x-4 font-normal text-sm">
          <button>Personal</button>
          <button>Addresses</button>
          <button>Account</button>
          <button>Subscriptions</button>
          <button>Payments</button>
          <button>Notifications</button>
          <button>Audit</button>
        </div>
        <hr></hr>
      </div>
    </div>
  );
};
export default CustomerHeader;
