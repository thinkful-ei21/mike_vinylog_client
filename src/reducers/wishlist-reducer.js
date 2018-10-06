import {
  VIEW_WISHLIST_REQUEST,
  VIEW_WISHLIST_SUCCESS,
  VIEW_WISHLIST_ERROR
} from '../actions/wishlist-actions'

const initialState = {
  wishlist: [],
  loading: false,
  error: null
}

export function wishlistReducer(state=initialState, action) {
  switch(action.type) {
    case VIEW_WISHLIST_REQUEST:
    return {
      ...state,
      wishlist: [],
      loading: true
    }

    case VIEW_WISHLIST_SUCCESS:
    return {
      ...state,
      wishlist: action.wishlist,
      loading: false,
      error: null
    }

    case VIEW_WISHLIST_ERROR:
    return {
      ...state,
      loading: false,
      error: 'There was an error fetching wishlist'
    }

    default:
     return state;
  }

}