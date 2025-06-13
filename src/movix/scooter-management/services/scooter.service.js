import { BaseServices } from "@/shared/BaseService.js";
import Scooter from '../model/scooter.js';

export default class ScooterService {

    // Esta es para obtener la lista de personas
    static async MostrarScooter() {
        const response = await BaseServices.http.get('/scooters');
        return response.data.map(scooter => new Scooter(scooter));
    }

    // Esta es para obtener una scooter por su ID
    static async MostrarScooterPorId(id) {
        const response = await BaseServices.http.get(`/scooters/${id}`);
        return new Scooter(response.data);
    }

    static async CrearScooter(scooter) {
        const response = await BaseServices.http.post('/scooters', scooter);
        return new Scooter(response.data);
    }

    static async EliminarScooter(id) {
        const response = await BaseServices.http.delete(`/scooters/${id}`);
        return response.data;
    }
}
