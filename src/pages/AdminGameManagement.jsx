import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom
import { useEffect } from "react";
import GlobalApi from "../services/GlobalApi";
import CrudButtons from "../components/CrudButtons";

function AdminGameManagement() {
    //stocker les données récupérées
    const [games, setGames] = useState([]);
    //gestion des erreurs
    const [error, setError] = useState("");

    const fetchGames = () => {
        console.log("Fetching games...");
        GlobalApi.getGames()
          .then((response) => {
            console.log("Réponse jeux:", response.data);
            setGames(response.data);
          })
          .catch((error) => {
            console.error("Erreur lors de la récupération des jeux:", error);
            setError("Une erreur s'est produite lors de la récupération des jeux");
          });
      };

    //lancement au chargement de la page
    useEffect(() => {
        console.log("EFFECT: récupération des jeux");
        fetchGames();
    }, []);
    
    // maj de la table apres suppression ou modification
    const refreshTable = () => {
        console.log("REFRESH")
        fetchGames();
    };
  return (
    <div className="container mx-auto p-4 h-screen">
    <div className="mt-4 mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-semibold mb-4">Gestion des jeux</h1>
        <div>
            <Link
                to="/addGame"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-4"
            >
                Ajouter un jeu
            </Link>
            <Link
                to="/supMultiple"
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            >
                Supprimer
            </Link>
        </div>
    </div>

    <div className="overflow-x-auto bg-white rounded-md">
        <table className="table-auto w-full border-collapse border border-gray-200">
            <thead>
                <tr className="bg-gray-400">
                    <th className=" px-4 py-2 flex items-center">
                        <input type="checkbox" />
                    </th>
                    <th className="border border-gray-300 px-4 py-2">ID</th>
                    <th className="border border-gray-300 px-4 py-2">Nom</th>
                    <th className="border border-gray-300 px-4 py-2">Date de sortie</th>
                    <th className="border border-gray-300 px-4 py-2">Description</th>
                    <th className="border border-gray-300 px-4 py-2">Image</th>
                    <th className="border border-gray-300 px-4 py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {error ? (
                    <tr>
                        <td colSpan="7" className="text-red-500">
                            {error}
                        </td>
                    </tr>
                ) : (
                    games.map((unjeu, index) => (
                        <tr key={unjeu.id} className={index % 2 === 1 ? "bg-gray-200" : ""}>
                            <td className="border border-gray-300 px-4 py-2">
                                <input type="checkbox" />
                            </td>
                            <td className="border border-gray-300 px-4 py-2">{unjeu.id}</td>
                            <td className="border border-gray-300 px-4 py-2">{unjeu.titre}</td>
                            <td className="border border-gray-300 px-4 py-2">{unjeu.dateSortie}</td>
                            <td className="border border-gray-300 px-4 py-2">{unjeu.description}</td>
                            <td className="border border-gray-300 px-4 py-2">{unjeu.image}</td>
                            <td className="border border-gray-300 px-4 py-2">
                                <CrudButtons game={unjeu} refreshTable={refreshTable}/>
                            </td>
                        </tr>
                    ))
                )}
            </tbody>
        </table>
    </div>
</div>


  );
}

export default AdminGameManagement;
