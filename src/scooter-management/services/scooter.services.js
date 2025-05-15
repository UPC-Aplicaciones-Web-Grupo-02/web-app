import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});

export class ScooterApiService {
  getScooters() {
    return http.get('/scooters');
  }

  updateScooter(id, data) {
    // Asegúrate de que id es numérico
    return http.put(`/scooters/${Number(id)}`, data);
  }
  createScooter(data) {
    return http.post('/scooters', data);
  }
}
