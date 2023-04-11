import axios from "axios";
import React, { useEffect, useState } from "react";
import { NoteDefinition } from "../Interface";
import NotesContainer from "./NotesContainer";
import NotesHeader from "./NotesHeader";
import customStyle from "../customStyle";

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<NoteDefinition[]>(null);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState("");
  useEffect(() => {
    const getNotesData: () => Promise<void> = async () => {
      const url =
        "https://6409df426ecd4f9e18bdd647.mockapi.io/customers/641016776/notes";
      try {
        if (loading) {
          const response = await axios.get(url);
          if (response.data.length < 4) {
            setCount(response.data.length);
            // setNotes(null);
            setNotes(response.data);
          } else {
            setCount(response.data.length);
            setNotes(response.data.slice(0, 4));
          }
          setLoading(false);
        }
      } catch (errorMsg) {
        console.log(errorMsg);
        // setError(errorMsg);
      }
    };
    getNotesData();
  }, []);

  return (
    <div className={customStyle.notesSummary}>
      <NotesHeader count={count} />
      {loading ? (
        <div className={customStyle.loading}>Loading...</div>
      ) : (
        <NotesContainer notes={notes} />
      )}
    </div>
  );
};

export default Notes;
