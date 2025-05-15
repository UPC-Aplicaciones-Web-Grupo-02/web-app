import {BaseService} from "@/shared/base.service.js";


export class Db {

  getAllScooters() {
    return BaseService.http.get("/scooters");
  }
  createScooter(scooter){
    return BaseService.http.post("/scooters",scooter)
  }

  editScooter(id,scooter){
    return BaseService.http.put("/scooters/" + id,scooter)
  }

  deleteScooter(id){
    return BaseService.http.delete("/scooters/" + id)
  }

  createReservation(reservation) {
    return BaseService.http.post("/scooters", reservation);
  }

}
