import React from "react";
import getDateBeginWithDay from "../utils/DateFormatter";
import Seperator from "../ui/Seperator";
import customStyle from "../customStyle";
import { NoteDefinition } from "../Interface";

const Note = ({
  createdAt = null,
  customerId = "",
  description = "",
  contact = "",
  orderId = 0,
}: NoteDefinition): JSX.Element | null => (
  <div className={customStyle.note}>
    <div className={customStyle.noteHeader}>
      <span className={customStyle.contact}>{contact.toUpperCase()}</span>
      <span className={customStyle.date}>{getDateBeginWithDay(createdAt)}</span>
      <span className={customStyle.by}>by</span>
      <span className={customStyle.customerId}>{customerId}</span>
    </div>
    {orderId ? (
      <a href="#" className={customStyle.viewOrder}>
        View Order {orderId}
      </a>
    ) : null}
    <p className={customStyle.description}>{description}</p>

    <Seperator />
  </div>
);

export default Note;
