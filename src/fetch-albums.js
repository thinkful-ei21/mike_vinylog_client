export const searchQuery = query => {
  return fetch(`https://api.discogs.com//database/search?q=${query}&{?release_title}&per_page=200&token=crHrrWRgylHsQVCUiIeCyqVqHPEgpIFDcZkcTaFp`)
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => data.results)
}

export const searchReleases = (props) => {
  console.log(props.albums.id);
  return fetch(`https://api.discogs.com/artists/${props.albums.id}/releases&token=crHrrWRgylHsQVCUiIeCyqVqHPEgpIFDcZkcTaFp`)
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => data.results)
}