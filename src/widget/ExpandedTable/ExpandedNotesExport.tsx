import ExpandedNotes from "./ExpandedNotes";
import customStyle from "../customStyle";

const ExpandedNotesExport = (): JSX.Element => {
  return (
    <div className={customStyle.exportWrapper}>
      <ExpandedNotes />
    </div>
  );
};

export default ExpandedNotesExport;
