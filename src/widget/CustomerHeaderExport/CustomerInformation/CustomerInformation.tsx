import React from "react";
import "./CustomerInformation.css";
import { getDate } from "../../DateFormater";

const CustomerInformation = (props: any) => {
  return (
    <div className="mx-4 mb-7">
      <div className="flex my-3">
        <div className="font-bold flex-1 basis-1/6 text-base">Name</div>
        <div className="flex-1 basis-1/3 text-left font-normal text-sm mx-4">
          {props.information.firstName} {props.information.lastName}
        </div>
        <div className="justify-end basis-1/2 flex font-normal text-sm">
          <button className="text-customBlue">Edit</button>
        </div>
      </div>
      <div className="flex my-3">
        <div className="flex-1 basis-1/6 font-bold text-base">Email</div>
        <div className="flex-1 basis-1/3 font-normal text-sm mx-4">
          {props.information.email}
        </div>
        <div className="justify-end flex basis-1/2 space-x-4 font-normal text-sm">
          <button className="text-customBlue">Edit</button>
          <button className="text-customBlue">Remove</button>
        </div>
      </div>
      <div className="flex my-3">
        <div className="flex-1 basis-1/6 font-bold text-base">Password</div>
        <div className="flex-1 basis-1/3 font-normal text-sm mx-4">
          {props.information.password}
        </div>
        <div className="justify-end flex basis-1/2 font-normal text-sm">
          <button className="text-customBlue">Reset Password</button>
        </div>
      </div>
      <div className="flex my-3">
        <div className="flex-1 basis-1/6 font-bold text-base">Birthday</div>
        <div className="flex-1 basis-1/3 font-normal text-sm mx-4">
          <input
            className="rounded p-2 border-slate-200 border-2"
            type="date"
            value={getDate(props.information.birthday)}
          />
          <div className="justify-end flex basis-1/2 font-normal text-sm"></div>
        </div>
        <div className="justify-end flex basis-1/2 font-normal text-sm"></div>
      </div>
      <div className="flex my-3">
        <div className="flex-1 basis-1/6 font-bold text-base">
          Birthday Gift Redeemed:
        </div>
        <div className="flex-1 basis-1/3 font-normal text-sm mx-4">
          <select name="selection">
            <option value="One">Yes</option>
            <option value="Two">No</option>
          </select>
        </div>
        <div className="justify-end flex basis-1/2 font-normal text-sm"></div>
      </div>
    </div>
  );
};

export default CustomerInformation;
