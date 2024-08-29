import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="todoForm">
      <input 
        type="text" 
        value={value} 
        onChange={(e) => setValue(e.target.value)} 
        className="todoInput" 
        placeholder="What is the task today?" 
      />
      <button type="submit" className="todoButton">Add Task</button>
    </form>
  );
};
