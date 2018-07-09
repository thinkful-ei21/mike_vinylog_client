import React from 'react';
import './search-results.css';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchTitles } from '../../actions/search-actions';
import { addToCollection } from '../../actions/album-actions';

class SearchResults extends React.Component {
  


  addAlbum(album) {
    const curUserId = this.props.currentUser._id;
    console.log('addAlbums() clicked')
    this.props.dispatch(addToCollection(album, curUserId));
  }

  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

   const allAlbums = this.props.albums.map(album => {
    // return album.filter(album.type !== 'artist')
    return album;
   });

   console.log(allAlbums);

   const album = this.props.albums.map((album, index) => (
      <li className="album-search-results"
        key={index}>
        <div className="search-list-item">
            <img className="search-item-image" src={album.thumb} alt={album.title}/>
            <div className="search-item-text">
              <span className="title">{album.title}</span><br/>
              <span className="genre">{album.genre}</span><br/>
              <span className="year">{album.year}</span>
            </div>
          </div>
          <button  
          onClick={e => this.addAlbum(album)}
          className="add-button">
          ADD TO COLLECTION</button>
        </li>
    ));

    if(album.added) {
      console.log(album.title);
    }

    return <ul className="album-search-list">{album}</ul>;
}



mainSearch(e){
e.preventDefault();
  this.props.dispatch(searchTitles(this.input.value))
}

  render() {

    return (
      <div className="search-form">
        <form onSubmit={e => this.mainSearch(e)}>
          <input 
          type="search"
          placeholder="artist name"
          ref={input => (this.input = input)} 
          />
          <button className="search-button">Search</button>
        </form>
        <div>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.currentUser;
  return {
    albums: state.search.albums,
    currentUser: user,
    loggedIn: user !== null,
    added: state.added,
    error: state.error
  };
};

export default connect(mapStateToProps)(SearchResults);