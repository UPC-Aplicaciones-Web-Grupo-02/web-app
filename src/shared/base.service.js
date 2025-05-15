import axios from 'axios';
export class BaseService {
  static http = axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL
  });
}
