import Scooter from '../model/scooter.js';
import BaseService from "@/shared/BaseService.js";

export default class ScooterService {

  // Obtener todos los scooters
  static async MostrarScooter() {
    try {
      const response = await BaseService.http.get('/api/v1/Scooter');
      return response.data.map(scooter => new Scooter(scooter));
    } catch (error) {
      console.error('Error al obtener scooters:', error);
      throw error;
    }
  }

  // Obtener scooter por ID
  static async MostrarScooterPorId(id) {
    try {
      const response = await BaseService.http.get(`/api/v1/Scooter/${id}`);
      return new Scooter(response.data);
    } catch (error) {
      console.error('Error al obtener scooter por ID:', error);
      throw error;
    }
  }

  // Crear scooter
  static async CrearScooter(scooter) {
    try {
      const response = await BaseService.http.post('/api/v1/Scooter', scooter);
      return new Scooter(response.data);
    } catch (error) {
      console.error('Error al crear scooter:', error);
      throw error;
    }
  }

  // Eliminar scooter
  static async EliminarScooter(id) {
    try {
      const response = await BaseService.http.delete(`/api/v1/Scooter/${id}`);
      return response.data;
    } catch (error) {
      console.error('Error al eliminar scooter:', error);
      throw error;
    }
  }
}
