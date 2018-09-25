import { RecipeDetailsModule } from './recipe-details.module';

describe('RecipeDetailsModule', () => {
  let recipeDetailsModule: RecipeDetailsModule;

  beforeEach(() => {
    recipeDetailsModule = new RecipeDetailsModule();
  });

  it('should create an instance', () => {
    expect(recipeDetailsModule).toBeTruthy();
  });
});
