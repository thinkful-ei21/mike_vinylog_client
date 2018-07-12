import { searchQuery }  from '../fetch-albums';

export const SEARCH_ALBUMS_REQUEST = 'SEARCH_ALBUMS_REQUEST';
export const searchAlbumsRequest = () => ({
    type: SEARCH_ALBUMS_REQUEST
});

export const SEARCH_ALBUMS_SUCCESS = 'SEARCH_ALBUMS_SUCCESS';
export const searchAlbumsSuccess = data => ({
    type: SEARCH_ALBUMS_SUCCESS,
    albums: data.results,
    pagination: data.pagination.urls,
});

export const SEARCH_ALBUMS_ERROR = 'SEARCH_ALBUMS_ERROR';
export const searchAlbumsError = error => ({
    type: SEARCH_ALBUMS_ERROR,
    error
});

export const searchTitles = name => dispatch => {
    dispatch(searchAlbumsRequest());
    searchQuery(name)
        .then(data => dispatch(searchAlbumsSuccess(data)))
        .catch(err => dispatch(searchAlbumsError(err)))
};
