export enum RecipesManagerActionTypes {
  RecipesManagerAction = '[RecipesManager] Action',
  TestState = '[RecipesManager] Test'
}

export interface RecipesManager {
  type: RecipesManagerActionTypes.RecipesManagerAction;
}

export interface TestState {
  type: RecipesManagerActionTypes.TestState;
  payload: {
    testStateNumber: number;
  };
}

export type RecipesManagerActions = RecipesManager | TestState;
