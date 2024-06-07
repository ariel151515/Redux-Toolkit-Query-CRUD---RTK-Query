import React from 'react';
import {useCreateTaskMutation} from '../api/apiSlice';


function TaskForm() {

  const [createTask] = useCreateTaskMutation()

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = e.target.elements.name.value.trim();
    const description = e.target.elements.description.value.trim();
    const completed = e.target.elements.completed.checked;

    console.log(name, description, completed);

    createTask({
        name,
        description,
        completed
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" id="name"/>
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input type="text" name="description" id="description"/>
      </div>
      <div>
        <label htmlFor="completed">Completed:</label>
        <input type="checkbox" name="completed" id="completed"/>
      </div>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
