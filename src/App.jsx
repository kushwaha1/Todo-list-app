import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header'
import ToDoList from './components/ToDoList'

function App() {
  // State management for todos with localStorage persistence
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage on initial render
    const savedTodos = localStorage.getItem("todos");
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  //Save todos to localStorage whenever they change  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Handler for adding a new todo
  function handleAddTodo(text) {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false
    }
    setTodos([...todos, newTodo]);
  }

  // Handler for toggling todo completion
  function handleToggleComplete(id) {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo
    }));
  }

  // Handler for editing a todo 
  function handleEditTodo(id, newText) {
    setTodos(todos.map((todo) => {
      return todo.id === id ? { ...todo, text: newText } : todo
    }));
  }

  // Handler for deleting a todo
  function handleDeleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  return (
    <div className="min-h-screen bg-[#212121] flex justify-center items-center">
      <div className="relative w-full max-w-lg p-1 rounded-2xl overflow-visible bg-gradient-to-r from-[#74ebd5] to-[#acb6e5]">

        {/* ===================== Inner Card Container =====================
            - Dark background card where all content is displayed
            - Scrollable when todos overflow without showing scrollable bar
        */}
        <div className="relative bg-[#080808] text-white rounded-xl p-6 flex flex-col gap-4 items-center justify-start z-10 min-h-[500px] max-h-[80vh] overflow-y-auto no-scrollbar">
          {/* Header Component - displays app title */}
          <Header />

          {/* ToDoList Component
              - Handles displaying todos, adding, editing, toggling, and deleting tasks */}
          <ToDoList
            todos={todos}
            onAdd={handleAddTodo}
            onToggle={handleToggleComplete}
            onEdit={handleEditTodo}
            onDelete={handleDeleteTodo}
          />
        </div>
      </div>
    </div>
  )
}

export default App;
