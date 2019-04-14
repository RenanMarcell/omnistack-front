import axios from 'axios';

const api = axios.create({
    baseURL: 'https://omnistack-backend-renan.herokuapp.com/',
});

export default api;