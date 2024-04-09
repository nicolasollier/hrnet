//dependencies 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Employees from './views/Employees.jsx'

//styles
import './index.css'

//router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/employees",
    element: <Employees />
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
