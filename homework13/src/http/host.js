import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_HACKERNEWS_API
});

export default $host;