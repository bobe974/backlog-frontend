import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import JoueurJeu from "../modeles/JoueurJeu";

function GameItemBack({ game }) {
  const FAKEIDUSER = 1;
  
  const [gameState, setGameState] = useState(null);
  const [joueurJeuId, setjoueurJeuId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (gameState !== null) {
      updateGameStatus(gameState);
    }
  }, [gameState]);


  const updateGameStatus = (newState) => {
    //récupérer l'id joueurjeu avec l'id jeu et joueur
    GlobalApi.getJoueurJeuByJeuAndJoueurId(FAKEIDUSER, game.id)
      .then((response) => {
        console.log("Full response:", response);
        const data = response.data;
        console.log("JoueurJeu data:", data);
 
        const id = data[0].id;
        setjoueurJeuId(id);
        console.log("JeuJoueurID:" + joueurJeuId);

        const updatedJoueurJeu = new JoueurJeu();
        console.log("gameState:" + newState);
        updatedJoueurJeu.setEtat(newState);

        GlobalApi.updateJoueurJeu(updatedJoueurJeu, id)
          .then((updateResponse) => {
            console.log("Mise à jour réussie:", updateResponse);
            //redirection vers la page backlog
          })
          .catch((updateError) => {
            console.error(
              "Erreur lors de la mise à jour du JoueurJeu:",
              updateError
            );
          });
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
        <div className="flex space-x-2 flex-wrap">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            onClick={() => {
              const newState = "BACKLOG";
              setGameState(newState);
              updateGameStatus(newState);
            }}
          >
            Backlog
          </button>
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            onClick={() => {
              const newState = "ENCOURS";
              setGameState(newState);
              updateGameStatus(newState);
            }}
          >
            En cours
          </button>
          <button
            className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-1 px-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            onClick={() => {
              const newState = "TERMINE";
              setGameState(newState);
              updateGameStatus(newState);
            }}
          >
            Terminé
          </button>
          <button
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-1 px-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            onClick={() => {
              const newState = "PLATINE";
              setGameState(newState);
              updateGameStatus(newState);
            }}
          >
            Platine
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded-lg transition duration-300 ease-in-out transform hover:scale-105 text-sm"
            onClick={() => {
              const newState = "WISHLIST";
              setGameState(newState);
              updateGameStatus(newState);
            }}
          >
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
  
}

export default GameItemBack;
