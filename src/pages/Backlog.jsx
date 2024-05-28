import React, { useEffect, useState } from 'react';
import GameItem from '../components/GameItem';
import GlobalApi from '../services/GlobalApi';

function Backlog() {
  const IDJOUEURACTUEL = 1;
  const [backlogGames, setBacklogGames] = useState([]); // État local pour les jeux récupérés
  const [currentFilter, setCurrentFilter] = useState('BACKLOG'); // État local pour le filtre actuel

  useEffect(() => {
    fetchGamesByFilter(); 
  }, [currentFilter]);

  const fetchGamesByFilter = () => {
    console.log("current filter =" + currentFilter)
    GlobalApi.getJoueurJeuById(IDJOUEURACTUEL)
      .then((response) => {
        console.log("Réponse :", response.data);
        setBacklogGames(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des détails du jeu :", error);
      });
  };

  return (
    <div className="mt-8 h-screen"> 
      <div className="flex mb-4">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
          onClick={() => setCurrentFilter('BACKLOG')}
        >
          Backlog
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
         onClick={() => setCurrentFilter('ENCOURS')}>
          En cours
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
        onClick={() => setCurrentFilter('TERMINE')}>
          Terminé
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
        onClick={() => setCurrentFilter('PLATINE')}>
          Platiné
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-1"
        onClick={() => setCurrentFilter('WISHLIST')}>
          Wishlist
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {backlogGames.length > 0 ? (
          backlogGames
            .filter(jeujoueur => jeujoueur.etat === currentFilter)
            .map(jeujoueur => (
              <GameItem key={jeujoueur.jeu.id} game={jeujoueur.jeu} />
            ))
        ) : (
          <p>Aucun jeu trouvé pour le filtre sélectionné.</p>
        )}
      </div>
    </div>
  );
}

export default Backlog;
