import React from "react";
import { Link } from "react-router-dom"; // Importez Link depuis react-router-dom

function AdminGameManagement() {
  return (
    <div className="container mx-auto p-4">
      <div className="mt-4 mb-8">
        <Link
          to="/addGame"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Ajouter un jeu
        </Link>
      </div>

      <h1 className="text-3xl font-semibold mb-4">Gestion des jeux (Admin)</h1>

      {/* Tableau pour afficher la liste des jeux */}
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">Nom</th>
              <th className="border border-gray-400 px-4 py-2">
                Date de sortie
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Description
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Image
              </th>
              <th className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Lignes de données des jeux à afficher ici */}`
            <tr >
              <td className="border border-gray-400 px-4 py-2">{"Cabris dogma 2"}</td>
              <td className="border border-gray-400 px-4 py-2">
                {"19/02/1990"}
              </td>
              <td className="border border-gray-400 px-4 py-2">{"blablalblablalblalbalblablalblalbalblabl"}</td>
              <td className="border border-gray-400 px-4 py-2">{"www.xxxxx.png"}</td>
              <td className="border border-gray-400 px-4 py-2">{"MODIFIER, SUPPRIMER"}</td>
            
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminGameManagement;
