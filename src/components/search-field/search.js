import React from 'react';
import './search.css';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchAlbums} from '../../actions/search-actions';

class Search extends React.Component {

  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    const allAlbums = this.props.albums;

    // filter out duplicates
    const albums = [...new Set(allAlbums)];

    const album = this.props.albums.map((album, index) => (
      <li className="album-search-results" 
      key={index}>{album}</li>
    ));

    return <ul>{album}</ul>;
}

mainSearch(e){
e.preventDefault();
  this.props.dispatch(searchAlbums(this.input.value))
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
        <div className="album-search-list">
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
    error: state.error
  };
};

export default connect(mapStateToProps)(Search);