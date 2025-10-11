# Simple To-Do List (Vite + React + Tailwind)

A clean, accessible, and fully functional To-Do list application built with Vite and React functional components.
Implements add, edit, delete, complete/uncomplete, localStorage persistence and small UX/accessibility improvements.

## Features

- Add new tasks(prevent duplicate / empty tasks)
- Mark tasks as completed / uncompleted (toggle)
- Edit existing tasks (inline edit, ESC to cancel)
- Delete tasks (with confirmation)
- Local persistence using localStorage
- Responsive design
- Added Todo-list fav-icon in index.html

### Setup Instructions

1. Clone or download this repository (`git clone https://github.com/kushwaha1/Todo-list-app.git`).
2. Run command in vscode terminal `npm i` for installing packages.
3. Open vscode terminal and run `npm run dev`.
4. The app will now be running at `http://localhost:5173/`.

## Technologies Used

- React (functional components + hooks)
- Vite
- Tailwind CSS
- Lucide React (for icons)

## Project Structure

* public
  - vite.svg
* src/
  - assets/
    * check-list.png
    * to-do-list.png
    * react.svg
  - components/
    * Header.jsx
    * ToDoList.jsx
    * ToDoItem.jsx
  * App.jsx
  * App.css
  * main.jsx
  * index.css (or tailwind setup)
* .gitignore
* index.html
* README.md
* package.json
* package-lock.json
* vite.config.js

## How It Works

1. Add a Task – Type a task name in the input box and click Add.
    - The app saves it in localStorage and shows it in the task list.
2. Mark Complete – Click the checkbox next to a task to mark it as completed (toggles between complete/incomplete).
3. Edit a Task – Click the Edit icon, modify the text, and press Save or Esc/Cancel to revert.
4. Delete a Task – Click the Trash icon, confirm the alert, and the task is permanently removed.
5. Persistent Storage – All tasks are automatically saved in the browser’s localStorage, so they stay even after refresh.