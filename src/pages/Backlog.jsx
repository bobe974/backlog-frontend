import React from 'react';
import GameItem from '../components/GameItem';

function Backlog() {
  // mock liste de jeux dans le backlog de l'utilisateur
  const backlogGames = [
    {
      id: 1,
      name: "Game 1",
      background_image: "image_url_1"
    },
    {
      id: 2,
      name: "Game 2",
      background_image: "image_url_2"
    },
  ];

  return (
    <div className="mt-8"> 
      <div className="flex mb-4">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
          Backlog
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
          En cours
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
          Terminé
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
          Platiné
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1">
          Wishlist
        </button>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {backlogGames.map(game => (
          <GameItem key={game.id} game={game} />
        ))}
      </div>
    </div>
  );
}

export default Backlog;
