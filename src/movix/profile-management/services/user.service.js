import { BaseService } from "@/shared/base.service.js";

export class Db {
  async signIn(email, password) {
    return await BaseService.http.get(`/users`, {
      params: { email, password }
    });
  }

  async signUp(user) {
    return await BaseService.http.post("/users", user);
  }

  async editUser(id, user) {
    return await BaseService.http.put(`/users/${id}`, user);
  }

  async deleteUser(id) {
    return await BaseService.http.delete(`/users/${id}`);
  }
}
