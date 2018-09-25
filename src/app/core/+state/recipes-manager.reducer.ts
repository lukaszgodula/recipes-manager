import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

import { RecipesManagerActions, RecipesManagerActionTypes } from './recipes-manager.actions';

export function recipesManagerReducer(state: RecipesManagerState, action: RecipesManagerActions): RecipesManagerState {
  switch (action.type) {
    case RecipesManagerActionTypes.RecipesLoaded:
      return { ...state, ...action.payload};
    default:
      return state;
  }
}
