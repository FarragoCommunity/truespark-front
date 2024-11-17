import axios from "axios";

const Axios = axios.create({
    baseURL: "https://truespark-backend.vercel.app/api/v1/",
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "*",
  },
  withCredentials: true,
});

export default Axios;
