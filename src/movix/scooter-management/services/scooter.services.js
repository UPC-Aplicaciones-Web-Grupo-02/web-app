import { BaseService } from "@/shared/base.service.js";

export class ScooterApiService {
  getScooters() {
    return BaseService.http.get('/scooters');
  }

  updateScooter(id, data) {
    return BaseService.http.put(`/scooters/${Number(id)}`, data);
  }
  createScooter(data) {
    return BaseService.http.post('/scooters', data);
  }
  deleteScooter(id) {
    return BaseService.http.delete(`/scooters/${id}`);
  }
}
