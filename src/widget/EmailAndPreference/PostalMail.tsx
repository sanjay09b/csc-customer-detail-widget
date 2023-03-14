import React from "react";

const PostalMail = (props: any) => {
  return (
    <div className="flex mb-7 mx-4 my-3">
      <div className="font-bold text-base basis-1/6">Postal Mail</div>
      <div className="basis-1/3">
        <div className="flex mx-4 mb-3 space-x-5">
          <div className="font-bold text-sm">Status :</div>
          <div className="text-sm">{props.information.postalStatus}</div>
        </div>
      </div>
      <div className="text-sm mx-4 text-customBlue basis-1/5">
        <button>Edit</button>
      </div>
    </div>
  );
};

export default PostalMail;
