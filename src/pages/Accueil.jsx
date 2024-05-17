import React from "react";
import { Link } from "react-router-dom";

function Accueil() {
  return (
    <div className="container flex flex-col h-screen justify-center items-center">
      <h1 className="text-4xl font-bold mb-8">Bienvenue PGM</h1>
      <p className="text-lg text-gray-700 mb-4">
        Bienvenue sur notre plateforme de jeux vidéo !
      </p>
      <p className="text-lg text-gray-700 mb-4">
        Explorez notre collection de jeux et créez votre propre liste de jeux à jouer.
      </p>
      <Link to="/games" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
        Voir les jeux
      </Link>
    </div>
  );
}

export default Accueil;
