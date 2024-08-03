import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, updateTask, deleteTask, toggleTaskCompletion }) => {
    return (
        <ul className='w-[90%] mx-auto mt-[1rem] min-h-[40vh] flex flex-row gap-4 border-2 rounded-[8px] p-[1rem]'>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    updateTask={updateTask}
                    deleteTask={deleteTask}
                    toggleTaskCompletion={toggleTaskCompletion}
                />
            ))}
        </ul>
    );
};

export default TaskList;
