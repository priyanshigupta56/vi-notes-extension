'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const VideoModal = ({ videoId, startTime, isOpen, onClose }) => {
  if (!isOpen) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div className="bg-white p-4 rounded-lg w-[80vw] h-[80vh]">
        <div className="flex justify-end mb-2">
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            Close
          </button>
        </div>
        <div className="relative w-full h-[calc(80vh-4rem)]">
          <iframe
            src={embedUrl}
            className="absolute top-0 left-0 w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

const ManageNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [recentNotes, setRecentNotes] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/note/user-notes`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
          }
        });
        setNotes(data);
        console.log(data);
        // Set recent notes (last 5 notes)
        setRecentNotes(data.slice(0, 5));
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  const groupNotesByCategory = () => {
    return notes.reduce((acc, note) => {
      if (!acc[note.category]) {
        acc[note.category] = [];
      }
      acc[note.category].push(note);
      return acc;
    }, {});
  };

  const handleNoteClick = (note) => {
    const videoId = extractVideoId(note.videoUrl);
    if (videoId) {
      setSelectedVideo({
        videoId,
        startTime: convertTimeToSeconds(note.startTime),
        endTime: convertTimeToSeconds(note.endTime)
      });
    }
  };

  const extractVideoId = (url) => {
    if (!url || typeof url !== 'string') return null;
    const regex = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const convertTimeToSeconds = (timeString) => {
    if (!timeString || typeof timeString !== 'string') return 0;
    const parts = timeString.split(':').map(Number).reverse();
    let seconds = 0;
    if (parts[0]) seconds += parts[0];
    if (parts[1]) seconds += parts[1] * 60;
    if (parts[2]) seconds += parts[2] * 3600;
    return seconds;
  };

  const handleDeleteNote = async (noteId) => {
    if (!window.confirm('Are you sure you want to delete this note?')) return;
    try {
      await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/note/delete/${noteId}`);
      setNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== noteId));
      setRecentNotes((prevNotes) => prevNotes.filter((note) => note.noteId !== noteId));
    } catch (err) {
      alert('Failed to delete note.');
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  const groupedNotes = groupNotesByCategory();
  const categories = Object.keys(groupedNotes);
  const filteredNotes = selectedCategory === 'all' ? notes : groupedNotes[selectedCategory] || [];

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-md fixed h-full overflow-y-auto">
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Video Notes</h2>

          {/* Categories Dropdown Section */}
          <div className="mb-8">
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Categories</h3>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => setOpenDropdown(openDropdown === category ? null : category)}
                    className={`w-full text-left px-3 py-2 rounded-lg flex justify-between items-center ${openDropdown === category ? 'bg-blue-50 text-blue-600' : 'hover:bg-gray-100'
                      }`}
                  >
                    <span>{category}</span>
                    <span>{openDropdown === category ? '▲' : '▼'}</span>
                  </button>
                  {openDropdown === category && (
                    <ul className="ml-2 mt-1 space-y-1">
                      {groupedNotes[category].map((note) => (
                        <li
                          key={note.noteId}
                          className="px-3 py-1 rounded hover:bg-blue-100 cursor-pointer text-sm"
                          onClick={() => handleNoteClick(note)}
                        >
                          {note.videoTitle}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Recent Notes Section */}
          <div>
            <h3 className="text-sm font-semibold text-gray-500 uppercase mb-2">Recent Notes</h3>
            <ul className="space-y-2">
              {recentNotes.map((note) => (
                <li key={note.noteId} className="px-3 py-2 hover:bg-gray-100 rounded-lg">
                  <p className="text-sm font-medium truncate">{note.videoTitle}</p>
                  <p className="text-xs text-gray-500">{note.category}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="ml-64 flex-1 p-8">
        <h1 className="text-3xl font-bold mb-8">
          {selectedCategory === 'all' ? 'All Notes' : selectedCategory}
        </h1>

        {/* Show selected video in iframe */}
        {selectedVideo && (
          <div className="mb-8">
            <div className="relative w-full" style={{ paddingTop: '56.25%' }}>
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?start=${selectedVideo.startTime}&end=${selectedVideo.endTime}&autoplay=1`}
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="Selected Video"
              />
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredNotes.map((note) => (
            <div
              key={note.noteId}
              className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => handleNoteClick(note)}
            >
              <h3 className="font-semibold text-lg mb-2">{note.videoTitle}</h3>
              <div className="text-sm text-gray-600">
                <p>Start Time: {note.startTime}</p>
                <p>End Time: {note.endTime}</p>
                <p className="mt-1">
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                    {note.category}
                  </span>
                </p>
              </div>
              <div className="mt-4 flex justify-end space-x-2">
                <button
                  className="text-blue-500 hover:text-blue-700 text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  Edit
                </button>
                <button
                  className="text-red-500 hover:text-red-700 text-sm font-medium"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDeleteNote(note.noteId);
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredNotes.length === 0 && (
          <div className="text-center text-gray-500 mt-8">
            No notes found in this category.
          </div>
        )}
      </div>
    </div>
  );
};

export default ManageNotes;