import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});

export class ScooterApiService {
  getScooters() {
    return http.get('/scooters');
  }

  updateScooter(id, data) {
    return http.put(`/scooters/${Number(id)}`, data);
  }
  createScooter(data) {
    return http.post('/scooters', data);
  }
  deleteScooter(id) {
    return http.delete(`/scooters/${id}`);
  }
}
