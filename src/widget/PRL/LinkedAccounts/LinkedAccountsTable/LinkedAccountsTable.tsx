import React from "react";

const LinkedAccountsTable = () => {
  const linkedAccountDetails: { email: string; dateAdded: string }[] = [
    { email: "username1@gmail.com", dateAdded: "MM/DD" },
    { email: "username14@gmail.com", dateAdded: "MM/DD" },
    { email: "username21gmail.com", dateAdded: "MM/DD" },
    { email: "username12gmail.com", dateAdded: "MM/DD" },
    { email: "username10@gmail.com", dateAdded: "MM/DD" },
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
      <div className="grid grid-cols-3 gap-0 ">
        {linkedAccountDetails.map((detail: any, index: any): any => {
          return (
            <>
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
                {detail.dateAdded}
              </div>

              <div
                className=" px-4 py-4 text-right leading-4 font-normal text-sm"
                key={index}
              >
                <button className="text-customBlue">remove</button>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default LinkedAccountsTable;
