import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ChangeProcessUser } from 'src/app/models/dto/change-process-user';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/users/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {
  user: User = new User();
  users: User[] = new Array;
  onLoad: boolean = false;

  dataSource: MatTableDataSource<User>;
  displayedColumns = ['select', 'name', 'lastname', 'proccess'];

  constructor(
    private userService: UserService,
    private router: Router
  ) {
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.onLoad = true;
    this.userService.getAllUsers().subscribe(
      (response: any) => {
        this.onLoad = false;
        const usersResponse: User[] = response;
        usersResponse.forEach(userResponse => {
          let user: User = new User;
          user.id = userResponse.id;
          user.name = userResponse.name;
          user.lastname = userResponse.lastname;
          user.process = userResponse.process;
          user.select = false;
          this.users.push(user);
          this.dataSource.data = this.users;
        });
      },
      (error: any) => {
        this.onLoad = false;
        this.viewError('');
      }
    )
  }

  changeProcess() {
    this.onLoad = true;
    let userIds: string = '[';
    this.users.forEach(user => {
      if (user.select) userIds += `${user.id.toString()},`;
    });
    if (userIds.length > 1) {
      userIds = userIds.substr(0, userIds.length - 1);
    }
    userIds += ']';
    this.userService.changeUserProcess(userIds).subscribe(
      (response: any) => {
        this.onLoad = false;
        const changeProcess: ChangeProcessUser = response;
        if (changeProcess.success) {
          Swal.fire({
            icon: 'success',
            title: 'Usuarios procesados',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl('/dummy', {skipLocationChange: true}).then(() => {
            this.router.navigate(["users"]);
          })
        } else {
          let errors: string = '';
          changeProcess.errors.forEach(errorElement => {
            errors += `${errorElement} <br>`;
          });
          this.viewError(errors);
        }
      },
      (error: any) => {
        this.onLoad = false;
        this.viewError('');
      }
    )
  }

  viewError(errors: string) {
    Swal.fire({
      icon: 'error',
      title: 'Ha ocurrido un error',
      html: `${errors}`,
    })
  }

}
