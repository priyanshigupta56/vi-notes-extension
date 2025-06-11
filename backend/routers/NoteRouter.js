const express = require('express');
const router = express.Router();
const Note = require('../models/noteModel'); // Import the Note model
const auth = require('../middleware/auth');

// === Create a new note ===
router.post('/create', async (req, res) => {
  console.log(req.body); 
  
  try {
    const note = new Note({
      ...req.body,
      // userId: req.user.id, // Set userId from token
      userId: '681f563ca2727a2bab2ec5f4', // Set userId from token
    });

    await note.save();
    res.status(201).json({ message: 'Note created successfully', note });
  } catch (error) {
    res.status(500).json({ message: 'Error creating note', error: error.message });
  }
});

// === Get all notes ===
router.get('/', async (req, res) => {
  try {
    const notes = await Note.find();
    res.status(200).json(notes);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching notes', error: error.message });
  }
});

// === Get a specific note by ID ===

router.get('/user-notes', auth, async (req, res) => {
  console.log(req.user._id);
  
  try {
    const note = await Note.find({ userId: req.user._id });
    // if (!note) {
    //   return res.status(404).json({ message: 'Note not found' });
    // }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error: error.message });
  }
});

router.get('/getbyid/:id', async (req, res) => {
  try {
    const note = await Note.findOne({ noteId: req.params.id });
    if (!note) {
      return res.status(404).json({ message: 'Note not found' });
    }
    res.status(200).json(note);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching note', error: error.message });
  }
});

// === Update a note ===
router.put('/update/:id', async (req, res) => {
  try {
    const updatedNote = await Note.findOneAndUpdate(
      { noteId: req.params.id },
      req.body,
      { new: true } // Return the updated document
    );

    if (!updatedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note updated successfully', note: updatedNote });
  } catch (error) {
    res.status(500).json({ message: 'Error updating note', error: error.message });
  }
});

// === Delete a note ===
router.delete('/delete/:id', async (req, res) => {
  try {
    const deletedNote = await Note.findOneAndDelete({ noteId: req.params.id });

    if (!deletedNote) {
      return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json({ message: 'Note deleted successfully', note: deletedNote });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting note', error: error.message });
  }
});

module.exports = router;