import axios from 'axios';
import dotenv from 'dotenv'
dotenv.config();

axios.interceptors.request.use((config) => {
    config.headers['X-Api-Factory-Application-Id'] = process.env.REACT_APP_APLICATION_ID
    return config;
})

export { axios };