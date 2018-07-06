import {ADD_ALBUM, DELETE_ALBUM} from '../actions/collection-actions';

const initialState = {
    collection: {}
};

export const crudReducer = (state=initialState, action) => {
    if (action.type === ADD_ALBUM) {

        return Object.assign({}, state, {
            collection: {
              ...state.items,
               action.item
              }
       });
    }

    else if (action.type === DELETE_ALBUM) {
        return Object.assign({}, state, {
            collection: state.items.filter(item => item.id !== action.item.id)
        });
    }
    return state;
};