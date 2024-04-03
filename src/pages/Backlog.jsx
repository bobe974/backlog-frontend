import React, { useContext } from 'react';
import GameItem from '../components/GameItem';
import { MyContext } from '../context/ApplicationContextProvider';

function Backlog() {

  /*TEST PROVIDER */
  // mock liste de jeux dans le backlog de l'utilisateur

  const backlogGames = useContext(MyContext)

  return (
    <div className="mt-8 h-screen"> 
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
