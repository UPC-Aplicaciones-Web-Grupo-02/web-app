import axios from 'axios';
export class BaseService{
  static BASE_URL = 'http://localhost:3000/';
  static http= axios.create({
    baseURL: BaseService.BASE_URL
  });
}
