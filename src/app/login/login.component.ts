import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() { }

  public login() {
    this.authService.signInWithEmail('lukaszgodula@gmail.com', '123456')
      .then((res) => {
        this.router.navigate(['../']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  public logOut() {
    this.authService.logOut();
  }

}
