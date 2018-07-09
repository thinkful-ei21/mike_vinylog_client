import React from 'react';
import './search-results.css';
import {connect} from 'react-redux';
import Spinner from 'react-spinkit';
import {searchTitles } from '../../actions/search-actions';
import { addToCollection } from '../../actions/album-actions';

class SearchResults extends React.Component {
  
  addAlbum(album) {
    const curUserId = this.props.currentUser._id;
    this.props.dispatch(addToCollection(album, curUserId));
  }

  wasAdded(e){
    console.log(this.props);
  }

  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

    if (this.props.added) {
      return <h2>Added To Collection</h2>
    };


    const album = this.props.albums.map((album, index) => {
    if(album.type === 'album' || album.type === 'master') {
        return (
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
          {/* {this.props.added ? 
            console.log(this.props.added)
            <h2>Added To Collection</h2>
            : ""} */}
          <button
          onClick={e => {
            this.addAlbum(album)
            this.wasAdded(e)}
          }
          className="add-button">
          ADD TO COLLECTION</button>
          </li>
        )
    } 
    });
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
        <div className="pagination">
          {this.props.pagination ? 
          console.log(this.props.pagination)
        //    <a href={this.props.pagination.next}>next</a>
            : ""}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.currentUser;
  return {
    albums: state.search.albums,
    pagination: state.search.pagination,
    currentUser: user,
    loggedIn: user !== null,
    added: state.added,
    error: state.error
  };
};

export default connect(mapStateToProps)(SearchResults);