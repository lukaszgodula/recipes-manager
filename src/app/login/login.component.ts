import { Component, OnInit } from '@angular/core';
import { UserInputLoginData } from 'src/app/core/models/user-input-login-data';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() { }

  public logIn(event: UserInputLoginData) {
    this.authService.signInWithEmail(event);
  }

  public signUp(event: UserInputLoginData) {
    this.authService.signUpWithEmail(event);
  }

  public logOut() {
    this.authService.logOut();
  }

}
