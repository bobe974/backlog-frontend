import React from "react";
import { useForm } from "react-hook-form";
import GlobalApi from "../services/GlobalApi";
import Jeu from "../modeles/Jeu";

function GameManagement() {
  const {
    register,
    handleSubmit,
    formState: { errors },
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
    GlobalApi.ajouterJeu(jeu);
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
    </div>
  );
}

export default GameManagement;
