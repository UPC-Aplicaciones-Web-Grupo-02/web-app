import { BaseServices } from '../../../shared/BaseService.js';
import Type from '../model/typeSuscription.js';
import Suscription from '../model/suscription.js';

export default class typeService {

    static async MostrarSuscription() {
        const response = await BaseServices.http.get('/type_suscription');
        return response.data.map(type => new Type(type));
    }

    static async RegistrarSuscription(suscription) {
        const response = await BaseServices.http.post('/suscriptions', suscription);
        return new Suscription(response.data);
    }
}
