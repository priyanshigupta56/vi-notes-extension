if (!document.getElementById("vidionotes-floating-btn")) {
  // === Floating Button ===
  const button = document.createElement("button");
  button.id = "vidionotes-floating-btn";
  button.style.position = "fixed";
  button.style.bottom = "20px";
  button.style.right = "20px";
  button.style.width = "60px";
  button.style.height = "60px";
  button.style.backgroundColor = "#f8d7da";
  button.style.border = "none";
  button.style.borderRadius = "50%";
  button.style.zIndex = "10000";
  button.style.cursor = "pointer";
  button.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.2)";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";
  button.style.padding = "0"; // Remove padding
  button.style.overflow = "hidden"; // Hide overflow

  // Add an image or icon to the button
  const logo = document.createElement("img");
  logo.src = chrome.runtime.getURL("logoimgpart2.png");
  logo.alt = "Note Logo";
  logo.style.width = "60px"; // Reduce size to fit inside circle
  logo.style.height = "60px";
  logo.style.objectFit = "contain";
  logo.style.borderRadius = "50%"; // Make image circular
 
  button.appendChild(logo);

  document.body.appendChild(button);

  // === Modal (Draggable + Resizable) ===
  const modal = document.createElement("div");
  modal.id = "vidionotes-modal";
  modal.style.position = "fixed";
  modal.style.zIndex = "10001";
  modal.style.display = "none";
  modal.style.backgroundColor = "#fff";
  modal.style.border = "1px solid #ccc";
  modal.style.borderRadius = "10px";
  modal.style.padding = "10px";
  modal.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.3)";
  modal.style.maxHeight = "80vh"; // Maximum height of 80% of viewport height
  modal.style.maxWidth = "90vw"; // Maximum width of 90% of viewport width
  modal.style.height = "400px"; // Default height
  modal.style.width = "340px"; // Default width
  modal.style.overflowY = "auto"; // Enable vertical scrolling if content exceeds height
  modal.style.resize = "both";
  modal.style.overflow = "auto";
  modal.style.cursor = "move";

  function renderModalContent() {
    modal.innerHTML = `
      <div id="vidionotes-header" style="cursor: move; font-weight: bold; color: #e63946; padding: 8px 0;">
        Add Timestamped Note
      </div>
      <textarea id="note-text" style="width: 100%; height: 60px; margin-bottom: 10px; padding: 8px; border-radius: 6px; border: 1px solid #ccc;" placeholder="Write your note..."></textarea>
      <label style="font-size: 14px; font-weight: 500; display: block; margin-bottom: 4px;">Select Category</label>
      <select id="note-category" style="width: 100%; padding: 6px; margin-bottom: 12px; border: 1px solid #ccc; border-radius: 6px;">
        <option value="">-- Choose Category --</option>
        <option value="Important">Important</option>
        <option value="Doubt">Doubt</option>
        <option value="Rewatch">Rewatch</option>
      </select>
      <div style="display: flex; gap: 10px; margin-bottom: 12px;">
        <input id="start-time" type="text" placeholder="Start Time (e.g. 01:20)" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #ccc;">
        <button id="set-start-time" style="padding: 6px; background-color: #e63946; color: white; border: none; border-radius: 6px;">Set Start</button>
      </div>
      <div style="display: flex; gap: 10px; margin-bottom: 12px;">
        <input id="end-time" type="text" placeholder="End Time (e.g. 02:00)" style="flex: 1; padding: 6px; border-radius: 6px; border: 1px solid #ccc;">
        <button id="set-end-time" style="padding: 6px; background-color: #e63946; color: white; border: none; border-radius: 6px;">Set End</button>
      </div>
      <div style="text-align: right;">
        <button id="vidionotes-cancel" style="margin-right: 10px; background-color: #ccc; border: none; padding: 6px 12px; border-radius: 6px;">Cancel</button>
        <button id="vidionotes-save" style="background-color: #e63946; color: white; border: none; padding: 6px 12px; border-radius: 6px;">Save</button>
      </div>
    `;

    // Attach event listeners for the note form
    const setStartTimeBtn = modal.querySelector("#set-start-time");
    const setEndTimeBtn = modal.querySelector("#set-end-time");
    const startTimeInput = modal.querySelector("#start-time");
    const endTimeInput = modal.querySelector("#end-time");

    setStartTimeBtn.addEventListener("click", () => {
      const video = document.querySelector("video");
      if (video) {
        const currentTime = video.currentTime;
        startTimeInput.value = new Date(currentTime * 1000).toISOString().substr(11, 8);
      } else {
        alert("No video found on the page.");
      }
    });

    setEndTimeBtn.addEventListener("click", () => {
      const video = document.querySelector("video");
      if (video) {
        const currentTime = video.currentTime;
        endTimeInput.value = new Date(currentTime * 1000).toISOString().substr(11, 8);
      } else {
        alert("No video found on the page.");
      }
    });

    modal.querySelector("#vidionotes-cancel").addEventListener("click", () => {
      modal.style.display = "none";
    });

    modal.querySelector("#vidionotes-save").addEventListener("click", async () => {
      const noteText = document.getElementById("note-text").value;
      const category = document.getElementById("note-category").value;
      const startTime = document.getElementById("start-time").value;
      const endTime = document.getElementById("end-time").value;

      // Validate input
      if (!noteText || !category || !startTime || !endTime) {
        alert("Please fill in all fields.");
        return;
      }

      // Prepare data
      const noteData = {
        noteId: `note-${Date.now()}`,
        videoTitle: document.title,
        noteText: noteText,
        category,
        startTime,
        endTime,
        videoUrl: window.location.href,
        timestamp: new Date().toISOString()
      };

      function checkStorageAccess() {
        return new Promise((resolve, reject) => {
            if (!chrome || !chrome.storage || !chrome.storage.local) {
                reject(new Error('Storage API not available'));
                return;
            }

            chrome.storage.local.get(['videoNotes'], (result) => {
                if (chrome.runtime.lastError) {
                    reject(chrome.runtime.lastError);
                    return;
                }
                resolve(result);
            });
        });
      }

      // Use this before any storage operations
      try {
          await checkStorageAccess();
          // Proceed with storage operations
          try {
            chrome.storage.local.get(['videoNotes'], function(result) {
              let existingNotes = result.videoNotes || [];
              existingNotes.push(noteData);
              
              chrome.storage.local.set({ 'videoNotes': existingNotes }, function() {
                if (chrome.runtime.lastError) {
                  throw new Error(chrome.runtime.lastError);
                }
                alert("Note saved successfully!");
                modal.style.display = "none";
              });
            });
          } catch (error) {
            console.error('Chrome storage error:', error);
            // Fallback to localStorage
            try {
              const localNotes = JSON.parse(localStorage.getItem('videoNotes') || '[]');
              localNotes.push(noteData);
              localStorage.setItem('videoNotes', JSON.stringify(localNotes));
              alert("Note saved locally!");
              modal.style.display = "none";
            } catch (localError) {
              console.error('Local storage error:', localError);
              alert("Unable to save note. Storage access denied.");
            }
          }
      } catch (error) {
          console.error('Storage access error:', error);
          // Fall back to localStorage or show error message
          // Chrome APIs not available, use localStorage
          try {
            const localNotes = JSON.parse(localStorage.getItem('videoNotes') || '[]');
            localNotes.push(noteData);
            localStorage.setItem('videoNotes', JSON.stringify(localNotes));
            alert("Note saved locally!");
            modal.style.display = "none";
          } catch (error) {
            console.error('Storage error:', error);
            alert("Unable to save note. Please check storage permissions.");
          }
      }
    });
  }

  renderModalContent();

  // === Show modal in top right corner ===
  button.addEventListener("click", () => {
    const margin = 20;
    modal.style.right = `${margin}px`;
    modal.style.top = `${margin}px`;
    modal.style.left = 'auto';
    
    // Check if Chrome APIs are available
    if (typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local) {
        try {
            chrome.storage.local.get(null, function(result) {
                if (chrome.runtime.lastError) {
                    console.error('Storage access error:', chrome.runtime.lastError);
                    // Fallback to showing modal without storage check
                    modal.style.display = modal.style.display === "none" ? "block" : "none";
                    return;
                }
                modal.style.display = modal.style.display === "none" ? "block" : "none";
            });
        } catch (error) {
            console.error('Storage access error:', error);
            // Fallback to showing modal without storage check
            modal.style.display = modal.style.display === "none" ? "block" : "none";
        }
    } else {
        // Chrome APIs not available, fallback to basic functionality
        console.warn('Chrome storage API not available');
        modal.style.display = modal.style.display === "none" ? "block" : "none";
    }
  });

  // === Make Modal Draggable ===
  const dragHeader = modal.querySelector("#vidionotes-header");
  let isDragging = false;
  let offsetX = 0, offsetY = 0;

  dragHeader.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - modal.offsetLeft;
    offsetY = e.clientY - modal.offsetTop;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", (e) => {
    if (isDragging) {
      modal.style.left = `${e.clientX - offsetX}px`;
      modal.style.top = `${e.clientY - offsetY}px`;
    }
  });

  document.addEventListener("mouseup", () => {
    isDragging = false;
    document.body.style.userSelect = "auto";
  });
}
