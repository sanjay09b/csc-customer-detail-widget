import React from "react";
import CustomStyle from "../CustomStyles";

const AddNoteButton = (): JSX.Element => {
  return (
    <>
      <button className={CustomStyle.addNoteButton}>Add Note</button>
    </>
  );
};

export default AddNoteButton;
