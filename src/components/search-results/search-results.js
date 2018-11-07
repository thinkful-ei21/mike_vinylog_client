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
  
  addAlbumToCollection(album) {
    const curUserId = this.props.currentUser._id;
    this.props.dispatch(addToCollection(album, curUserId));
  }

  addAlbumToWishlist(album) {
    const curUserId = this.props.currentUser._id;
    this.props.dispatch(addToWishlist(album, curUserId));
  }

  notifyWishlist = album => {
    let title = album.title;
    return toast.info(`${title.toUpperCase()} ADDED TO WISHLIST`, {
    autoClose: 3500,
    hideProgressBar: true
    });
  }

  notifyCollection = album => {
    let title = album.title;
    return toast.info(`${title.toUpperCase()} Added To Collection`, {
    autoClose: 3500,
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
      let splitTitle = album.title.split(" - ");
      let artistName = splitTitle[0];
      let albumTitle = splitTitle[1];

        return (
        <li className="album-search-results"
          key={index}>
          <div className="search-list-item">
            <img className="search-item-image" src={album.thumb} alt={album.title}/>
            <div className="search-item-text">
              <span className="artist">{artistName}</span><br/>
              <span className="title">{albumTitle}</span><br/>
              <span className="genre">{album.genre}</span><br/>
              <span className="year">{album.year}</span>
            </div>
          </div>
          <button
            onClick={e => {
              this.notifyWishlist(album);
              this.addAlbumToWishlist(album);
              }
            }
            className="add-button">
            ADD TO WISHLIST
          </button>
          <button
            onClick={e => {
              this.notifyCollection(album);
              this.addAlbumToCollection(album);
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
      <div role="search" className="search"
        aria-live="polite" aria-atomic="true">
        <ToastContainer />
        <h2>New Search</h2>
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
          <button className="search-button">Search For Album or Artist</button>
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