import { VIEW_COLLECTION } from '../actions/view-collection-actions';

const intialState = {
  collection: {}
};

export function collectionReducer(state=intialState, action) {
  if (action.type === VIEW_COLLECTION) {
    return {
      ...state,
      collection: action.collection
    }
  }
  return state;
}