import axios from "axios";

export const api = axios.create({
    baseURL: 'https://backend-menu2-0.vercel.app/api',
    headers: {
      'Content-Type': 'application/json',
    }
})