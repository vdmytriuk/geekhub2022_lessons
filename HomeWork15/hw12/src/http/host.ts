import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_SWAPI_API
});

export default $host;