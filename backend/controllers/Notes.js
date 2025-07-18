const Notes = require("../models/Notes");

// Create Note
const createNote = async (req, res) => {
  try {
    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ error: "Content is required" });
    }
    const note = new Notes({ content });
    await note.save();
    res.status(201).json(note);
  } catch (error) {
    res.status(500).json({ error: "Failed to create note" });
  }
};

// Get All Notes
const getNotes = async (req, res) => {
  try {
    const notes = await Notes.find().sort({ updatedAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch notes" });
  }
};

// Update Notes
const updateNote = async (req, res) => {
  try {
    const { content } = req.body;
    const note = await Notes.findByIdAndUpdate(
      req.params.id,
      { content, updatedAt: Date.now() },
      { new: true }
    );
    if (!note) return res.status(404).json({ error: "Notes not found" });
    res.json(note);
  } catch (error) {
    res.status(500).json({ error: "Failed to update note" });
  }
};

// Delete Notes
const deleteNote = async (req, res) => {
  try {
    const note = await Notes.findByIdAndDelete(req.params.id);
    if (!note) return res.status(404).json({ error: "Notes not found" });
    res.json({ message: "Note deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete note" });
  }
};


module.exports = {
    createNote,
    getNotes,
    updateNote,
    deleteNote,

}