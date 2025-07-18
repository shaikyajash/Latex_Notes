import React from "react";
import NotesEditor from "./components/NotesEditor";
import "./App.css";

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Live LaTeX Notes</h1>
      <NotesEditor />
    </div>
  );
};

export default App;
