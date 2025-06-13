import { BaseServices } from '@/shared/BaseService.js';
import Brand from '../model/brand.js';

export default class BrandService {

    // Esta es para obtener la lista de personas
    static async MostrarBrand() {
        const response = await BaseServices.http.get('/brands');
        return response.data.map(brand => new Brand(brand));
    }

    // Esta es para obtener una brand por su ID
    static async MostrarBrandPorId(id) {
        const response = await BaseServices.http.get(`/brands/${id}`);
        return new Brand(response.data);
    }

    // Esta es para crear una brand
    static async CrearBrand(brand) {
        const response = await BaseServices.http.post('/brands', brand);
        return new Brand(response.data);
    }
}
