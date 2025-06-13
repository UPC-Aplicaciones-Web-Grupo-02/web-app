import { BaseServices } from '@/shared/BaseService.js';
import Model from '../model/model.js';

export default class ModelService {

  // Esta es para obtener la lista de personas
  static async MostrarModelo() {
    const response = await BaseServices.http.get('/models');
    return response.data.map(model => new Model(model));
  }

  // Esta es para crear un modelo
  static async CrearModelo(model) {
    const response = await BaseServices.http.post('/models', model);
    return new Model(response.data);
  }
}
