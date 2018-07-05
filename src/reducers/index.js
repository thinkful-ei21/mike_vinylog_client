import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form';
import { searchReducer } from './search-reducer';
import { collectionReducer } from './collection-reducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    form: formReducer,
    search: searchReducer,
    collection: collectionReducer
  }
);

export default rootReducer;