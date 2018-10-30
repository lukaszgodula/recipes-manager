import { TestBed } from '@angular/core/testing';

import { AddEditRecipeService } from './add-edit-recipe.service';

describe('AddEditRecipeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddEditRecipeService = TestBed.get(AddEditRecipeService);
    expect(service).toBeTruthy();
  });
});
