import {API_BASE_URL} from '../config';
import { loadAuthToken } from '../local-storage';

export const ADD_ALBUM_REQUEST = 'ADD_ALBUM_REQUEST';
export const addAlbumRequest = album => ({
    type: ADD_ALBUM_REQUEST,
    album,
    loading: false,
    error: null
});

export const ADD_ALBUM_SUCCESS = 'ADD_ALBUM_SUCCESS';
export const addAlbumSuccess = album => ({
    type: ADD_ALBUM_SUCCESS,
    album,
    error: null
});

export const ADD_ALBUM_ERROR = 'ADD_ALBUM_ERROR';
export const addAlbumError = album => ({
    type: ADD_ALBUM_ERROR,
    album,
    error: this.error
});

export const DELETE_ALBUM = 'DELETE_ALBUM';
export const deleteAlbum = album => ({
    type: DELETE_ALBUM,
    album
});

export const VIEW_COLLECTION_REQUEST = 'VIEW_COLLECTION_REQUEST';
export const viewCollectionRequest = collection => ({
  type: VIEW_COLLECTION_REQUEST,
  loading: true,
  error: null
});

export const VIEW_COLLECTION_SUCCESS = 'VIEW_COLLECTION_SUCCESS';
export const viewCollectionSuccess = collection => ({
    type: VIEW_COLLECTION_SUCCESS,
    collection
});

export const VIEW_COLLECTION_ERROR = 'VIEW_COLLECTION_ERROR';
export const viewCollectionError = error => ({
    type: VIEW_COLLECTION_ERROR,
    error
});

export const collection = () => (dispatch, getState) => {
  const state = getState();
  console.log(state);
  dispatch(viewCollectionRequest());
  return fetch(`${API_BASE_URL}/api/collection`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${state.auth.authToken}`,
      'Content-Type': 'application/json'
      }
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }


      return res.json();
    })
    .then (data => {
      console.log(data)
      return data;
    } )
    .then(data => data.results)
    .then(collection => dispatch(viewCollectionSuccess(collection)))
    .catch(err => dispatch(viewCollectionError(err)))
  };

  
export const addToCollection = () => dispatch => {
  fetch(`${API_BASE_URL}/api/collection`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    data: {
      title: this.title,
      thumb: this.thumb,
      genre: this.genre,
      year: this.year,
      userId: this.userId
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => data.results)
  .then(collection => dispatch(addAlbumSuccess(collection)))
  .catch(err => dispatch(addAlbumError(err)))
};
