# LaTeX Notes Editor

A full-stack MERN application for creating, editing, and managing mathematical notes using LaTeX notation with real-time preview powered by KaTeX.

## Features

- ✨ **Real-time LaTeX Preview** - See your mathematical expressions rendered instantly
- 🛠️ **Symbol Toolbar** - Quick access to common mathematical symbols and expressions
- 💾 **Persistent Storage** - Save and manage your notes with MongoDB
- ✏️ **Edit & Update** - Click on saved notes to edit them
- 🗑️ **Delete Notes** - Remove unwanted notes with confirmation
- 📱 **Responsive Design** - Works on desktop and mobile devices
- ⚡ **Fast Performance** - Built with Vite for optimal development and build performance

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **KaTeX** - Fast math typesetting library
- **Axios** - HTTP client for API requests
- **CSS3** - Custom styling

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing

## Project Structure

```
AKYDEVA/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── NotesEditor.jsx    # Main editor component
│   │   │   ├── Toolbar.jsx        # Symbol insertion toolbar
│   │   │   ├── Preview.jsx        # LaTeX preview component
│   │   │   ├── NoteList.jsx       # Notes list container
│   │   │   └── NoteItem.jsx       # Individual note item
│   │   ├── styles/
│   │   │   ├── NotesEditor.css    # Editor styling
│   │   │   └── Toolbar.css        # Toolbar styling
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/
│   ├── controllers/
│   │   └── Notes.js               # Notes CRUD operations
│   ├── models/
│   │   └── Notes.js               # MongoDB note schema
│   ├── routes/
│   │   └── notes.js               # API routes
│   ├── utils/
│   │   └── ConnectToDb.js         # Database connection
│   ├── app.js                     # Express server setup
│   └── package.json
└── README.md
```

## Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn**

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd AKYDEVA
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in the backend directory:

```env
# Database
MONGO_URI=mongodb://localhost:27017/latex-notes
# OR for MongoDB Atlas:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/latex-notes

# Server
PORT=5000

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173
```

Start the backend server:

```bash
npm start
```

The backend will run on `http://localhost:5000`

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Create a `.env` file in the frontend directory:

```env
VITE_API_BASE=http://localhost:5000/api
```

Start the frontend development server:

```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

### Creating Notes

1. **Type LaTeX** - Enter LaTeX expressions in the textarea
2. **Use Toolbar** - Click toolbar buttons to insert common symbols:
   - Mathematical operators (∑, ∫, √, π)
   - Limits and functions
   - Matrices
   - Chemical formulas (H₂O, CO₂)
   - Chemical reaction arrows
3. **Real-time Preview** - See your LaTeX rendered below the input
4. **Save Note** - Click "Save Note" to store your work

### Managing Notes

- **View Notes** - All saved notes appear in the list below
- **Edit Notes** - Click on any note to load it into the editor
- **Update Notes** - Modify and click "Update Note"
- **Delete Notes** - Click the delete button (with confirmation)

### LaTeX Examples

```latex
# Mathematical Expressions
\sum_{i=1}^{n} x_i
\int_{-\infty}^{\infty} e^{-x^2} dx
\lim_{x \to 0} \frac{\sin x}{x} = 1

# Matrices
\begin{bmatrix} a & b \\ c & d \end{bmatrix}

# Chemical Formulas
H_2O + CO_2 \rightleftharpoons H_2CO_3
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Fetch all notes |
| POST | `/api/notes` | Create a new note |
| PUT | `/api/notes/:id` | Update a note |
| DELETE | `/api/notes/:id` | Delete a note |

### Request/Response Examples

**Create Note:**
```json
POST /api/notes
{
  "content": "\\sum_{i=1}^{n} x_i"
}
```

**Response:**
```json
{
  "_id": "64a1b2c3d4e5f6789012345",
  "content": "\\sum_{i=1}^{n} x_i",
  "updatedAt": "2024-01-15T10:30:00.000Z"
}
```

## Development

### Available Scripts

**Frontend:**
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

**Backend:**
- `npm start` - Start server with nodemon
- `npm test` - Run tests (not implemented)

### Environment Variables

**Backend (.env):**
- `MONGO_URI` - MongoDB connection string
- `PORT` - Server port (default: 5000)
- `FRONTEND_URL` - Frontend URL for CORS

**Frontend (.env):**
- `VITE_API_BASE` - Backend API base URL

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you encounter any issues or have questions, please create an issue in the repository.

---

**Happy note-taking with LaTeX! 📝✨**