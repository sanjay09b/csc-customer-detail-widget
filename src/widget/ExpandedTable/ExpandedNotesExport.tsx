import React from "react";
import { ExpandedNotes } from "./ExpandedNotes";
import CustomStyle from "../CustomStyles";

const ExpandedNotesExport = (): JSX.Element => {
  return (
    <div className={CustomStyle.exportWrapper}>
      <ExpandedNotes />
    </div>
  );
};

export default ExpandedNotesExport;
