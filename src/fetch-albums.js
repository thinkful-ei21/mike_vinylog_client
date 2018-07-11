export const searchQuery = query => {
  return fetch(`https://api.discogs.com//database/search?q=${query}&{?release_title}&per_page=100&token=crHrrWRgylHsQVCUiIeCyqVqHPEgpIFDcZkcTaFp`)
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => {
    return data;
  })
}
