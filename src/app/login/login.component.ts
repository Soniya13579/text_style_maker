import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    'email': new FormControl(),
    'password': new FormControl()
  })
  
  usersArray:any;

  constructor(private router: Router, private loginService: LoginService) {}

  login() {
    var uname= this.loginForm.get('email').value;
    var pass = this.loginForm.get('password').value

    this.loginService.addUser(uname, pass)
    this.router.navigate(['/mainScreen'])
  }

  ngOnInit(): void {
    this.usersArray = this.loginService.getUsers();
  }

}
