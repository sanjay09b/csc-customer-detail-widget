import React from "react"; // we need this to make JSX compile

const PointHistoryTable = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const pointUpdateDetails = [
    { month: "Jan", pointUpdate: "##" },
    { month: "Feb", pointUpdate: "-###" },
    { month: "Mar", pointUpdate: "###" },
    { month: "Apr", pointUpdate: "##" },
    { month: "May", pointUpdate: "###" },
    { month: "Jun", pointUpdate: "##" },
    { month: "Jul", pointUpdate: "##" },
    { month: "Aug", pointUpdate: "###" },
    { month: "Sep", pointUpdate: "##" },
    { month: "Oct", pointUpdate: "##" },
    { month: "Nov", pointUpdate: "##" },
    { month: "Dec", pointUpdate: "-###" },
  ];

  const pointBalanceDetails = [
    { month: "Jan", pointBalance: "####" },
    { month: "Feb", pointBalance: "0" },
    { month: "Mar", pointBalance: "####" },
    { month: "Apr", pointBalance: "####" },
    { month: "May", pointBalance: "###" },
    { month: "Jun", pointBalance: "###" },
    { month: "Jul", pointBalance: "###" },
    { month: "Aug", pointBalance: "###" },
    { month: "Sep", pointBalance: "###" },
    { month: "Oct", pointBalance: "###" },
    { month: "Nov", pointBalance: "###" },
    { month: "Dec", pointBalance: "0" },
  ];

  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto  w-full">
        <thead>
          <tr className="border-b-2 border-b-gray-100">
            <td className="pl-0 pr-2 py-4 font-normal text-left leading-4 text-sm">
              Months
            </td>
            {months.map(function (month, index) {
              return (
                <td
                  key={index}
                  className={
                    "px-4 py-4 text-left  leading-4 text-sm font-normal " +
                    `${index % 2 === 0 ? "bg-lightGray" : ""}`
                  }
                >
                  {month}
                </td>
              );
            })}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" pl-0 pr-2 py-4 font-normal text-left leading-4 border-b-2 border-b-gray-100 text-sm">
              Point Update
            </td>
            {pointUpdateDetails.map((detail: any, index: any): any => {
              return (
                <td
                  key={index}
                  className={
                    "px-4 py-4 text-left text-sm leading-4 font-normal border-b-2 border-b-gray-300 " +
                    `${index % 2 === 0 ? "bg-lightGray" : ""}`
                  }
                >
                  {detail.pointUpdate}
                </td>
              );
            })}
          </tr>
          <tr>
            <td className=" pl-0 pr-2 py-4 font-normal text-left leading-4 border-b-2 border-b-gray-100 text-sm">
              Point Balance
            </td>
            {pointBalanceDetails.map((detail: any, index: any): any => {
              return (
                <td
                  key={index}
                  className={
                    "px-4 py-4 text-left text-sm leading-4 font-normal border-b-2 border-b-gray-300 " +
                    `${index % 2 === 0 ? " bg-lightGray" : ""}`
                  }
                >
                  {detail.pointBalance}
                </td>
              );
            })}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PointHistoryTable;
