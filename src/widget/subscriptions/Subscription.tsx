import React from "react";

const Subscription = () => {
  const sameDayData = [
    {
      title: "Same-Day Unlimited",
      since: " Member since May 5,2022",
      status: "$49.00 Annually",
      expiry: "Renews Jun 5,2022",
      button1: "Cancel Subscription",
      paymentmethod: "Payment Method",
      cardimage: (
        <img
          src="https://i.pinimg.com/originals/07/0d/45/070d45fef2019326433d9e373637eab2.jpg"
          alt=""
        />
      ),
      payment: "VISA *1234",
      button2: "Edit",
    },
    {
      title: " Auto Replenish",
      since: " Your subscription has been cancelled",
      status: "Cancelled",
      expiry: "Expired on Apr 21,2022",
      button1: "Renew",
      paymentmethod: "",
      cardimage: <img src="" />,
      payment: "",
      button2: "",
    },
  ];

  return (
    <div>
      <div>
        <h1 className="font-bold text-xl mt-5 ">Subscriptions</h1>
      </div>
      <div>
        <hr className="  h-1 bg-black mr-6  mt-6"></hr>
      </div>
      {sameDayData.map((data: any): any => {
        return (
          <>
            <div className="flex mt-4 ">
              <div className="w-6">
                <img
                  src="https://i.pinimg.com/originals/07/0d/45/070d45fef2019326433d9e373637eab2.jpg"
                  alt=""
                />
              </div>
              <div>
                <div>
                  <h1 className="flex basis-1/2  font-bold text-xl pl-4">
                    {data.title}
                  </h1>
                </div>
                <div className="text-sm pl-4 font-normal ">{data.since}</div>
              </div>
            </div>
            <div className="flex space-x-9 mt-4">
              <div className="basis-1/5 text-sm font-bold ">{data.status}</div>
              <div className="basis-1/3 text-sm text-gray-600 mr-6 ">
                {data.expiry}
              </div>
              <div className="flex basis-1/2 justify-end text-sm text-blue-600 pr-5 mt-1">
                <button>{data.button1}</button>
              </div>
            </div>

            <div className="flex  mt-6 mb-5 ">
              <div className="basis-1/5 text-sm font-bold ">
                {data.paymentmethod}
              </div>
              <div className="flex basis-1/3 space-x-5  ">
                <div className=" w-1/5 h-1/4 pr-6 ml-7">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgIgCExW03waSVPRa88Mo_9PcnCpBj7ByTRA&usqp=CAU"
                    alt=""
                  />
                </div>
                <div className="text-sm ">{data.payment}</div>
              </div>
              <div className="basis-1/2 text-right text-sm text-blue-600 mr-6">
                <button>{data.button2}</button>
              </div>
            </div>

            <div>
              <hr></hr>
            </div>
          </>
        );
      })}
      ;
    </div>
  );
};
export default Subscription;
