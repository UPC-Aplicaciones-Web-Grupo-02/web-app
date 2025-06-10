import { BaseServices } from '../../../shared/BaseService.js';
import Reservation from '../model/reservation.js';

export default class reservationService {

    static async MostrarReservation() {
        const response = await BaseServices.http.get('/reservations');
        return response.data.map(reservation => new Reservation(reservation));
    }

    static async createReservation(reservation) {
        const response = await BaseServices.http.post('/reservations', reservation);
        return new Reservation(response.data);
    }
}
