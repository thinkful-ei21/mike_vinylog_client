import { combineReducers } from 'redux';
import authReducer from './auth-reducer';
import {reducer as formReducer} from 'redux-form';
import { searchReducer } from './search-reducer';

const rootReducer = combineReducers(
  {
    auth: authReducer,
    form: formReducer,
    search: searchReducer
  }
);

export default rootReducer;