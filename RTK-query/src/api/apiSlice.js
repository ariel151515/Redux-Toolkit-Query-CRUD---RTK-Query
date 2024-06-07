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
            })
        }),
        createTask: builder.mutation({ // tipo mutation significa añadir datos
            query:(newTask) => ({
                url:"/tasks",
                method:"POST",
                body:newTask,
            })
        })
    })
})

export const { useGetTasksQuery, useCreateTaskMutation } = apiSlice;