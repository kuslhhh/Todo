import { FaCheck } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

function Task({ task, completeTask, deleteTask }) {
  return (
    <div
      className={`flex justify-between items-center font-medium bg-gray-100 border-2 border-gray-100 rounded-md m-2 ${task.completed ? 'line-through' : ''}`}
    >
      <span className='flex-1 text-center'>{task.taskName}</span>
      <FaCheck
        onClick={() => completeTask(task.id)}
        className='ml-auto pr-4 size-9 cursor-pointer '
      />
      <MdDelete
        onClick={() => deleteTask(task.id)}
        className='ml-auto pr-4 size-9 cursor-pointer '
      />
    </div>
  );
}

export default Task;
