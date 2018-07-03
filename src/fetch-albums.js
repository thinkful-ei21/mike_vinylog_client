
const searchQuery = query => {
  return fetch(`https://api.discogs.com//database/search?q=${query}&{?title,release_title}&per_page=200&token=crHrrWRgylHsQVCUiIeCyqVqHPEgpIFDcZkcTaFp`)
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => data.results.map(item => item.title));
}

export default searchQuery;