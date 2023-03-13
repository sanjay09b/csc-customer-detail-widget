import React from "react";

const RoughRewardsTable = () => {
  const rougeRewardsDetails: {
    code: string;
    amt: string;
    issueDate: string;
    expDate: string;
    order: string;
    status: string;
    redemption: string;
    location: string;
    cancelledBy: string;
    cancelledDate: string;
  }[] = [
    {
      code: "a-sdnfjsdaasd",
      amt: "$100.00",
      issueDate: "3/14/22",
      expDate: "5/4/23",
      order: "###########",
      status: "Redeemed",
      redemption: "3/2/23",
      location: "###########",
      cancelledBy: "",
      cancelledDate: "",
    },
    {
      code: "a-sdnfjsdaasd",
      amt: "$100.00",
      issueDate: "7/14/23",
      expDate: "10/1/23",
      order: "###########",
      status: "Redeemed",
      redemption: "7/12/22",
      location: "store 760",
      cancelledBy: "",
      cancelledDate: "",
    },
    {
      code: "a-sdnfjsdaasd",
      amt: "$100.00",
      issueDate: "3/2/23",
      expDate: "5/23/23",
      order: "###########",
      status: "Expired",
      redemption: "",
      location: "",
      cancelledBy: "",
      cancelledDate: "",
    },
    {
      code: "a-sdnfjsdaasd",
      amt: "$100.00",
      issueDate: "2/1/23",
      expDate: "4/21/23",
      order: "###########",
      status: "Expired",
      redemption: "",
      location: "",
      cancelledBy: "Name",
      cancelledDate: "7/12/22",
    },
    {
      code: "a-sdnfjsdaasd",
      amt: "$100.00",
      issueDate: "7/7/23",
      expDate: "10/2/23",
      order: "###########",
      status: "Cancelled",
      redemption: "",
      location: "",
      cancelledBy: "Name",
      cancelledDate: "7/12/22",
    },
  ];

  const indexOfLast: number = rougeRewardsDetails.length - 1;

  return (
    <div className="overflow-x-auto w-full">
      <table className="table-auto w-full">
        <thead>
          <tr className="border-b-2 gray-300">
            <td className="pl-0 pr-3 py-4 text-left leading-4 font-normal text-sm">
              RRC Code
            </td>
            <td className="px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal">
              RRC Amnt
            </td>
            <td className="px-4 py-4 text-sm text-left leading-4 font-normal">
              Issue Date
            </td>

            <td className="px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal">
              Exp Date
            </td>

            <td className="px-4 py-4 text-sm text-left leading-4 font-normal">
              Order #
            </td>

            <td className="px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal">
              Status
            </td>

            <td className="px-4 py-4 text-sm  text-left leading-4 overflow-hidden font-normal">
              Redemption
            </td>

            <td className="px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal">
              Location
            </td>

            <td className="px-4 py-4 text-sm text-left leading-4 font-normal">
              Cancelled By
            </td>

            <div className="px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal">
              Cancelled Date
            </div>
          </tr>
        </thead>
        <tbody>
          {rougeRewardsDetails.map((detail: any, index: any): any => {
            return (
              <tr key={index}>
                <td
                  className={
                    "pl-0 pr-3 py-4 text-left text-sm leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-100"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.code}
                </td>

                <td
                  className={
                    "px-4 py-4 text-left bg-lightGray text-sm leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.amt}
                </td>

                <td
                  className={
                    "px-4 py-4 text-left text-sm leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.issueDate}
                </td>

                <td
                  className={
                    "px-4 py-4 text-left bg-lightGray text-sm leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.expDate}
                </td>

                <td
                  className={
                    "px-4 py-4 text-sm text-left leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.order}
                </td>

                <td
                  className={
                    "px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.status}
                </td>

                <td
                  className={
                    "px-4 py-4 text-sm text-left leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.redemption}
                </td>

                <td
                  className={
                    "px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.location}
                </td>

                <td
                  className={
                    "px-4 py-4 text-sm text-left leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.cancelledBy}
                </td>

                <td
                  className={
                    "px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal " +
                    `${
                      index === indexOfLast
                        ? "border-b-2 border-b-gray-300"
                        : "border-b-0"
                    }`
                  }
                >
                  {detail.cancelledDate}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RoughRewardsTable;
