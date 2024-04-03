import React, { useState } from "react";
import { Link } from "react-router-dom";
import GlobalApi from "../services/GlobalApi";
import Jeu from "../modeles/Jeu";
import Info from "../modeles/Info";
import Avis from "../modeles/Avis";

function GameItem({ game }) {

  const handleAddClick = () => {
    /*
    //recupere la description
    GlobalApi.getGameById(game.id)
    .then(response => {
      const description = response.data.description_raw;
      console.log("description: ", description);
       //creation des objs
    const jeu = new Jeu(game.id,game.name,game.released,
      description, game.background_image)
      console.log("decr jeu obj" + jeu.description);
    const avis = new Avis(0,20,"Tres bon jeu depuis API", "GODTIER");
    const infos = new Info("PLATINE",120,"2024-03-26","2024-04-02");
    //ajout dans l'api backlog via endpoint POST
    GlobalApi.ajouterJoueur(jeu,1, avis,infos);
    })
    .catch(error => {
      console.error("Une erreur s'est produite lors de la récupération de la description du jeu :", error);
    }); */
   //creation des objs
   const jeu = new Jeu(game.id,game.name,game.released,
    "blabla", game.background_image)
  const avis = new Avis(0,20,"Tres bon jeu depuis API", "GODTIER");
  const infos = new Info("PLATINE",120,"2024-03-26","2024-04-02");
  //ajout dans l'api backlog via endpoint POST
  GlobalApi.ajouterJoueur(jeu,1, avis,infos);

  };

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
          <div className="flex space-x-2">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded" onClick={handleAddClick}>
              +
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              Ec
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              T
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              P
            </button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
              W
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default GameItem;
