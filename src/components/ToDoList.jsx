import React, { useState } from 'react'
import ToDoItem from './ToDoItem';

function ToDoList({ todos, onAdd, onToggle, onEdit, onDelete }) {
    // Local state to store the current value of the input field
    const [inputValue, setInputValue] = useState("");

    // Handle form submission for adding a new task
    function handleSubmit(e) {
        e.preventDefault(); // Prevent page reload on form submit
        const trimmedValue = inputValue.trim(); // Remove extra spaces
        if (!trimmedValue) return; // Don't add empty tasks

        // Check if the task already exists (case-insensitive)
        const existTask = todos.some(todo => todo.text.toLowerCase() === trimmedValue.toLowerCase());
        if (existTask) {
            alert(`Already exist task ${trimmedValue}`);
            return;
        }

        // Add the new task and clear the input field
        onAdd(trimmedValue);
        setInputValue("");
    }

    // Handle editing an existing task
    function handleEdit(id, newText) {
        const trimmedValue = newText.trim();
        if (!trimmedValue) return;

        // Check if another task with the same name already exists
        const existTask = todos.some(todo => (todo.text.toLowerCase() === trimmedValue.toLowerCase()) && (todo.id !== id));
        if (existTask) {
            alert(`Already exist task ${trimmedValue}`);
            return;
        }

        // Call parent edit function
        onEdit(id, trimmedValue);
    }

    // Handle deleting a task (with confirmation)
    function handleDelete(id) {
        if (window.confirm("Are you sure you want to delete this task ?")) {
            onDelete(id);
        }
    }

    // Count of completed and total tasks
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalCount = todos.length;

    return (
        <div className="w-full flex flex-col gap-4">
            {/* ===================== Add Task Input Section ===================== */}
            <main className='w-full'>
                <form onSubmit={handleSubmit} className='w-full'>
                    <div className='flex items-center justify-center gap-3 w-full'>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder='Add a new task...'
                            className='px-4 py-2 w-full sm:w-3/4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#0bd4ea] transition-colors text-white'
                        />
                        <button
                            type="submit"
                            className='px-4 py-2 sm:px-6 sm:py-3 bg-[#0bd4ea] text-white font-bold rounded-lg hover:bg-white hover:text-[#0bd4ea] transition-colors'>
                            Add
                        </button>
                    </div>
                </form>
            </main>

            {/* ===================== Task Counters Section ===================== */}
            <div className="flex flex-wrap items-center justify-center md:justify-between gap-4 mx-auto w-full max-w-5xl text-white p-4 rounded-lg">
                <div className='min-w-[90px] flex items-center justify-center gap-2 text-blue-400'>
                    <p className="text-sm md:text-base">All:</p>
                    <p className="text-2xl font-bold">{totalCount}</p>
                </div>
                <div className='min-w-[110px] flex items-center justify-center gap-2 text-green-500'>
                    <p className="text-sm md:text-base">Completed:</p>
                    <p className="text-2xl font-bold">{completedCount}</p>
                </div>
                <div className='min-w-[110px] flex items-center justify-center gap-2 text-yellow-500'>
                    <p className="text-sm md:text-base">Pending:</p>
                    <p className="text-2xl font-bold">{totalCount - completedCount}</p>
                </div>
            </div>

            {/* ===================== ToDo List Items Section ===================== */}
            <div className=" w-full max-w-5xl mx-auto rounded-lg overflow-visible">
                {todos.length === 0 ? (
                    <div className="text-center bg-[#121212] p-10 rounded-md">
                        <p className="text-gray-400 text-xl">No tasks yet. Add one to get started!</p>
                    </div>
                ) : (
                    <ul className="space-y-2 w-full">
                        {todos.map((todo) => (
                            <ToDoItem
                                key={todo.id}
                                todo={todo}
                                onToggle={onToggle}
                                onDelete={handleDelete}
                                onEdit={handleEdit}
                            />
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}

export default ToDoList
