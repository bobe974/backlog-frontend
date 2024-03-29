import React from 'react';
import ReactDOM from 'react-dom/client'
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import GamePage from './pages/GamePage';
import GameGalery from './pages/GameGalery';
import Accueil from './pages/Accueil';
import App from './layout/App';
import Backlog from './pages/Backlog';
import ApplicationContextProvider from './context/ApplicationContextProvider';


const router = createBrowserRouter([
  {
    path: '/',
    element:  <App/>,
    children: [
      {
        path: 'games',
        element: <GameGalery />,
      },
      {
        path: 'jeu/:id',
        element: <GamePage />,
      },
      {
        path: '/',
        element: <Accueil />,
      },
      {
        path: '/backlog',
        element: <Backlog/>
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
