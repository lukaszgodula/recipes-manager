import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

import { RecipesManagerService } from './recipes-manager.service';

@Injectable()
export class ServiceWorkerService {

  constructor(updates: SwUpdate,
    private recipesManagerService: RecipesManagerService) {
    updates.available.subscribe(evt => {
      this.recipesManagerService.openSnackBar('New version available!', 'Refresh', 10000)
        .afterDismissed().subscribe(() => {
          updates.activateUpdate().then(() => document.location.reload());
        }
        );
    });
  }
}
