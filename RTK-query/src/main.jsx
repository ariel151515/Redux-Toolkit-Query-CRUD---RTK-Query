import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { apiSlice } from './api/apiSlice.js'

// Esto es un contexto
import { ApiProvider } from '@reduxjs/toolkit/query/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApiProvider api={apiSlice}>
      <App />
    </ApiProvider>
  </React.StrictMode>,
)
