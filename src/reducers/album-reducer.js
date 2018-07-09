import {
  ADD_ALBUM_REQUEST,
  ADD_ALBUM_SUCCESS,
  ADD_ALBUM_ERROR,
  REMOVE_ALBUM_REQUEST,
  REMOVE_ALBUM_SUCCESS,
  REMOVE_ALBUM_ERROR
} from '../actions/album-actions';

const intialState = {
  album: {},
  loading: false,
  added: false,
  error: null,
};

export function albumReducer(state=intialState, action) {
  switch(action.type) {
    case ADD_ALBUM_REQUEST:
    return {
      ...state,
      album: {},
      loading: true,
      added: false
    };

    case ADD_ALBUM_SUCCESS:
    return {
      ...state,
      album: action.album,
      loading: false,
      added: action.added,
      error: null
    };

    case ADD_ALBUM_ERROR:
    return {
      ...state,
      loading: false,
      added: false,
      error: 'There was an error adding album'
    };

    case REMOVE_ALBUM_REQUEST:
    return {
      ...state,
      album: action.album,
      loading: true
    };

    case REMOVE_ALBUM_SUCCESS:
    return {
      ...state,
      album: action.album,
      loading: false,
      error: null
    };

    case REMOVE_ALBUM_ERROR:
    return {
      ...state,
      loading: false,
      error: 'There was an error removing album'
    };


    default:
      return state;
  }

};
