
import axios from "axios";

//TODO ADD APY KEY
const key = "0e9585eda8df4c47a007aea56049019b";
const axiosInstance = axios.create({  
    baseURL: "https://api.rawg.io/api"
});

const getGameList = () => axiosInstance.get(`/games?key=${key}`)
const getGameById = (id) => axiosInstance.get(`/games/${id}?key=${key}`);

export default {
    getGameList,
    getGameById
}
