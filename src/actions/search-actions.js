import search from '../fetch-albums';

export const SEARCH_ALBUMS_REQUEST = 'SEARCH_ALBUMS_REQUEST';
export const searchAlbumsRequest = () => ({
    type: SEARCH_ALBUMS_REQUEST
});

export const SEARCH_ALBUMS_SUCCESS = 'SEARCH_ALBUMS_SUCCESS';
export const searchAlbumsSuccess = albums => ({
    type: SEARCH_ALBUMS_SUCCESS,
    albums
});

export const SEARCH_ALBUMS_ERROR = 'SEARCH_ALBUMS_ERROR';
export const searchAlbumsError = error => ({
    type: SEARCH_ALBUMS_ERROR,
    error
});

export const searchAlbums = name => dispatch => {
    dispatch(searchAlbumsRequest());
    search(name)
        .then(albums => dispatch(searchAlbumsSuccess(albums)))
        .catch(err => dispatch(searchAlbumsError(err)))
};
