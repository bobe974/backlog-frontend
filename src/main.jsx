import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import GamePage from './pages/GamePage';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "jeu/:id",
    element: <GamePage/>,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
