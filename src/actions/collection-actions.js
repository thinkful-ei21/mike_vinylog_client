import {API_BASE_URL} from '../config';

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
    .then (data => data)
    .then(collection => dispatch(viewCollectionSuccess(collection)))
    .catch(err => dispatch(viewCollectionError(err)))
  };
