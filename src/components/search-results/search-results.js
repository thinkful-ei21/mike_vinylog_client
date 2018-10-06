import React from 'react';
import './search-results.css';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from 'react-spinkit';
import {searchTitles } from '../../actions/search-actions';
import { addToCollection } from '../../actions/album-actions';
import { addToWishlist } from '../../actions/album-actions';

export class SearchResults extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      loading: false,
      error: null
    };
  }
  
  addAlbum(album) {
    const curUserId = this.props.currentUser._id;
    this.props.dispatch(addToCollection(album, curUserId));
  }

  addAlbumToWishlist(album) {
    console.log('adding to wishlist')
    const curUserId = this.props.currentUser._id;
    this.props.dispatch(addToWishlist(album, curUserId));
  }

  notify = () => {
    return toast.info("ALBUM ADDED", {
    autoClose: 2000,
    hideProgressBar: true
    });
  }

  renderResults() {
    if (this.props.loading) {
      return <Spinner spinnerName="circle" noFadeIn />;
    }

    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }
    
    const album = this.props.albums.map((album, index) => {
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
          <button
            onClick={e => {
              this.notify();
              this.addAlbumToWishlist(album);
              }
            }
            className="add-button">
            ADD TO WISHLIST
          </button>
          <button
            onClick={e => {
              this.notify();
              this.addAlbum(album);
              }
            }
            className="add-button">
            ADD TO COLLECTION
          </button>
        </li>
        )
    });
    return <ul className="album-search-list" role="complementary">{album}</ul>;
}

mainSearch(e){
e.preventDefault();
  this.props.dispatch(searchTitles(this.input.value))
}

  render() {

    return (
      <div role="search" 
        aria-live="polite" aria-atomic="true">
        <ToastContainer />
        <form 
          className="search-form" 
          onSubmit={e => this.mainSearch(e)}
          aria-label=""
          >
          <input 
          type="search"
          placeholder="album title, artist name"
          aria-label="search"
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
    pagination: state.search.pagination,
    currentUser: user,
    loggedIn: user !== null,
    added: state.added,
    error: state.error,
    loading: state.loading
  };
};

export default connect(mapStateToProps)(SearchResults);