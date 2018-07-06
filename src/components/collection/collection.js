import React from 'react';
import './collection.css';
import {connect} from 'react-redux';
import {API_BASE_URL} from '../../config';
// import { viewCollection } from '../../actions/view-collection-actions';

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        collection: {}
    };
  }

  componentDidMount() {
    this.getCollection();
  }

  getCollection() {
    this.setState({
      error: null,
      loading: true
    });

  return fetch(`${API_BASE_URL}/collection`, {
    method: 'GET'
    })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(collection =>
      this.setState({
        collection: collection.albums,
        loading: false
      })
    )
    .catch(err =>
      this.setState({
        error: 'Could not load collection',
        loading: false
      })
    );
  }


  renderResults() {
    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

  // const allAlbums = this.props.albums;

   const album = this.props.collection.map((album, index) => (
      <li className="collection-result-list-item"
       
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
          // onClick={e => removeAlbum(album)}
          className="add-button">
          REMOVE FROM COLLECTION</button>
        </li>
    ));

    return <ul className="collection-list">{album}</ul>;
}

// removeAlbum(album) {
//   this.props.dispatch(deleteAlbum(album))
// }

  render() {

    return (
      <div className="collection-results">
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.currentUser;
  return {
    collection: state.user.collection,
    albums: state.albums,
    currentUser: user,
    loggedIn: user !== null,
    added: state.added,
    error: state.error
  };
};

export default connect(mapStateToProps)(Collection);