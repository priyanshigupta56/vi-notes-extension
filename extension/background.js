chrome.runtime.onInstalled.addListener(() => {
    // Initialize storage with empty array
    chrome.storage.local.set({ 'videoNotes': [] }, () => {
        if (chrome.runtime.lastError) {
            console.error('Storage initialization failed:', chrome.runtime.lastError);
        }
    });
});

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === "open_popup") {
    // Get current window to position the popup relative to it
    chrome.windows.getCurrent((currentWindow) => {
      // Position the popup in the top-right corner with a small margin
      const popupWidth = 320;
      const popupHeight = 400;
      const margin = 20;
      
      chrome.windows.create({
        url: "popup.html",
        type: "popup",
        width: popupWidth,
        height: popupHeight,
        left: currentWindow.left + currentWindow.width - popupWidth - margin,
        top: currentWindow.top + margin
      });
    });
  }
});
