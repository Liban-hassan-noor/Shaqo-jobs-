# 💼 React Job Board

A modern and responsive job board built with React, Tailwind CSS, and `json-server`. It allows users to browse job listings, view job details, and simulate a real-world job search experience.

---

## ✨ Features

- 📃 Job listings with title, type, description, location, and salary
- 🔄 Toggle between short and full job descriptions
- 🔗 "Read More" links to detailed job pages
- 🌀 Loading spinner while fetching data
- 🎨 Clean and responsive UI using Tailwind CSS
- 📡 Mock backend using `json-server`

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/react-job-board.git
cd react-job-board
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Mock API Server
bash
Copy
Edit
npm run server
This uses json-server to serve src/jobs.json on http://localhost:3001/jobs.

4. Start the React App
bash
Copy
Edit
npm start
The app will run at http://localhost:3000 by default.

🧪 Example API Data (src/jobs.json)
json
Copy
Edit
{
  "jobs": [
    {
      "id": 1,
      "title": "Frontend Developer",
      "type": "Full-time",
      "location": "Nairobi",
      "salary": "80000",
      "description": "We are looking for a skilled frontend developer to join our team..."
    },
    ...
  ]
}
📁 Folder Structure
pgsql
Copy
Edit
src/
├── components/
│   ├── JobListing.jsx
│   ├── JobListings.jsx
│   └── Spinner.jsx
├── jobs.json
├── App.jsx
└── index.js
📦 Dependencies
React

React Router DOM

Tailwind CSS

React Icons

json-server

🛠️ Todo / Improvements
Add search and filter functionality

Add pagination

Improve mobile responsiveness

Deploy on Netlify or Vercel

📄 License
MIT © Your Name

yaml
Copy
Edit

---

Let me know if you'd like to customize this for your startup idea, add deployment steps (Netlify, Vercel), or include screenshots/badges!








