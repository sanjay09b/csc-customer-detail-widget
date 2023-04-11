import React from "react";
import customStyle from "../customStyle";
import EditIcon from "../ui/EditIcon";
import Seperator from "../ui/Seperator";

const NotesHeader: React.FC<{ count: number }> = (props) => {
  return (
    <div className={customStyle.notesMainHeader}>
      <div className={customStyle.notesHeader}>
        <div className={customStyle.notes}>Notes</div>
        <a href="#" className={customStyle.viewAll}>
          View all({props.count})
        </a>
        <div className={customStyle.composeNotes}>
          <a href="#" className={customStyle.addNote}>
            Add Note
          </a>
          <button>
            <EditIcon />
          </button>
        </div>
      </div>
      <Seperator />
    </div>
  );
};

export default NotesHeader;
