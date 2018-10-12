import { NavigationEnd } from '@angular/router';
import { Observable } from 'rxjs';

export class MockRouter {
  public ne = new NavigationEnd(0, 'http://localhost:4200/login', 'http://localhost:4200/login');
  public events = new Observable(observer => {
    observer.next(this.ne);
    observer.complete();
  });
}
