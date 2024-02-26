import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { User } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private userService: UserService, private router: Router){}

  error!: any[]

  myUser: User = {

    username: '',

    password: '',

    name: '',

    familyName: '',

    accessionDate: new Date,

    nationality: '',

    identityDocument: '',

    identityNumber: '',

  }


  submitForm(){
    this.userService.register(this.myUser).subscribe({
      next: (res: any) => {
        alert("created successfuly");
        localStorage.setItem('token', res.token)
        this.router.navigateByUrl('/')
        console.log(res.token, 'response');

      },
      error: (err: any) => {
        this.error = err.error;
        console.log(err.error.errors, 'errors');
      },
    });

    this.clear()
  }


  clear(){
    this.myUser = {
      username: '',

      password: '',

      name: '',

      familyName: '',

      accessionDate: new Date,

      nationality: '',

      identityDocument: '',

      identityNumber: '',

    }
  }
}
