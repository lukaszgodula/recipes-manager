import { initialState } from 'src/app/core/+state/recipes-manager.init';
import { RecipesManagerState } from 'src/app/core/+state/recipes-manager.interfaces';

import { RecipesManagerActions, RecipesManagerActionTypes } from './recipes-manager.actions';

export function recipesManagerReducer(state = initialState, action: RecipesManagerActions): RecipesManagerState {
  switch (action.type) {

    case RecipesManagerActionTypes.RecipesLoaded:
      return { ...state, ...action.payload};

    default:
      return state;
  }
}
