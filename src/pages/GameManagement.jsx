import React from "react";
import { useForm } from "react-hook-form";
import GlobalApi from "../services/GlobalApi";
import Jeu from "../modeles/Jeu";
import { useState } from "react";
import checkIcon from "../icons/checkIcon.png";
function GameManagement() {
  const [successMessage, setSuccessMessage] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    //obj jeu
    const jeu = new Jeu(
      "",
      data.nom,
      data.dateSortie,
      data.description,
      data.image
    );
    GlobalApi.ajouterJeu(jeu).then((succes) => {
      if (succes.status === 201) {
        setSuccessMessage("COUP CRITIQUE : Jeu ajouté avec succès !");
        //reset le formulaire:
        reset();
      } else {
        setSuccessMessage("ECHEC CRITIQUE : Jeu non ajouté !");
      }
    });
  };

  return (
    <div className="h-screen">
      <div className="max-w-md mx-auto mt-10 p-6 border rounded-lg shadow-lg ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label
              htmlFor="nom"
              className="block text-sm font-medium text-gray-700"
            >
              Nom du jeu
            </label>
            <input
              type="text"
              id="nom"
              {...register("nom")}
              className="mt-1 p-2 border rounded-md w-full"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="dateSortie"
              className="block text-sm font-medium text-gray-700"
            >
              Date de sortie
            </label>
            <input
              type="date"
              id="dateSortie"
              {...register("dateSortie", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {errors.dateSortie && (
              <span className="text-red-500 text-sm">Ce champ est requis</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              {...register("description", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {errors.description && (
              <span className="text-red-500 text-sm">Ce champ est requis</span>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image
            </label>
            <input
              type="text"
              id="image"
              {...register("image", { required: true })}
              className="mt-1 p-2 border rounded-md w-full"
            />
            {errors.image && (
              <span className="text-red-500 text-sm">Ce champ est requis</span>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Ajouter
          </button>
        </form>
      </div>
      {successMessage && (
        <div className="flex items-center justify-center mt-4 p-3 border border-green-600 bg-green-100 rounded-md text-black">
          <img src={checkIcon} alt="Check Icon" className="w-6 h-6 mr-2" />
          <p className="text-green-600">{successMessage}</p>
        </div>
      )}
    </div>
  );
}

export default GameManagement;
