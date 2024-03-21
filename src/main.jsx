import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import GamePage from './pages/GamePage';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from 'postcss';
import Accueil from './pages/Accueil';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
      {
        path: "jeu/:id",
        element: <GamePage />,
      }
    
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
