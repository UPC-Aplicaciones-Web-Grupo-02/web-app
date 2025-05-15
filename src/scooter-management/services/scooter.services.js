import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3000',
});
export class ScooterApiService {

  getScooters() {
    return http.get('/scooters');
  }
}
