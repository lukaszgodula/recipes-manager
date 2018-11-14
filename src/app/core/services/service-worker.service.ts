import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Injectable()
export class ServiceWorkerService {

  constructor(updates: SwUpdate) {
    updates.available.subscribe(evt => {
      console.log(evt);
    });
  }
}
