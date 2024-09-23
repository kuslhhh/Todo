/* eslint-disable react/prop-types */
import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import { useState } from 'react';

function Task({ task, completeTask, deleteTask, updateTask }) {
  const [isEditing, setIsEditing] = useState(false); // Track edit mode
  const [editedTask, setEditedTask] = useState(task.taskName); // Track the updated task name

  const handleEdit = () => {
    if (isEditing && editedTask.trim() !== "") {
      updateTask(task.id, editedTask); // Save the updated task if the edit is confirmed
    }
    setIsEditing(!isEditing); // Toggle edit mode
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && editedTask.trim() !== "") {
      updateTask(task.id, editedTask); // Save the updated task
      setIsEditing(false); // Exit edit mode
    }
  };

  return (
    <div
      className={`flex justify-between items-center font-medium bg-gray-100 border-2 border-gray-100 rounded-md m-2 ${task.completed ? 'line-through' : ''}`}
    >
      {isEditing ? (
        <input
          className="flex-1 text-center p-1 border-2 border-gray-200 rounded"
          type="text"
          value={editedTask}
          onChange={(e) => setEditedTask(e.target.value)} // Capture changes in input
          onKeyDown={handleKeyDown} // Listen for Enter key press
        />
      ) : (
        <span className="flex-1 text-center">{task.taskName}</span>
      )}

      <MdEdit
        onClick={handleEdit} // Toggle edit mode or save changes
        className='ml-auto pr-4 size-9 cursor-pointer'
      />
      <FaCheck
        onClick={() => completeTask(task.id)}
        className='ml-auto pr-4 size-9 cursor-pointer'
      />
      <MdDelete
        onClick={() => deleteTask(task.id)}
        className='ml-auto pr-4 size-9 cursor-pointer'
      />
    </div>
  );
}

export default Task;
