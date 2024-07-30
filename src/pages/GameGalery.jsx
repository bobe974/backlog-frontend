import React, { useEffect, useState } from 'react';
import GlobalApi from '../services/GlobalApi';
import List from '../components/List';


function GameGalery() {
  const [gameList, setGameList] = useState([]);

  //Récupérer la liste des jeux vidéo
  useEffect(() => {
    fetchGames();
  }, []);

  const fetchGames = () => {
    GlobalApi.getGames()
      .then((response) => {
        console.log("Réponse :", response.data);
        setGameList(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de la liste des jeux vidéo :", error);
      });
  };

  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-2xl font-bold mb-4">Liste de jeux vidéo</h1>
    <List games={gameList} />
  </div>
  );
}

export default GameGalery;
