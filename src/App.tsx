import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Widget from "./widget";
import ExpandedNotesExport from "./widget/ExpandedTable/ExpandedNotesExport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Widget />} />,
        <Route path="/expandedNotes" element={<ExpandedNotesExport />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
