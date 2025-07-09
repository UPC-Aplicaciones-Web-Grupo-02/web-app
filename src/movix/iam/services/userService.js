import User from '../model/user.js';
import Roles from '../model/role.js';
import BaseService from "@/shared/BaseService.js";

export class UserService {
  // Iniciar sesión
  async signIn(email, password) {
    const response = await BaseService.http.post(`/api/v1/Users/login`, {
      email,
      password
    });

    return {
      token: response.data.token,
      user: new User(response.data)
    };
  }

  // Obtener usuario por ID
  async getUserById(id) {
    const response = await BaseService.http.get(`/api/v1/Users/${id}`);
    return new User(response.data);
  }

  // Registrar usuario
  async signUp(user) {
    const response = await BaseService.http.post("/api/v1/Users", user);
    return new User(response.data);
  }

  // Editar usuario
  async editUser(id, user) {
    const response = await BaseService.http.put(`/api/v1/Users/${id}`, user);
    return new User(response.data);
  }

  // Eliminar usuario
  async deleteUser(id) {
    return await BaseService.http.delete(`/api/v1/Users/${id}`);
  }

  // Obtener todos los roles
  async getRoles() {
    const response = await BaseService.http.get('/api/v1/UserRoles');
    return response.data.map(role => new Roles(role));
  }
}
