import React from "react";
import { getDateWithMonthAndDate } from "../../DateFormater";

const LinkedAccountsTable = () => {
  const linkedAccountDetails = [
    { email: "username1@gmail.com", dateAdded: 1647251543000 },
    { email: "username14@gmail.com", dateAdded: 1647251543000 },
    { email: "username21gmail.com", dateAdded: 1647251543000 },
    { email: "username12gmail.com", dateAdded: 1647251543000 },
    { email: "username10@gmail.com", dateAdded: 1647251543000 },
  ];

  return (
    <div className="md:text-sm lg:text-sm text-base">
      <div className="grid grid-cols-3 gap-0 border-b-2 gray-300">
        <div className="pl-0 pr-4 py-4 text-left font-normal leading-4">
          Emails
        </div>
        <div className="px-4 py-4 text-left font-normal leading-4">
          Date Added
        </div>
      </div>

      {linkedAccountDetails.map((detail, index) => {
        return (
          <div className="grid grid-cols-3 gap-0 " key={index}>
            <div
              className="pl-0 pr-4 py-4 text-left font-normal leading-4 text-sm"
              key={index}
            >
              {detail.email}
            </div>

            <div
              className="px-4 py-4 text-left font-normal leading-4 text-sm"
              key={index}
            >
              {getDateWithMonthAndDate(detail.dateAdded)}
            </div>

            <div
              className=" px-4 py-4 text-right leading-4 font-normal text-sm"
              key={index}
            >
              <button className="text-customBlue">remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LinkedAccountsTable;
