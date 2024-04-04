import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import GlobalApi from '../services/GlobalApi';

function GamePage() {
  const { id } = useParams();
  const [game, setGame] = useState();

  useEffect(() => {
    fetchGame();
  }, [id]); //tableau de dépendance, si l'id change en paramètre, l'effet est réexécuté

  const fetchGame = () => {
    GlobalApi.getRawgGameById(id)
      .then((response) => {
        console.log("Réponse :", response.data);
        setGame(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du jeu :", error);
      });
  };

  if (!game) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4 text-blue-600">{game.name}</h1>
    <div className="grid grid-cols-1 gap-6">
      <img src={game.background_image} alt={game.name} className="w-full h-auto rounded-lg shadow-md transition duration-300 hover:opacity-75" />
      <p className="text-gray-800">{game.description_raw}</p>
      <p className="text-gray-700">Released: {game.released}</p>
      <p className="text-gray-700">Rating: {game.rating}</p>
    </div>
  </div>
  );
}

export default GamePage;
