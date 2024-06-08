import React from 'react'
import { useGetTasksQuery, useDeleteTaskMutation, useUpdateTaskMutation } from '../api/apiSlice';


const TaskList = () => {

  const {data: tasks, isError, isLoading, error} = useGetTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  if (isLoading) return <div>cargando...</div>;
  else if(isError) return <div>Error: {error.message}</div>;
  
  console.log(tasks)

  return (
    <>
      <ul>
        {tasks.map(task => (
            <li key={task.id}>
              <h3>{task.name}</h3>
              <p>{task.description}</p>
              <button onClick={() => {
                deleteTask(task.id);
              }}>
                delete
              </button>
              <input type='checkbox' 
                     id={task.id}
                     checked={task.completed} 
                     onChange={(e) => {
                        updateTask({
                            ...task,
                            completed: e.target.checked, // le paso la tarea como parametro pero actualizando el valor del checked
                        })
                        console.log(e.target.checked);
                     }}
                     />
              <label htmlFor={task.id}>completed</label>
            </li>
        ))}
      </ul>
    </>
  )
}

export default TaskList