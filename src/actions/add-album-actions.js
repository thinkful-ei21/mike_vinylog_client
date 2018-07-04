export const ADD_ALBUM = 'ADD_ALBUM';

export const addAlbums = album => ({
  type: ADD_ALBUM,
  album,
  added: true
});
