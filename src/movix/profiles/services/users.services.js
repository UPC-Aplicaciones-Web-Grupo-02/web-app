import {BaseService} from "@/shared/base.service.js"

export class Db {
  signIn(email, password) {
    return BaseService.http.get(`/user/signin?email=${email}&password=${password}`);
  }
  signUp(user){
    return BaseService.http.post("/user",user)
  }

  editUser(id,user){
    return BaseService.http.put("/user/" + id,user)
  }

  deleteUser(id){
    return BaseService.http.delete("/user/" + id)
  }
}
