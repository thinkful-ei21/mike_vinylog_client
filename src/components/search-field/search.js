import React from 'react';
import './search.css';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchTitles } from '../../actions/search-actions';
import { addAlbums } from '../../actions/add-album-actions';

class Search extends React.Component {

  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

   const allAlbums = this.props.albums;

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
          onClick={e => addAlbums(album)}
          className="add-button">
          ADD TO COLLECTION</button>
        </li>
    ));

    if(album.added) {
      console.log(album.title);
    }

    return <ul className="album-search-list">{album}</ul>;
}

addAlbums(album) {
  this.props.dispatch(addAlbums(album))
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
          <button>Search</button>
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

export default connect(mapStateToProps)(Search);