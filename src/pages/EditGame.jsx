import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import checkIcon from "../icons/checkIcon.png";
import GlobalApi from "../services/GlobalApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function EditGame() {
    let {id} = useParams();

  const [successMessage, setSuccessMessage] = useState(null);
  const [game, setGame] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();


  useEffect(() => {
    console.log("id" + id);
    //récuperer les données du jeu
    GlobalApi.getGameById(id).then((response) => {
        console.log("RESPONSE" + response.data.titre);
        //préremplir le formulaire
        setGame(response.data);

    }
    );
  }, []);

  const onSubmit = (data) => ({
    //requete PUT
    //verifier le retour et afficher msg de confirmation
  });

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
            Modifier
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

export default EditGame;
