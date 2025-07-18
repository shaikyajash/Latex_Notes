import React from "react";

const NoteItem = ({ note, onDelete, onLoad }) => {
  return (
    <li className="note-item">
      <span onClick={() => onLoad(note)} title="Click to load this note">
        {note.content.length > 30
          ? note.content.substring(0, 30) + "..."
          : note.content}
      </span>
      <button className="delete-button" onClick={() => onDelete(note._id)}>
        Delete
      </button>
    </li>
  );
};

export default NoteItem;
