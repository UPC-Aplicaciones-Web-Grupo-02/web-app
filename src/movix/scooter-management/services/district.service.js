import District from '../model/district.js';
import BaseService from "@/shared/BaseService.js";

export default class DistrictService {
  // Obtener todos los distritos
  static async MostrarDistrito() {
    try {
      const response = await BaseService.http.get('/api/v1/Districts');
      return response.data.map(district => new District(district));
    } catch (error) {
      console.error('Error al obtener distritos:', error);
      throw error;
    }
  }

  // Crear un nuevo distrito
  static async CrearDistrito(district) {
    try {
      const response = await BaseService.http.post('/api/v1/Districts', district);
      return new District(response.data);
    } catch (error) {
      console.error('Error al crear distrito:', error);
      throw error;
    }
  }
}
