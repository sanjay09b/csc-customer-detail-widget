import React from "react";
import Seperator from "../SeperationLine/Seperator";
import { AccountDetails } from "./AccountDetails";

const AccountDetailsExport = (): JSX.Element => {
  return (
    <div>
      <AccountDetails />
      <Seperator />
    </div>
  );
};

export default AccountDetailsExport;
