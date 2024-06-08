import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath:"api",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3000"
    }),
    endpoints:(builder) => ({
        getTasks:builder.query({
            query:() => ({
                url:"/tasks",
                method:"GET"
            }),
            providesTags:["Tasks"], // Le decimos que el trozo de codigo se llama tasks
            transformErrorResponse: response => response.sort((a,b) => b.id - a.id) // ordena de mayor a menor
        }),
        createTask: builder.mutation({ // tipo mutation significa añadir datos
            query:(newTask) => ({
                url:"/tasks",
                method:"POST",
                body:newTask,
            }),
            invalidatesTags:["Tasks"], // Cuando creo una tarea nuevaente tiene que ejecutar el tasks
        }),
        deleteTask: builder.mutation({
            query:(id) => ({
                url:`/tasks/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Tasks"], // Cuando creo una tarea nuevaente tiene que ejecutar el tasks
        }),
        updateTask:builder.mutation({
            query:(updatedTask) => ({
                url:`/tasks/${(updatedTask.id)}`,
                method:"PUT",
                body:updatedTask
            }),
            invalidatesTags:["Tasks"], // Cuando creo una tarea nuevaente tiene que ejecutar el tasks
        })
    })
})

export const { 
    useGetTasksQuery, 
    useCreateTaskMutation, 
    useDeleteTaskMutation,
    useUpdateTaskMutation, // creamis las mutaciones
} = apiSlice;