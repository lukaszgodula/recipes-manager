import { TestBed } from '@angular/core/testing';
import { SwUpdate } from '@angular/service-worker';
import { SwUpdateMock } from 'src/testing/swupdate.mock';

import { RecipesManagerService } from './recipes-manager.service';
import { ServiceWorkerService } from './service-worker.service';

describe('ServiceWorkerService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ServiceWorkerService,
      { provide: SwUpdate, useClass: SwUpdateMock },
      { provide: RecipesManagerService, useValue: {} }
    ]
  }));

  it('should be created', () => {
    const service: ServiceWorkerService = TestBed.get(ServiceWorkerService);
    expect(service).toBeTruthy();
  });
});
