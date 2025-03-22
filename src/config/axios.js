import axios from "axios";
const axiosInstance = axios.create({
    baseURL:"http://localhost:1806",
    headers:{
        'Content-Type':"application/json",
        "Allow-Control-Allow-Origin":"*"
    }
})
export default axiosInstance