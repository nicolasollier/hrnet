//dependencies 
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Employees from './views/Employees.jsx'
import { Provider } from 'react-redux'

//store
import store from './store.js'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
