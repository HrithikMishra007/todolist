import React, { useState } from 'react';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      addTask({ title, description, completed: false, timestamp: new Date().toISOString() });
      setTitle('');
      setDescription('');
    }
  };

  return (
    <form className='w-full h-fit flex flex-col items-center ' onSubmit={handleSubmit}>
      <input
        className=' border-2 h-[2.4rem] w-[20rem] px-[.5rem] my-[1rem]'
        type="text"
        placeholder="Task Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        className=' border-2 h-[10rem] w-[20rem] px-[.5rem] my-[1rem]'
        placeholder="Task Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button type="submit" className='w-[20rem] py-[.6rem] bg-blue-600 rounded-[8px] 
      text-white font-semibold'>Add Task</button>
    </form>
  );
};

export default TaskForm;
