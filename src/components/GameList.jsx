import React, { useEffect, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import GameItem from './GameItem';

function GameList() {
  const [gameList, setGameList] = useState([]);

  // Récupérer la liste des jeux vidéo
  useEffect(() => {
    getGameList();
  }, []);

  const getGameList = () => {
    GlobalApi.getGameList()
      .then((response) => {
        console.log("Réponse :", response.data);
        setGameList(response.data.results);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la liste des jeux vidéo :", error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Liste de jeux vidéo</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {gameList.map((game) => (
          <GameItem key={game.id} game={game}></GameItem> 
        ))}
      </div>
    </div>
  );
}

export default GameList;
