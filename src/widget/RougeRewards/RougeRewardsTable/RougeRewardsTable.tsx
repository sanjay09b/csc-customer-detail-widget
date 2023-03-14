import React from "react";
import { getDateBeginWithMonth } from "../../DateFormater";
import formatAmount from "../../AmountFormatter";

const RoughRewardsTable = () => {
  const rougeRewardsDetails = [
    {
      code: "a-sdnfjsdaasd",
      amt: 100,
      issueDate: 1647251543000,
      expDate: 1683211471000,
      order: "###########",
      status: "Redeemed",
      redemption: 1677750743000,
      location: "###########",
      cancelledBy: "",
      cancelledDate: null,
    },
    {
      code: "a-sdnfjsdaasd",
      amt: 100,
      issueDate: 1689328343000,
      expDate: 1696171471000,
      order: "###########",
      status: "Redeemed",
      redemption: 1657637071000,
      location: "store 760",
      cancelledBy: "",
      cancelledDate: null,
    },
    {
      code: "a-sdnfjsdaasd",
      amt: 100,
      issueDate: 1677750743000,
      expDate: 1684853071000,
      order: "###########",
      status: "Expired",
      redemption: null,
      location: "",
      cancelledBy: "",
      cancelledDate: null,
    },
    {
      code: "a-sdnfjsdaasd",
      amt: 100,
      issueDate: 1675263501000,
      expDate: 1682088271000,
      order: "###########",
      status: "Expired",
      redemption: null,
      location: "",
      cancelledBy: "Name",
      cancelledDate: 1657637071000,
    },
    {
      code: "a-sdnfjsdaasd",
      amt: 100,
      issueDate: 1688741901000,
      expDate: 1696257871000,
      order: "###########",
      status: "Cancelled",
      redemption: null,
      location: "",
      cancelledBy: "Name",
      cancelledDate: 1657637071000,
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

            <td className="px-4 py-4 text-sm text-left leading-4 font-normal">
              Redemption
            </td>

            <td className="px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal">
              Location
            </td>

            <td className="px-4 py-4 text-sm text-left leading-4 font-normal">
              Cancelled By
            </td>

            <td className="px-4 py-4 text-sm text-left bg-lightGray leading-4 font-normal">
              Cancelled Date
            </td>
          </tr>
        </thead>
        <tbody>
          {rougeRewardsDetails.map((detail, index) => {
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
                  {formatAmount(detail.amt)}
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
                  {getDateBeginWithMonth(detail.issueDate)}
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
                  {getDateBeginWithMonth(detail.expDate)}
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
                  {getDateBeginWithMonth(detail.redemption)}
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
                  {getDateBeginWithMonth(detail.cancelledDate)}
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
