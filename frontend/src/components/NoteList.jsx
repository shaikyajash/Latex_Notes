import React from "react";
import NoteItem from "./NoteItem";

const NotesList = ({ notes = [], loading, onDelete, onLoad }) => {
  return (
    <div>
      <h3>Saved Notes {loading && "(Loading...)"}</h3>
      <ul className="notes-list">
        {(!Array.isArray(notes) || notes.length === 0) && !loading && <li>No notes saved yet.</li>}
        {Array.isArray(notes) &&
          notes.map((note) => (
            <NoteItem key={note._id} note={note} onDelete={onDelete} onLoad={onLoad} />
          ))}
      </ul>
    </div>
  );
};

export default NotesList;
