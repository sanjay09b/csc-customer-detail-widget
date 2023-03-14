import React from "react";

const Notificatios = (props: any) => {
  return (
    <div className="flex mb-7 mx-4 my-3">
      <div className="font-bold text-base basis-1/6">
        Notifications & Reminders
      </div>
      <div className="basis-1/3">
        <div className="text-sm mx-4 mb-3">
          We"ll send you special offers, store news and updates on latest beauty
        </div>
        <div className="text-sm mx-4 my-3 text-blue-600">
          <button>See sample email</button>
        </div>
        <div className="flex mx-4 my-3 space-x-5">
          <div className="font-bold text-sm">Status :</div>
          <div className="text-sm">{props.information.notificationStatus}</div>
        </div>
      </div>
      <div className="text-sm mx-4 mb-3 text-blue-600 basis-1/5">
        <button>Edit</button>
      </div>
    </div>
  );
};

export default Notificatios;
