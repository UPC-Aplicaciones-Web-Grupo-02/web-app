import { BaseService } from "@/shared/base.service.js";

export class ScooterApiService {
  getScooters() {
    return BaseService.get('/scooters');
  }

  updateScooter(id, data) {
    return BaseService.put(`/scooters/${Number(id)}`, data);
  }
  createScooter(data) {
    return BaseService.post('/scooters', data);
  }
  deleteScooter(id) {
    return BaseService.delete(`/scooters/${id}`);
  }
}
