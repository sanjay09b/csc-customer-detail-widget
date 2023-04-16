import React from "react"; // we need this to make JSX compile
import { WidgetProps } from "./Interface";
import HeaderExport from "./CustomerHeader/HeaderExport";
import AccountDetailsExport from "./AccountAndBIDetails/AccountDetailsExport";
import Notes from "./notes/Notes";
import Transaction from "./TransactionHistory/Transaction";
import customStyle from "./customStyle";
import SeparationLine from "./SeparationLine/SeparationLine";
import "./style.css";

const Widget = ({ title = "" }: WidgetProps): JSX.Element | null => (
  <div className={customStyle.exportWrapper}>
    <div>{title}</div>
    <HeaderExport />
    <AccountDetailsExport />
    <div className={customStyle.notesAndTransaction}>
      <Notes />
      <Transaction />
    </div>
    <SeparationLine />
  </div>
);

export default Widget;
