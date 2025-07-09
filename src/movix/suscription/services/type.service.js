import Type from '../model/typeSuscription.js';
import BaseService from "@/shared/BaseService.js";
import Suscription from "@/movix/suscription/model/suscription.js";

export default class TypeService {
  // Obtener todos los tipos de suscripción
  static async MostrarSuscription() {
    try {
      const response = await BaseService.http.get('/api/v1/TypeSuscriptions');
      return response.data.map(type => new Type(type));
    } catch (error) {
      console.error('Error al obtener tipos de suscripción:', error);
      throw error;
    }
  }

  // Registrar una nueva suscripción
  static async RegistrarSuscription(suscription) {
    try {
      const response = await BaseService.http.post('/api/v1/Suscriptions', suscription);
      return new Suscription(response.data);
    } catch (error) {
      console.error('Error al registrar suscripción:', error);
      throw error;
    }
  }
}
