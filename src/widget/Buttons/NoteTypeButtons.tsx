import CustomStyles from "../CustomStyles";

const NoteTypeButton = (props: { noteType: string }): JSX.Element => {
  switch (props.noteType) {
    case "Order":
      return <div className={CustomStyles.notesTypeButtons.order}>Order</div>;
    case "System":
      return <div className={CustomStyles.notesTypeButtons.system}>System</div>;
    case "Profile":
      return (
        <div className={CustomStyles.notesTypeButtons.profile}>Profile</div>
      );
    default:
      return <div>Unknown Error</div>;
  }
};

export default NoteTypeButton;
