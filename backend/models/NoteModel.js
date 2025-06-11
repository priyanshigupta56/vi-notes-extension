const mongoose = require('mongoose');

// Define the schema for a note
const noteSchema = new mongoose.Schema({
  noteId: {
    type: String,
    required: true,
    unique: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // Reference to the User model
    required: true,
  },
  videoTitle: {
    type: String,
    required: true,
  },

  videoUrl: {
    type: String, // <-- Add this line
    required: true,
  },
  category: {
    type: String,
    enum: ['Important', 'Doubt', 'Rewatch', 'Other'], // Optional: predefined categories
    required: true,
  },
  startTime: {
    type: String, // Use String to store time in "HH:MM:SS" format
    required: true,
  },
  endTime: {
    type: String, // Use String to store time in "HH:MM:SS" format
    required: true,
  },
}, { timestamps: true }); // Automatically adds createdAt and updatedAt fields

// Create the model
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;