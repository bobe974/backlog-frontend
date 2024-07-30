import { data } from "autoprefixer";
import axios from "axios";

//TODO ADD APY KEY
const key = "0e9585eda8df4c47a007aea56049019b";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

//api externe
const getRawgGameList = () => axiosInstance.get(`/games?key=${key}`);
const getRawgGameById = (id) => axiosInstance.get(`/games/${id}?key=${key}`);

//api backlog
const axiosInstance2 = axios.create({
  baseURL: "http://localhost:9000/api",
});

function ajouterJeu(jeu) {
  //transmettre la promesse de axios vers une nouvelle promesse (wtf)
  return new Promise((resolve, reject) => {
    const data = {
      titre: jeu.titre,
      dateSortie: jeu.dateSortie,
      description: jeu.description,
      image: jeu.image,
    };

    axiosInstance2
      .post("/jeu", data)
      .then((response) => {
        console.log("Response:", response.status);
        resolve(response); //resoudre la promesse
      })
      .catch((error) => {
        console.error("Erreur lors de la requête POST game :", error);
        reject(error); //rejeter la promesse
      });
  });
}

function ajouterJeuJoueur(idJeu, joueurId, avis, info) {
  const data = {
    joueur: {
      id: joueurId,
    },
    jeu: {
      id: idJeu
    },
    etat: info.etat,
    tempsDeJeu: info.tempsDeJeu,
    dateDebut: info.dateDebut,
    dateFin: info.dateFin,
    avis: {
      note: avis.note,
      justification: avis.justification,
      typeAvis: avis.typeAvis,
    },
  };

  console.log("JSON envoyé à l'API :");
  console.log(data);
  const postJoueurJeu = () => axiosInstance2.post("/joueurjeu", data);

  postJoueurJeu()
    .then((response) => {
      console.log("requête POST JoueurJeu:");
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête POST :", error);
    });
}

const getJoueurJeuByJeuAndJoueurId = (idJoueur, idJeu) => axiosInstance2.get(`/joueurjeu/${idJoueur}/${idJeu}`);

function updateJoueurJeu(updatedJoueurJeu, id){
  //convertir l'objet en format JSON
  const data = JSON.stringify(updatedJoueurJeu);

  console.log("Données JSON envoyées :", data);

  axiosInstance2.put(`/joueurjeu/${id}`, data, {
    headers: {
        'Content-Type': 'application/json'
    }
})
.then(response => {
    console.log("Mise à jour réussie :", response);
})
.catch(error => {
    console.error("Erreur lors de la mise à jour du joueurJeu :", error);
});
}


const getGames = () => axiosInstance2.get('/jeu');
const getGameById = (id) => axiosInstance2.get(`/jeu/${id}`);
const deleteGame = (id) => axiosInstance2.delete(`/jeu/${id}`);
const getJoueurJeuById = (id) => axiosInstance2.get(`/joueurjeu/joueur/${id}`);

function modifierJeu(jeu){
  const data = {
    titre: jeu.titre,
    dateSortie: jeu.dateSortie,
    description: jeu.description,
    image: jeu.image,
  }
console.log("Data envoyé pour update " + jeu.id + data.titre + data.dateSortie + data.description + data.image);
  return axiosInstance2.put(`/jeu/${jeu.id}`, data);
}

export default {
  getRawgGameList,
  getRawgGameById,
  getGameById,
  getJoueurJeuById,
  ajouterJeuJoueur,
  ajouterJeu,
  getGames,
  deleteGame,
  modifierJeu,
  updateJoueurJeu,
  getJoueurJeuByJeuAndJoueurId
};
