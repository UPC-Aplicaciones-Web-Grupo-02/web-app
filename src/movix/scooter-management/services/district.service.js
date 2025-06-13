import { BaseServices } from '@/shared/BaseService.js';
import District from '../model/district.js';

export default class DistrictService {

    // Esta es para obtener la lista de personas
    static async MostrarDistrito() {
        const response = await BaseServices.http.get('/districts');
        return response.data.map(district => new District(district));
    }

    // Esta es para crear un distrito
    static async CrearDistrito(district) {
        const response = await BaseServices.http.post('/districts', district);
        return new District(response.data);
    }
}
