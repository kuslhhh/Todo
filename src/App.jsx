import { useState } from 'react';
import './App.css';
import { FaListCheck } from "react-icons/fa6";
import Task from './components/Task'; // Import the Task component

function App() {
  const [todo, setTodo] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todo.length === 0 ? 1 : todo[todo.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };

    if (newTask.trim() !== "") {
      setTodo([...todo, task]);
      setNewTask(""); 
    }
  };

  const deleteTask = (id) => {
    setTodo(todo.filter((task) => task.id !== id));
  };

  const completeTask = (id) => {
    setTodo(
      todo.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        } else {
          return task;
        }
      })
    );
  };

  return (
    <>
      <div className="h-screen flex items-center justify-center p-10 bg-white flex-col">
        <div className='bg-white border-2 border-gray-100 shadow-xl p-5 rounded-lg text-black'>
          <div className='flex justify-center pb-2'>
            <FaListCheck className='p-2 size-11' />
            <h1 className='text-black p-2 font-serif font-bold text-2xl'>Todo List</h1>
          </div>
          <input
            className='shadow-sm bg-white border-gray-100 text-black rounded-l-md font-bold p-2 border-2 text-center'
            type='text'
            value={newTask}
            onChange={handleChange}
          />
          <button
            className='bg-black border-2 border-black shadow-md font-light font-serif tracking-wider rounded-r-md text-white p-2'
            onClick={addTask}
          >
            Add Todo
          </button>

          {/* Render Task components */}
          <div className='text-lg p-1 m-4 text-center border-2 border-gray-100 rounded-md shadow-sm'>
            <h1 className='text-black p-1 font-serif font-bold text-2xl'>Todos</h1>
            {todo.map((task) => (
              <Task 
                key={task.id}
                task={task} 
                completeTask={completeTask} 
                deleteTask={deleteTask}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
