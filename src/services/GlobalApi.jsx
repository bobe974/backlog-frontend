import axios from "axios";

//TODO ADD APY KEY
const key = "0e9585eda8df4c47a007aea56049019b";
const axiosInstance = axios.create({
  baseURL: "https://api.rawg.io/api",
});

//api externe
const getGameList = () => axiosInstance.get(`/games?key=${key}`);
const getGameById = (id) => axiosInstance.get(`/games/${id}?key=${key}`);

//api backlog
const axiosInstance2 = axios.create({
  baseURL: "http://localhost:9000/api",
});
/*TODO VIRER CETTE MERDE */
/*
const postJoueurJeu = () => axiosInstance2.post('/joueurjeu', {
    "joueur": {
        "id": 3
        },
    "jeu": {
        "id": 2
    },
    "etat": "PLATINE",
    "tempsDeJeu": 4,
    "dateDebut": "2024-03-26",
    "dateFin": "2024-03-27",
    "avis": {
        "note": 20,
        "justification": "tres bien j'aime bien",
        "typeAvis" : "ECLATAX"
    }
});**/
function ajouterJeu(jeu) {
  const data = {
    titre: jeu.titre,
    dateSortie: jeu.dateSortie,
    description: jeu.description,
    image: jeu.image,
  };
  console.log("JSON envoyé à l'API :");
  console.log(data);
  const postGame = () =>
    axiosInstance2.post("http://localhost:9000/api/jeu", data);
  postGame()
    .then((response) => {
      console.log("requête POST Jeu:");
      console.log(response.data);
    })
    .catch((error) => {
      console.error("Erreur lors de la requête POST game :", error);
    });
}
function ajouterJoueur(jeu, joueurId, avis, info) {
  const data = {
    joueur: {
      id: joueurId,
    },
    jeu: {
      titre: jeu.titre,
      dateSortie: jeu.dateSortie,
      description: jeu.description,
      image: jeu.image,
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

export default {
  getGameList,
  getGameById,
  ajouterJoueur,
  ajouterJeu,
};
