import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import customStyle from "../customStyle";
import EditIcon from "../ui/EditIcon";
import ExpandedNotesExport from "../ExpandedTable/ExpandedNotesExport";
import Seperator from "../SeperationLine/Seperator";

const NotesHeader: React.FC<{ count: number }> = (props) => {
  return (
    <div className={customStyle.notesMainHeader}>
      <div className={customStyle.notesHeader}>
        <div className={customStyle.notes}>Notes</div>
        <NavLink className={customStyle.viewAll} to="/expandedNotes">
          View all({props.count})
        </NavLink>
        <div className={customStyle.composeNotes}>
          <NavLink to="#" className={customStyle.addNote}>
            Add Note
          </NavLink>
          <button>
            <EditIcon />
          </button>
        </div>
      </div>
      <Seperator />
      <Routes>
        <Route path="/expandedNotes" element={<ExpandedNotesExport />} />
      </Routes>
    </div>
  );
};

export default NotesHeader;
