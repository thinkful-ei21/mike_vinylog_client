import {API_BASE_URL} from '../config';

export const VIEW_WISHLIST_REQUEST = 'VIEW_WISHLIST_REQUEST';
export const viewWishlistRequest = wishlist => ({
  type: VIEW_WISHLIST_REQUEST,
  loading: true,
  error: null
});

export const VIEW_WISHLIST_SUCCESS = 'VIEW_WISHLIST_SUCCESS';
export const viewWishlistSuccess = wishlist => ({
    type: VIEW_WISHLIST_SUCCESS,
    wishlist
});

export const VIEW_WISHLIST_ERROR = 'VIEW_WISHLIST_ERROR';
export const viewWishlistError = error => ({
    type: VIEW_WISHLIST_ERROR,
    error: "There was an error getting wishlist"
});

export const wishlist = () => (dispatch, getState) => {
  const state = getState();
  dispatch(viewWishlistRequest());
  return fetch(`${API_BASE_URL}/api/wishlist`, {
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
    .then(data => data)
    .then(wishlist => dispatch(viewWishlistSuccess(wishlist)))
    .catch(err => dispatch(viewWishlistError(err)))
  };
