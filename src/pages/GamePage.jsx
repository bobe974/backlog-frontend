import React from 'react';

function GamePage({ game }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">{game.name}</h1>
      <div className="grid grid-cols-1 gap-4">
        <img src={game.background_image} alt={game.name} className="w-full h-auto mb-4" />
        <p className="text-gray-700">{game.description}</p>
        <p className="text-gray-700">Released: {game.released}</p>
        <p className="text-gray-700">Rating: {game.rating}</p>
      </div>
    </div>
  );
}

export default GamePage;
