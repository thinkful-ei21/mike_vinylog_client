import React from 'react';
import '../collection/collection.css';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wishlist } from '../../actions/wishlist-actions';
import { removeFromWishlist } from '../../actions/album-actions';

class Wishlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        wishlist: [],
        loading: false,
        error: null
    };
  }

  componentDidMount() {
    this.getWishlist();
  }

  getWishlist() {
    this.setState({
      wishlist: [],
      error: null,
      loading: true
    });

    return this.props.dispatch(wishlist());
  }

  goToCollection() {
    this.props.history.push('/collection');
  }

  removeFromWishlist(album) {
    // this.props.dispatch(removeFromWishlist(album.id));
  }

  newSearch() {
    this.props.history.push('/home');
    return <Redirect to="/home"></Redirect>;

  }


  notify = () => {
    return toast.info("ALBUM REMOVED", {
    autoClose: 1500,
    hideProgressBar: true
    });
  }

  renderResults() {
    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

   const album = this.props.wishlist.map((album, index) => (
    <li className="collection-result"
      key={index}>
      <div className="collection-item">
          <img className="collection-item-image" src={album.thumb} alt={album.title}/>
          <div className="collection-item-text">
            <span className="title">{album.title}</span><br/>
            <span className="genre">{album.genre}</span><br/>
            <span className="year">{album.year}</span>
          </div>
        </div>
        <button
        onClick={e => {
          this.notify();
          this.removeAlbum(album);
          window.setTimeout(() => this.getWishlist(), 2500)
          }
        }
        className="remove-button">
        REMOVE FROM COLLECTION</button>
      </li>
  ));
  return  <ul className="collection-list"> {album} </ul>;
}

  render() {

    return (
      <div aria-live="polite" aria-atomic="true" role="main">
          <ToastContainer />
          <button onClick={() => this.newSearch()}
            className="new-search-button">
            New Search
          </button>
        <div className="collection-results" aria-live="polite" aria-atomic="true">
          <h1>My Wishlist</h1>
          {this.renderResults()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.currentUser;
  return {
    wishlist: state.wishlist.wishlist,
    currentUser: user,
    loggedIn: user !== null,
    album: state.album.album
  };
};

export default connect(mapStateToProps)(Wishlist);