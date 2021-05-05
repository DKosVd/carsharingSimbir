import axios, { AxiosInstance } from 'axios';
import dotenv from 'dotenv'

dotenv.config();
const instance: AxiosInstance = axios.create({
    baseURL:  process.env.REACT_APP_APLICATION_URL || "https://api-factory.simbirsoft1.com/api/db",
    headers: { 'X-Api-Factory-Application-Id': process.env.REACT_APP_APLICATION_ID || "5e25c641099b810b946c5d5b"},
})


export  {instance};