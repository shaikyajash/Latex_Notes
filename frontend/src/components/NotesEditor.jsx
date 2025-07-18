import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import katex from "katex";
import "katex/dist/katex.min.css";
import Toolbar from "./Toolbar";
import Preview from "./Preview";
import "../styles/NotesEditor.css";
import NotesList from "./NoteList";

const API_BASE= import.meta.env.API_BASE;
console.log("API_BASE:", API_BASE);

const NotesEditor = () => {
  const [latex, setLatex] = useState("");
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const textareaRef = useRef(null);

  useEffect(() => {
    fetchNotes();
  }, []);

  const fetchNotes = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_BASE}/notes`);
      setNotes(data);
    } catch (error) {
      console.error("Error fetching notes:", error);
    }
    setLoading(false);
  };

  const handleInsert = (code) => {
    const textarea = textareaRef.current;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const newText =
      latex.substring(0, start) + code + latex.substring(end);
    setLatex(newText);
    setTimeout(() => {
      textarea.selectionStart = textarea.selectionEnd = start + code.length;
      textarea.focus();
    }, 0);
  };

  const saveNote = async () => {
    if (!latex.trim()) return alert("Cannot save empty note!");
    setSaving(true);
    try {
      let res;
      if (editingId) {
        res = await axios.put(`${API_BASE}/notes/${editingId}`, { content: latex });
        setNotes(notes.map(n => (n._id === editingId ? res.data : n)));
        setEditingId(null);
      } else {
        res = await axios.post(`${API_BASE}/notes`, { content: latex });
        setNotes([res.data, ...notes]);
      }
      setLatex("");
    } catch (error) {
      console.error("Save error:", error);
      alert("Failed to save note!");
    }
    setSaving(false);
  };

  const deleteNote = async (id) => {
    if (!window.confirm("Delete this note?")) return;
    try {
      await axios.delete(`${API_BASE}/notes/${id}`);
      setNotes(notes.filter(n => n._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  const loadNote = (note) => {
    setLatex(note.content);
    setEditingId(note._id);
  };

  return (
    <div className="notes-editor-container">
      <h2>KaTeX Notes Editor</h2>
      <Toolbar onInsert={handleInsert} />
      <textarea
        ref={textareaRef}
        rows={8}
        className="latex-textarea"
        value={latex}
        onChange={(e) => setLatex(e.target.value)}
        placeholder="Type LaTeX here or use toolbar"
      />
      <button onClick={saveNote} className="save-button" disabled={saving}>
        {saving ? "Saving..." : editingId ? "Update Note" : "Save Note"}
      </button>
      <Preview content={latex} />
      <NotesList
        notes={notes}
        loading={loading}
        onDelete={deleteNote}
        onLoad={loadNote}
      />
    </div>
  );
};

export default NotesEditor;
