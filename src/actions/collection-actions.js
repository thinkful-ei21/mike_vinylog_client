import {API_BASE_URL} from '../config';

export const ADD_ALBUM = 'ADD_ALBUM';
export const addAlbum = album => ({
    type: ADD_ALBUM,
    album
});

export const DELETE_ALBUM = 'DELETE_ALBUM';
export const deleteAlbum = album => ({
    type: DELETE_ALBUM,
    album
});

export const VIEW_COLLECTION = 'VIEW_COLLECTION';
export const viewCollection = collection => ({
  type: VIEW_COLLECTION,
  collection
});

export const collection = () => dispatch => {

  dispatch(viewCollection());
  console.log('FETCH');
  return fetch(`${API_BASE_URL}/api/collection`, {
    method: 'GET'
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(collection =>
      this.setState({
        collection: collection.albums,
        loading: false
      })
    )
    .catch(err =>
      this.setState({
        error: 'Could not load collection',
        loading: false
      })
    );
  }