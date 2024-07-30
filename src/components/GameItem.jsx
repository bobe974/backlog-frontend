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
      updateGameStatus();
    }
  }, [gameState]);

  const addToBacklog = () => {
  
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
    GlobalApi.ajouterJeuJoueur( game.id, FAKEIDUSER, avis, infos);
  };

  const updateGameStatus = (newState) => {
    //récupérer l'id joueurjeu avec l'id jeu et joueur
    GlobalApi.getJoueurJeuByJeuAndJoueurId(FAKEIDUSER, game.id)
      .then((response) => {
        console.log("Full response:", response);
        const data = response.data;
        console.log("JoueurJeu data:", data);
        const id = data.id;
        setjoueurJeuId(id);
        console.log("JeuJoueurID:" + joueurJeuId);

        const updatedJoueurJeu = new JoueurJeu();
        console.log("gameState:" + newState);
        updatedJoueurJeu.setEtat(newState);
        /** ******************************************TODO ***********************************************/
        //actualiser la page apres chaque update
        //updateGameStatus se base sur gameState pour adapter ces actions suivant l'état
        //update des bouttons
        //authentification/jeton pour avoir un id de l'user
        //message d'érreur ligne 70 qui s'affiche tout le temps, à virer
        /** ******************************************TODO ***********************************************/

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
        <Link to={`/jeu/${game.id}`} key={game.id}>
          <img
            src={game.image} //background_image
            alt={game.titre} //name
            className="w-full h-48 object-cover mb-2"
          />
        </Link>
        <h2 className="text-xl font-bold mb-2 truncate">{game.titre}</h2> 
        <div className="flex space-x-2">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded"
            onClick={() => {
              const newState = "BACKLOG";
              //setGameState(newState);
              //updateGameStatus(newState);
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
