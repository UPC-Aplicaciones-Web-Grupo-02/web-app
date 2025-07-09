
import Brand from '../model/brand.js';
import BaseService from "@/shared/BaseService.js";

export default class BrandService {

    // Esta es para obtener la lista de personas
    static async MostrarBrand() {
        const response = await BaseService.http.get('/api/v1/Brands');
        return response.data.map(brand => new Brand(brand));
    }

    // Esta es para obtener una brand por su ID
    static async MostrarBrandPorId(id) {
        const response = await BaseService.http.get(`/api/v1/Brands${id}`);
        return new Brand(response.data);
    }

    // Esta es para crear una brand
    static async CrearBrand(brand) {
        const response = await BaseService.http.post('/api/v1/Brands', brand);
        return new Brand(response.data);
    }
}
