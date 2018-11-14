import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';

import { ServiceWorkerService } from './core/services/service-worker.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService, private serviceWorkerService: ServiceWorkerService) {
  }

  ngOnInit() {
    this.authService.observeLoginStatus();
  }

}
