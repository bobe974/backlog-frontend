
import axios from "axios";

//TODO ADD APY KEY
const key = "";
const axiosInstance = axios.create({  
    baseURL: "https://api.rawg.io/api"
});

const getGameList = () => axiosInstance.get(`/games?key=${key}`)

export default {
    getGameList
}
