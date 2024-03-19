import React from 'react';
import { Link } from "react-router-dom";

function GameItem({ game }) {
  return (
 
      <div className="bg-white rounded-lg shadow-md p-4">
        <img src={game.background_image} alt={game.name} className="w-full h-auto mb-2" />
        <h2 className="text-xl font-bold mb-2">{game.name}</h2>
        <p className="text-gray-700">{game.description}</p>
      </div>
  
  );
}

export default GameItem;
