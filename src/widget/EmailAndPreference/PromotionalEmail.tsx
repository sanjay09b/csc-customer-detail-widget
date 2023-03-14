import React from "react";

const PromotionalEmail = (props: any) => {
  return (
    <>
      <div className="flex mb-7 mx-4 my-3">
        <div className="font-bold text-base basis-1/6">Promotional emails</div>
        <div className="basis-1/3">
          <div className="text-sm mx-4 mb-3">
            We"ll send you special offers, store news and updates on latest
            beauty
          </div>
          <div className="text-sm mx-4 my-3 text-customBlue">
            <button>See sample email</button>
          </div>
          <div className="flex mx-4 my-3 space-x-5">
            <div className="font-bold text-sm">Status :</div>
            <div className="text-sm">{props.information.promotionalStatus}</div>
          </div>
          <div className="flex mx-4 my-3 space-x-5">
            <div className="font-bold text-sm">Frequency :</div>
            <div className="text-sm">{props.information.frequency}</div>
          </div>
          <div className="flex mx-4 my-3 space-x-5">
            <div className="font-bold text-sm">Country :</div>
            <div className="text-sm">{props.information.country}</div>
          </div>
          <div className="flex mx-4 my-3 space-x-5">
            <div className="font-bold text-sm">Postal Code:</div>
            <div className="text-sm">{props.information.postalCode}</div>
          </div>
        </div>
        <div className="text-sm text-customBlue basis-1/5 mx-4 mb-3">
          <button>Edit</button>
        </div>
      </div>
    </>
  );
};

export default PromotionalEmail;
