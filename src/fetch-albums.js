export const searchQuery = query => {
  return fetch(`https://api.discogs.com//database/search?q=${query}&type=release&per_page=100&token=crHrrWRgylHsQVCUiIeCyqVqHPEgpIFDcZkcTaFp`)
  .then(res => {
    if(!res.ok) {
      return Promise.reject(res.statusText);
    }
    return res.json();
  })
  .then(data => {
    let names = []; 
    let unique = data.results.filter(album => { 
      if (!names.includes(album.title)) {
        names.push(album.title);
        return true; 
      }
      return false;
    });

    return {
      pagination: data.pagination,
      results: unique
    };
  });
};