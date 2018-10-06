import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form';
import { searchReducer } from './search-reducer';
import { collectionReducer } from './collection-reducer';
import { wishlistReducer } from './wishlist-reducer';
import { albumReducer } from './album-reducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    form: formReducer,
    search: searchReducer,
    collection: collectionReducer,
    wishlist: wishlistReducer,
    album: albumReducer
  }
);

export default rootReducer;