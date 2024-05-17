import React from "react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import checkIcon from "../icons/checkIcon.png";
import GlobalApi from "../services/GlobalApi";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Jeu from "../modeles/Jeu";

// TODO probleme avec required si l'user de modifie pas un champ -> considéré comme vide -> IMPENSABLE MODIFIE CA FUMIER!
function EditGame() {
    //recup l'id en param de l'url
    let {id} = useParams();

  const [successMessage, setSuccessMessage] = useState(null);
  const [game, setGame] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    values,
  } = useForm();


  useEffect(() => {
    console.log("id" + id);
    //récuperer les données du jeu
    GlobalApi.getGameById(id).then((response) => {
        console.log("RESPONSE" + response.data.titre);
        //préremplir le formulaire via useState
        setGame(response.data);
    }
    ).catch((error) => {
      console.error("Erreur lors de la récupération du jeu :", error);
      // Gérer les erreurs si nécessaire
    });
  }, []);

  //data = donnée du form ! 
  const onSubmit = (data) => {
    //recréer un obj car l'id n'est pas dans le formulaire
    const jeu = new Jeu(game.id,data.titre,data.dateSortie,data.description,data.image)
    console.log("Json envoyé id :" + jeu.id);
    //requete PUT
    GlobalApi.modifierJeu(jeu).then((response) =>{
        console.log("RESPONSE MSG" + response.status)
        if(response.status === 200){
            setSuccessMessage(
                <span>
                  COUP CRITIQUE : Le jeu <strong style={{ color: 'green' }}>{jeu.titre}</strong> a été modifié avec succès !
                </span>
              ); 
        }else{
            setSuccessMessage("ECHEC CRITIQUE !");
        }
    })
    //verifier le retour et afficher msg de confirmation
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
              {...register("titre")}
              className="mt-1 p-2 border rounded-md w-full"
              defaultValue = {game?game.titre:""}
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
              defaultValue = {game?game.dateSortie:""}
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
              defaultValue = {game?game.description:""}
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
              {...register("image", { required: true})}
              className="mt-1 p-2 border rounded-md w-full"
              defaultValue = {game?game.image:""}
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
