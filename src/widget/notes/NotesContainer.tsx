import React from "react";
import Note from "./Note";
import { NoteDefinition } from "../Interface";
import customStyle from "../customStyle";

const NotesContainer: React.FC<{ notes: NoteDefinition[] }> = (props) => {
  return (
    <div className={customStyle.notesContainer}>
      {props.notes &&
        props.notes.map((note: NoteDefinition) => (
          <Note
            description={note.description}
            createdAt={note.createdAt}
            contact={note.contact}
            customerId={note.customerId}
            orderId={note.orderId}
            key={note.id}
          />
        ))}
    </div>
  );
};

export default NotesContainer;
