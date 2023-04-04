import React from "react";

const CustomerAddress = () => {
  const addresses = [
    {
      name: "Lindsay Smith",
      street: "123 Sunrise Street",
      city: "San Francisco",
      state: "CA ",
      zip: "94103-1154",
      ph: "(000)000-000-0000",
    },
    {
      name: "Lindsay Smith",
      street: "123 Sunrise Street",
      city: "San Francisco",
      state: "CA ",
      zip: "94103-1154",
      ph: "(000)000-000-0000",
    },
    {
      name: "Lindsay Smith",
      street: "123 Sunrise Street",
      city: "San Francisco",
      state: "CA ",
      zip: "94103-1154",
      ph: "(000)000-000-0000",
    },
    {
      name: "Lindsay Smith",
      street: "123 Sunrise Street",
      city: "San Francisco",
      state: "CA ",
      zip: "94103-1154",
      ph: "(000)000-000-0000",
    },
  ];

  const addressList = addresses.map((address, index) => (
    <div key={index} className="mt-6">
      <div className="flex  ">
        <div className="basis-1/2">{address.name}</div>
        <div className=" basis-1/2 text-sm text-blue-600 text-right mr-6 ">
          <button>Edit</button>
        </div>
      </div>
      <div>{address.street}</div>
      <div>
        {address.city},{address.state} ,{address.zip}
      </div>
      <div>{address.ph}</div>
    </div>
  ));
  return (
    <div className="mb-5">
      <div className="flex mb-8 ">
        <div className="flex basis-2/6  font-bold text-xl ">
          Saved Addresses
        </div>
        <div className="flex basis-5/6 justify-end  text-blue-600 text-sm mr-6">
          <button>Add New Address</button>
        </div>
      </div>
      <div className="text-left">
        <hr className=" mr-6 h-1 bg-black "></hr>
      </div>
      {addressList.map((addList: any): any => addList)}
    </div>
  );
};
export default CustomerAddress;
