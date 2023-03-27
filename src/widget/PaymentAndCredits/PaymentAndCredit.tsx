import React from "react";
import BreakLine from "../BreakLine/BreakLine";
import AddButton from "../Button/AddButton";
import { getExpiredDate } from "../DateFormater";

const PaymentAndCredits = () => {
  const paymentInfo = {
    cardType: "VISA",
    cardNumber: "1111",
    expired: 1678774018773,
    default: "true",
  };
  return (
    <div>
      <div className="mt-5 text-black font-bold text-xl mb-3 ">
        Payment & Credits
      </div>
      <div className="mt-3 mb-3 mr-5">
        <BreakLine />
      </div>
      <div className="mt-3 flex mb-3">
        <div className="basis-1/6 text-base font-bold leading-5">
          Credit / Debit cards
        </div>
        <div className="flex flex-col basis-1/6 ml-4 text-left text-sm">
          <div className="h-9 mb-3">
            <div className="leading-4 ">
              {paymentInfo.cardType} ending in {paymentInfo.cardNumber}
            </div>
            <div className="leading-4 ">
              Expires {getExpiredDate(paymentInfo.expired)}
            </div>
          </div>
          <div className="mt-3 h-9 text-sm text-gray-400 leading-4">
            Default Card
          </div>
        </div>
        <div className="basis-4/6 text-right mr-5">
          <AddButton />
        </div>
      </div>
      <div className="mt-3 mb-3">
        <hr className="border-grey solid border-3 mr-5"></hr>
      </div>

      <div className="mt-3 flex space-x-4">
        <div className="basis-1/6 text-base font-bold leading-5">
          Gift cards
        </div>
        <div className="basis-5/6">
          <div className="h-14 mb-3">
            <div className="text-sm font-bold leading-4 ">
              Gift Card balance
            </div>
            <div className="text-sm leading-4">
              To check your current balance, enter the card's 16 digit number
              and PIN
            </div>
          </div>
          <div className="mt-3">
            <input
              type="number"
              name="cardNumber"
              className="flex-auto h-11 w-80 rounded text-left border-2 border-black-700 placeholder:normal placeholder:text-grey bg-white  pl-3 pb-3 pt-3 focus:border-black  sm:text-sm "
              placeholder="Card Number*"
            ></input>
          </div>
          <div className="mt-2">
            <input
              type="number"
              name="pin"
              className=" flex-auto h-11 w-80 rounded text-left border-2 border-black-700 placeholder:normal placeholder:text-grey bg-white mb-2 pl-3 pb-3 pt-3  focus:border-black  sm:text-sm"
              placeholder="PIN*"
            ></input>
          </div>
          <div className="mt-2">
            <button className=" h-11 w-20 text-black border-2 border-black text-sm font-bold text-center mb-2 text-black rounded-full">
              Check
            </button>
          </div>
          <div className="mt-2 text-xs leading-3 text-gray-400">
            Sephora uses Google ReCaptcha and users are subject to Google's
          </div>
          <div className="text-xs leading-3 mb-5">
            <a href="google.com" className="underline text-blue-600">
              privacy policy
            </a>{" "}
            &{" "}
            <a href="google.com" className="underline text-blue-600">
              terms
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PaymentAndCredits;
