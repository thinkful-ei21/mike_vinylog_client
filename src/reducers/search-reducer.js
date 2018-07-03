import { SEARCH_ALBUMS_REQUEST, SEARCH_ALBUMS_SUCCESS, SEARCH_ALBUMS_ERROR
} from '../actions/search-actions';

const initialState = {
  albums: [],
  loading: false,
  error: null
};

export function searchReducer(state=initialState, action) {
  // Handle these sync actions
  if (action.type === SEARCH_ALBUMS_REQUEST) {
    return {
        ...state,
        loading: true,
        error: null
    }
  }
  else if (action.type === SEARCH_ALBUMS_SUCCESS) {
      return {
          ...state,
          albums: action.albums,
          loading: false,
          error: null
      }
    
  }
  else if (action.type === SEARCH_ALBUMS_ERROR) {
      return {
          ...state,
          loading: false,
          error: action.error
      }
  }
  return state;
}

