import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ChangeProcessUser } from 'src/app/models/dto/change-process-user';
import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get("http://localhost:8080/users");
  }

  registerNewUser(user: User) {
    return this.http.post("http://localhost:8080/users", user);
  }

  changeUserProcess(userIds: string) {
    return this.http.post("http://localhost:8080/users/process", {'userIds' : userIds});
  }
}
