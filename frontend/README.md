# Video Note Extension

A productivity tool that lets you take timestamped notes on YouTube videos, organize them by category, and quickly revisit important moments. Includes a Chrome extension for in-video note-taking and a web dashboard for managing your notes.

## Features

- 📝 Take timestamped notes while watching YouTube videos
- 📂 Organize notes by categories (Important, Doubt, Rewatch, Other)
- 🕒 Jump to specific video segments using your notes
- 🔒 User authentication (login/signup)
- 🖥️ Web dashboard to view, edit, and delete notes
- 📑 Sidebar with categories, recents, and folders
- 🧩 Chrome extension for seamless in-video note-taking

## Tech Stack

- **Frontend:** React, Next.js, Tailwind CSS
- **Backend:** Node.js, Express, MongoDB
- **Extension:** JavaScript (content scripts, popup)
- **Authentication:** JWT

## Getting Started

### Prerequisites

- Node.js & npm
- MongoDB

### Setup

#### 1. Clone the repository

```bash
git clone https://github.com/yourusername/video-note-extension.git
cd video-note-extension
```

#### 2. Install dependencies

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install

# Extension
# (No install needed, just load in Chrome)
```

#### 3. Configure environment variables

- Create a `.env` file in both `backend` and `frontend` directories.
- Example for backend:
  ```
  MONGODB_URI=mongodb://localhost:27017/videonotes
  JWT_SECRET=your_jwt_secret
  ```
- Example for frontend:
  ```
  NEXT_PUBLIC_API_URL=http://localhost:5000
  ```

#### 4. Run the backend

```bash
cd backend
npm start
```

#### 5. Run the frontend

```bash
cd ../frontend
npm run dev
```

#### 6. Load the Chrome Extension

- Go to `chrome://extensions`
- Enable "Developer mode"
- Click "Load unpacked" and select the `extension` folder

## Usage

1. **Sign up and log in** on the web dashboard.
2. **Install and open the Chrome extension** while watching a YouTube video.
3. **Take notes** using the floating modal. Notes are saved with timestamps and categories.
4. **Manage your notes** on the dashboard: filter by category, play video segments, edit, or delete notes.

## Project Structure

```
video-note-extension/
├── backend/      # Express API & MongoDB models
├── frontend/     # Next.js React app
├── extension/    # Chrome extension source
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](LICENSE)
