import { RecipesListModule } from './recipes-list.module';

describe('RecipesListModule', () => {
  let recipesListModule: RecipesListModule;

  beforeEach(() => {
    recipesListModule = new RecipesListModule();
  });

  it('should create an instance', () => {
    expect(recipesListModule).toBeTruthy();
  });
});
