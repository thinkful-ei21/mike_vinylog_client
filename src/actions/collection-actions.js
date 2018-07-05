export const ADD_ALBUM = 'ADD_ALBUM';
export const addAlbum = album => ({
    type: ADD_ITEM,
    album
});

export const DELETE_ALBUM = 'DELETE_ALBUM';
export const deleteAlbum = album => ({
    type: DELETE_ALBUM,
    album
});