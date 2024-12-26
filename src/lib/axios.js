import axios from "axios";

export const axiosInstance=axios.create({
    baseURL:"https://chatappbackend-cqss.onrender.com/api",
    withCredentials:true,
});