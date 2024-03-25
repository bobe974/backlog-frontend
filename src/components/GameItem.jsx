import React from "react";
import { Link } from "react-router-dom";

function GameItem({ game }) {
  return (
    <Link to={`/jeu/${game.id}`} key={game.id}>
      <div className="bg-white rounded-lg shadow-md p-4">
        <div className="flex flex-col">
          <img
            src={game.background_image}
            alt={game.name}
            className="w-full h-48 object-cover mb-2"
          />
          <h2 className="text-xl font-bold mb-2 truncate">{game.name}</h2>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ajouter
          </button>
        </div>
      </div>
    </Link>
  );
}

export default GameItem;
