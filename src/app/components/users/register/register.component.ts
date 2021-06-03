import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewUserResponse } from 'src/app/models/dto/new-user-response';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/users/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user = new User();
  onLoad: boolean = false;

  constructor(
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.onLoad = true;
    this.userService.registerNewUser(this.user).subscribe(
      (response: any) => {
        this.onLoad = false;
        const userResponse  = new NewUserResponse(response.success, response.errors, response.user);
        if (userResponse.success) {
          Swal.fire({
            icon: 'success',
            title: 'Usuario registrado',
            showConfirmButton: false,
            timer: 1500
          })
          this.router.navigateByUrl('/dummy', {skipLocationChange: true}).then(() => {
            this.router.navigate(["register"]);
          })
        } else {
          let errors: string = '';
          userResponse.errors.forEach(errorElement => {
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
