import customStyle from "../customStyle";

const NoteTypeButton = (props: { noteType: string }): JSX.Element => {
  switch (props.noteType) {
    case "Order":
      return <div className={customStyle.notesTypeButtons.order}>Order</div>;
    case "System":
      return <div className={customStyle.notesTypeButtons.system}>System</div>;
    case "Profile":
      return (
        <div className={customStyle.notesTypeButtons.profile}>Profile</div>
      );
    default:
      return <div>Unknown Error</div>;
  }
};

export default NoteTypeButton;
