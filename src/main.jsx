import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GamePage from './pages/GamePage';
import GameList from './pages/GameList';
import Accueil from './pages/Accueil';
import App from './layout/App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    children: [
      {
        path: 'games',
        element: <GameList />,
      },
      {
        path: 'jeu/:id',
        element: <GamePage />,
      },
      {
        path: '/',
        element: <Accueil />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
