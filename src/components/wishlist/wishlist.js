import React from 'react';
import '../collection/collection.css';
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { wishlist } from '../../actions/wishlist-actions';
import { removeFromWishlist, addToCollection } from '../../actions/album-actions';

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
    this.props.dispatch(removeFromWishlist(album.id));
  }

  addAlbum(album) {
    const curUserId = this.props.currentUser._id;
    this.props.dispatch(addToCollection(album, curUserId));
    this.props.dispatch(removeFromWishlist(album.id));
  }

  notifyRemove = () => {
    return toast.info("ALBUM REMOVED FROM WISHLIST", {
    autoClose: 1500,
    hideProgressBar: true
    });
  }

  notifyAdd = () => {
    return toast.info("ALBUM ADDED TO COLLECTION", {
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
            this.notifyRemove();
            this.removeFromWishlist(album);
            window.setTimeout(() => this.getWishlist(), 2500)
            }
          }
          className="remove-button">
          REMOVE FROM WISHLIST
        </button>
        <button
          onClick={e => {
            this.notifyAdd();
            this.addAlbum(album);
            window.setTimeout(() => this.getWishlist(), 2500)
            }
          }
          className="remove-button">
          ADD TO COLLECTION
        </button>
      </li>
  ));
  return  <ul className="collection-list"> {album} </ul>;
}

  render() {

    return (
      <div aria-live="polite" aria-atomic="true" role="main">
        <ToastContainer />
        <div className="collection-results" aria-live="polite" aria-atomic="true">
          <h2>Wishlist</h2>
          {this.state.error}
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