import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form';
import { searchReducer } from './search-reducer';
import { collectionReducer } from './collection-reducer';
import { albumReducer } from './album-reducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    form: formReducer,
    search: searchReducer,
    collection: collectionReducer,
    album: albumReducer
  }
);

export default rootReducer;