import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserInputLoginData } from 'src/app/core/models/user-input-login-data';

@Component({
  selector: 'login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class LoginFormComponent implements OnInit {
  @Input() authInProgress: boolean;
  public username: string = '';
  public password: string = '';
  public loginInProgress: boolean;
  @Output() loginClicked: EventEmitter<UserInputLoginData> = new EventEmitter();
  @Output() signUpClicked: EventEmitter<UserInputLoginData> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public onLoginClicked(): void {
    this.loginInProgress = true;
    const loginData: UserInputLoginData = {
      username: this.username,
      password: this.password
    };
    this.loginClicked.emit(loginData);
  }

  public onSignUpClicked(): void {
    this.loginInProgress = true;
    const signInData: UserInputLoginData = {
      username: this.username,
      password: this.password
    };
    this.signUpClicked.emit(signInData);
  }

}
