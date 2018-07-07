import React from 'react';
import './collection.css';
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import { collection } from '../../actions/collection-actions';

class Collection extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        collection: [],
        loading: false,
        error: null
    };
  }

  componentDidMount() {
    this.getCollection();
  }

  getCollection() {
    this.setState({
      collection: [],
      error: null,
      loading: true
    });

     return this.props.dispatch(collection());
  }

  removeAlbum(album) {
    // this.props.dispatch(deleteAlbum(album))
  }

  newSearch() {
    this.props.history.push('/home');
    return <Redirect to="/home"></Redirect>;

  }

  renderResults() {
    if (this.props.error) {
      return <strong>{this.props.error}</strong>;
    }

   const album = this.props.collection.map((album, index) => (
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
          onClick={album => this.removeAlbum(album)}
          className="add-button">
          REMOVE FROM COLLECTION</button>
        </li>
    ));

  return <ul className="collection-list">{album}</ul>;

}

  render() {

    return (
      <div className="collection-results"> <button  
      onClick={() => this.newSearch()}
      className="add-button">
      New Search</button>
      <h1>My Collection</h1>
        {this.renderResults()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const user = state.auth.currentUser;
  return {
    collection: state.collection.collection,
    currentUser: user,
    loggedIn: user !== null
  };
};

export default connect(mapStateToProps)(Collection);