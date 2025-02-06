import axios from "axios";



export const apiClient = axios.create({
    baseURL: "http://localhost:8000",
    timeout: 2000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.response.use(
    response => response,
    error => {
        console.error("API error:", error);
        return Promise.reject(error);
    }
);

