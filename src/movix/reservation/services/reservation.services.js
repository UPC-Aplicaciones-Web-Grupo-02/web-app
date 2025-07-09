import Reservation from '../model/reservation.js';
import BaseService from "@/shared/BaseService.js";

export default class reservationService {

  // Obtener todas las reservaciones
  static async MostrarReservation() {
    try {
      const response = await BaseService.http.get('/api/v1/Reservations');
      return response.data.map(reservation => new Reservation(reservation));
    } catch (error) {
      console.error('Error al obtener reservaciones:', error);
      throw error;
    }
  }

  // Crear una nueva reservación
  static async createReservation(reservation) {
    try {
      const response = await BaseService.http.post('/api/v1/Reservations', reservation);
      return new Reservation(response.data);
    } catch (error) {
      console.error('Error al crear reservación:', error);
      throw error;
    }
  }
}
