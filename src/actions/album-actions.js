import {API_BASE_URL} from '../config';
import { loadAuthToken } from '../local-storage';

export const ADD_ALBUM_REQUEST = 'ADD_ALBUM_REQUEST';
export const addAlbumRequest = album => ({
    type: ADD_ALBUM_REQUEST,
    loading: false,
    error: null
});

export const ADD_ALBUM_SUCCESS = 'ADD_ALBUM_SUCCESS';
export const addAlbumSuccess = album => ({
    type: ADD_ALBUM_SUCCESS,
    album
});

export const ADD_ALBUM_ERROR = 'ADD_ALBUM_ERROR';
export const addAlbumError = album => ({
    type: ADD_ALBUM_ERROR,
    error: this.error
});

export const REMOVE_ALBUM_REQUEST = 'REMOVE_ALBUM_REQUEST';
export const removeAlbumRequest = album => ({
    type: REMOVE_ALBUM_REQUEST,
    loading: false,
    error: null
});

export const REMOVE_ALBUM_SUCCESS = 'REMOVE_ALBUM_SUCCESS';
export const removeAlbumSuccess = album => ({
    type: REMOVE_ALBUM_SUCCESS,
    album
});

export const REMOVE_ALBUM_ERROR = 'REMOVE_ALBUM_ERROR';
export const removeAlbumError = album => ({
    type: REMOVE_ALBUM_ERROR,
    error: this.error
});

export const addToCollection = (album, user) => (dispatch, getState) => {
  const state = getState();
  console.log(album, user);
  fetch(`${API_BASE_URL}/api/collection`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${state.auth.authToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      title: album.title,
      thumb: album.thumb,
      genre: album.genre,
      year: album.year,
      userId: user
    })
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => {
    return data})
  .then(album => dispatch(addAlbumSuccess(album)))
  .catch(err => dispatch(addAlbumError(err)))
};

export const removeFromCollection = album => (dispatch, getState) => {
  const state = getState();
  const idToRemove = state.collection.collection[0].id;
  console.log(album);
  console.log(idToRemove);
  fetch(`${API_BASE_URL}/api/collection/${idToRemove}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${state.auth.authToken}`,
      'Content-Type': 'application/json'
    },
    data: {
      userId: this.userId
    }
  })
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => {
    return data})
  .then(album => dispatch(removeAlbumSuccess(album)))
  .catch(err => dispatch(removeAlbumError(err)))
};