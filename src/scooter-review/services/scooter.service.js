import axios from 'axios';

const API_URL = 'http://localhost:3000/scooters'; // Ajusta según tu backend

export default {
    async getAll() {
        const response = await axios.get(API_URL);
        return response.data;
    },

    async getByRegion(region) {
        const response = await axios.get(`${API_URL}?region=${region}`);
        return response.data;
    },

    async getById(id) {
        const response = await axios.get(`${API_URL}/${id}`);
        return response.data;
    },

    async update(id, data) {
        const response = await axios.put(`${API_URL}/${id}`, data);
        return response.data;
    },

    async getReviews(id) {
        const response = await axios.get(`${API_URL}?reviews=${reviews}`);
        return response.data;
    }
};
