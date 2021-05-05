import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

axios.interceptors.request.use((config) => {
    config.headers['X-Api-Factory-Application-Id'] = process.env.REACT_APP_APLICATION_ID || "5e25c641099b810b946c5d5b"
    return config;
})

export { axios };