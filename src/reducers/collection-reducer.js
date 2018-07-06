import { VIEW_COLLECTION_REQUEST, VIEW_COLLECTION_SUCCESS, VIEW_COLLECTION_ERROR } from '../actions/collection-actions';

const intialState = {
  collection: [],
  loading: false,
  error: null
};

export function collectionReducer(state=intialState, action) {
  switch(action.type) {
    case VIEW_COLLECTION_REQUEST:
    return {
      ...state,
      collection: [],
      loading: true
    };

    case VIEW_COLLECTION_SUCCESS:
    return {
      ...state,
      collection: action.collection,
      loading: false,
      error: null
    };

    case VIEW_COLLECTION_ERROR:
    return {
      ...state,
      loading: false,
      error: 'There was an error fetching collection'
    };

    default:
      return state;
  }

};
