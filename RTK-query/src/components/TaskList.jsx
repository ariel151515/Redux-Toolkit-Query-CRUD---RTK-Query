import React from 'react'
import { useGetTasksQuery } from '../api/apiSlice';

const TaskList = () => {

  const {data: tasks, isError, isLoading, error} = useGetTasksQuery()

  if (isLoading) return <div>cargando...</div>;
  else if(isError) return <div>Error: {error.message}</div>;
  
  console.log(tasks)

  return (
    <>
      <ul>
        {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              <button>
                delete
              </button>
              <input type='checkbox' id={task.id} />
              <label htmlFor={task.id}>completed</label>
            </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList