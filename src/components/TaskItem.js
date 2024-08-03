import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask, toggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description);

  const handleUpdate = () => {
    updateTask({ ...task, title, description, timestamp: new Date().toISOString() });
    setIsEditing(false);
  };

  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
        />
        {isEditing ? (
          <div className='flex flex-col gap-2 border-2 p-[1rem]'>
            <input
              className=' border-2 h-[2.4rem] w-fit px-[.5rem] mt-[1rem]'
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              className=' border-2 h-[10rem] w-fit px-[.5rem] mt-[1rem]'
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button onClick={handleUpdate} className='py-[.6rem] bg-blue-600 rounded-[8px] 
      text-white font-semibold'>Save</button>
          </div>
        ) : (
          <div className='w-fit flex flex-col gap-2 border-2 p-[1rem]'>
            <p className=' font-bold uppercase text-green-600'>{task.title}</p>
            <p className=''>{task.description}</p>
            <p className='text-blue-400'>{task.timestamp}</p>
            <div className='flex gap-2'>
              <button onClick={() => setIsEditing(true)} className=' px-[2rem] py-[.6rem] bg-blue-600 rounded-[8px] 
      text-white font-semibold'>Edit</button>
              <button onClick={() => deleteTask(task.id)} className=' px-[2rem] py-[.6rem] bg-red-600 rounded-[8px] 
      text-white font-semibold'>Delete</button>
            </div>
          </div>
        )}
      </div>
    </li>
  );
};

export default TaskItem;
