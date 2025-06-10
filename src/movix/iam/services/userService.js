import User from '../model/user.js';
import Roles from '../model/role.js';
import { BaseServices } from "../../../shared/BaseService.js";

export class UserService {
    async signIn(email, password) {
        const response = await BaseServices.http.get(`/users`, {
            params: { email, password }
        });
        return response.data.map(user => new User(user));
    }

    async getUserById(id) {
        const response = await BaseServices.http.get(`/users/${id}`);
        return new User(response.data);
    }

    async signUp(user) {
        const response = await BaseServices.http.post("/users", user);
        return new User(response.data);
    }

    async editUser(id, user) {
        const response = await BaseServices.http.put(`/users/${id}`, user);
        return new User(response.data);
    }

    async deleteUser(id) {
        return await BaseServices.http.delete(`/users/${id}`);
    }

    // Método para obtener roles
    async getRoles() {
        const response = await BaseServices.http.get('/user_roles');
        return response.data.map(role => new Roles(role));
    }
}
