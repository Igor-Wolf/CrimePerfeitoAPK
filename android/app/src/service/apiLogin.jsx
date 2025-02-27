import axios from "axios";

export const apiLogin = axios.create({
    baseURL: 'https://login-backend-test.vercel.app/api',
    headers: {
      'Content-Type': 'application/json',
    }
})