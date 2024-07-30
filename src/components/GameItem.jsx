import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import Jeu from "../modeles/Jeu";
import Info from "../modeles/Info";
import Avis from "../modeles/Avis";
import JoueurJeu from "../modeles/JoueurJeu";

function GameItem({ game }) {
  const FAKEIDUSER = 1;

  const [gameState, setGameState] = useState(null);
  const [joueurJeuId, setjoueurJeuId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (gameState !== null) {
      updateGameStatus(gameState);
    }
  }, [gameState]);
  /************************VERIFIER SI LE JEU EST DEJA AJOUTE DANS LE BACK**************************/
  const addToBacklog = () => {
     //verifier si le joueur jeu similaire existe
     GlobalApi.getJoueurJeuByJeuAndJoueurId(FAKEIDUSER, game.id)
     .then((response) => {
       const data = response.data;
       if(data.length < 1){
        //ajoute le jeu
        const jeu = new Jeu(
          game.id,
          game.titre,
          game.dateSortie,
          game.description,
          game.image
        );
        /***********************************MOCK***********************************/
        const avis = new Avis(0, 20, "Tres bon jeu depuis API", "GODTIER");
        const infos = new Info("BACKLOG", 120, "2024-03-26", "2024-04-02");
        /***********************************TODO***********************************/
        //ajout dans l'api backlog via endpoint POST
        GlobalApi.ajouterJeuJoueur(game.id, FAKEIDUSER, avis, infos);
       }else{
        console.log("CE JOUEURJEU EXISTE DEJA DUCON !");
       }
      
     })
     .catch((error) => {
       console.error("Erreur lors de la récupération du JoueurJeu:", error);
     });
     
  };


  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <div className="flex flex-col">
        <Link to={`/jeu/${game.id}`} key={game.id} className="mb-2">
          <img
            src={game.image} 
            alt={game.titre} 
            className="w-full h-48 object-cover rounded-lg mb-2 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </Link>
        <h2 className="text-xl font-bold mb-2 truncate text-gray-800">{game.titre}</h2>
        <p className="text-sm text-gray-600 mb-4 truncate">{game.description}</p>
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => {
              const newState = "BACKLOG";
              addToBacklog();
            }}
          >
            Ajouter au backlog
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameItem;
