import React from "react";
import SeparationLine from "../SeparationLine/SeparationLine";
import CustomerHeader from "./CustomerHeader/CustomerHeader";
import CustomerInformation from "./CustomerInformation/CustomerInformation";

const CustomerHeaderExport = () => {
  const information = {
    firstName: "Lindey",
    lastName: "Smith",
    email: "username@gmail.com",
    password: "************",
    birthday: 1678774018773,
    birthdayGift: true,
  };
  return (
    <>
      <CustomerHeader information={information} />
      <SeparationLine />
      <CustomerInformation information={information} />
    </>
  );
};

export default CustomerHeaderExport;
