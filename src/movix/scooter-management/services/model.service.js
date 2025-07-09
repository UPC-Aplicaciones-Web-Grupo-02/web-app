import Model from '../model/model.js';
import BaseService from "@/shared/BaseService.js";

export default class ModelService {
  // Obtener la lista de modelos
  static async MostrarModelo() {
    try {
      const response = await BaseService.http.get('/api/v1/Models');
      return response.data.map(model => new Model(model));
    } catch (error) {
      console.error('Error al obtener modelos:', error);
      throw error;
    }
  }

  // Crear un nuevo modelo
  static async CrearModelo(model) {
    try {
      const response = await BaseService.http.post('/api/v1/Models', model);
      return new Model(response.data);
    } catch (error) {
      console.error('Error al crear modelo:', error);
      throw error;
    }
  }
}
