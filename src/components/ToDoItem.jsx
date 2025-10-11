import React, { useState } from 'react';
import { Trash2, Edit2, Check, X } from 'lucide-react';

function ToDoItem({ todo, onToggle, onDelete, onEdit }) {
    // State to track whether the item is currently being edited
    const [isEditing, setIsEditing] = useState(false);

    // State to store the temporary text value during edit
    const [editText, setEditText] = useState(todo.text);

    /**
     * Handle saving the edited text
     * - Prevents empty input
     * - Calls the parent onEdit function
     * - Exits edit mode after saving
    */
    const handleSubmitEdit = (e) => {
        e.preventDefault();
        if (editText.trim()) {
            onEdit(todo.id, editText.trim());
            setIsEditing(false);
        }
    };

    /**
     * Cancel edit mode
     * - Reverts the text back to original
     * - Closes the editing UI
    */
    const handleCancel = () => {
        setEditText(todo.text);
        setIsEditing(false);
    };

    // Allow user to cancel editing with the ESC key
    const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
            handleCancel();
        }
    };

    return (
        <li className="flex items-center justify-between py-4 px-4 bg-gray-800 rounded-lg mb-4 shadow-amber-800 w-full">
            {/* ===================== Edit Mode UI ===================== */}
            {isEditing ? (
                <form onSubmit={handleSubmitEdit} className="flex items-center gap-3 flex-1">
                    {/* Input box for editing task */}
                    <input
                        type="text"
                        value={editText}
                        onChange={(e) => setEditText(e.target.value)}
                        onKeyDown={handleKeyDown}
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus
                    />
                    {/* Save button */}
                    <button
                        type="submit"
                        className="p-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                        title="Save"
                    >
                        <Check size={18} />
                    </button>
                    {/* Cancel button */}
                    <button
                        type="button"
                        onClick={handleCancel}
                        className="p-2 bg-gray-400 text-white rounded-lg hover:bg-gray-500 transition-colors"
                        title="Cancel"
                    >
                        <X size={18} />
                    </button>
                </form>
            ) : (
                <>
                    {/* ===================== Normal View UI ===================== */}
                    <div className="flex items-center gap-4 flex-1">
                        {/* Completion toggle button (checkbox style) */}
                        <button onClick={() => onToggle(todo.id)}
                            className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all ${todo.completed
                                ? 'bg-[#0bd4ea] border-[#0bd4ea]'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                        >
                            {/* Show check icon if completed */}
                            {todo.completed && <Check className="text-white" size={16} />}
                        </button>
                        {/* Task Text - strike-through if completed */}
                        <span className={`text-lg ${todo.completed
                            ? 'line-through text-gray-400'
                            : 'text-white'
                            }`}
                        >
                            {todo.text}
                        </span>
                    </div>

                    {/* ===================== Action Buttons ===================== */}
                    <div className="flex items-center gap-3">
                        {/* Edit button - disabled if task is completed */}
                        <button
                            onClick={() => setIsEditing(true)}
                            className="text-blue-500 hover:text-blue-600 transition-colors disabled:text-gray-300 disabled:cursor-not-allowed"
                            title="Edit"
                            disabled={todo.completed}
                        >
                            <Edit2 size={20} />
                        </button>
                        {/* Delete button */}
                        <button
                            onClick={() => onDelete(todo.id)}
                            className="text-red-500 hover:text-red-600 transition-colors"
                            title="Delete"
                        >
                            <Trash2 size={20} />
                        </button>
                    </div>
                </>
            )}
        </li>
    );
};

export default ToDoItem;