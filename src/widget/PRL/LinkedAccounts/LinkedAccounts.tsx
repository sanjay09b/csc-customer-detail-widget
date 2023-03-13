import React from "react";
import LinkedAccountsHeader from "./LinkedAccountsHeader/LinkedAccountsHeader";
import LinkedAccountsTable from "./LinkedAccountsTable/LinkedAccountsTable";

const LinkedAccounts = () => {
  return (
    <div className="mb-5">
      <LinkedAccountsHeader />
      <LinkedAccountsTable />
    </div>
  );
};

export default LinkedAccounts;
