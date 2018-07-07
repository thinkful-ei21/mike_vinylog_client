import React from 'react';
import './search.css';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import { Link } from 'react-router-dom';
import {clearAuth} from '../../actions/auth-actions';
import {clearAuthToken} from '../../local-storage';
import SearchResults from '../search-results/search-results';
import { collection } from '../../actions/collection-actions';

export class Search extends React.Component {
  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  goToCollection() {
    // this.props.history.push('/collection');
    return <Redirect to="/collection"></Redirect>;

  }

  render() {
    const user =this.props.currentUser.username;

    let logOutButton;
    if (this.props.loggedIn) {
        logOutButton = (
            <button 
            className="logout-button"
            onClick={() => this.logOut()}
            >Log out</button>
        );
    }

    let viewCollectionButton;
    if (this.props.loggedIn) {
      viewCollectionButton = (
            <button 
            className="view-collection-button"
            onClick={() => this.goToCollection()}
            >My Collection</button>
        );
    }

    return (
      <div className='header'>
      {viewCollectionButton}
      {logOutButton}
        <h2>Welcome {user}!</h2>
        <p>To start your collection,<br /> search by artist name to retrieve a list of albums.
        </p>
        <SearchResults />
      </div>
    )
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null,
  collection: state.auth.currentUser.collection
})

export default connect(mapStateToProps)(Search);


// import React from 'react';
// import './search.css';
// import {connect} from 'react-redux';
// import Spinner from 'react-spinkit';
// import {searchTitles } from '../../actions/search-actions';
// import { addToCollection } from '../../actions/collection-actions';

// class Search extends React.Component {

//   addAlbums(album) {
//     console.log('addAlbums() clicked')
//     this.props.dispatch(addToCollection(album))
//   }

//   renderResults() {
//     if (this.props.loading) {
//       return <Spinner spinnerName="circle" noFadeIn />;
//     }

//     if (this.props.error) {
//       return <strong>{this.props.error}</strong>;
//     }

//    const allAlbums = this.props.albums;

//    const album = this.props.albums.map((album, index) => (
//       <li className="album-search-results"
       
//         key={index}>
//         <div className="search-list-item">
//             <img className="search-item-image" src={album.thumb} alt={album.title}/>
//             <div className="search-item-text">
//               <span className="title">{album.title}</span><br/>
//               <span className="genre">{album.genre}</span><br/>
//               <span className="year">{album.year}</span>
//             </div>
//           </div>
//           <button  
//           onClick={album => this.addAlbums(album)}
//           className="add-button">
//           ADD TO COLLECTION</button>
//         </li>
//     ));

//     if(album.added) {
//       console.log(album.title);
//     }

//     return <ul className="album-search-list">{album}</ul>;
// }



// mainSearch(e){
// e.preventDefault();
//   this.props.dispatch(searchTitles(this.input.value))
// }

//   render() {

//     return (
//       <div className="search-form">
//         <form onSubmit={e => this.mainSearch(e)}>
//           <input 
//           type="search"
//           placeholder="artist name" 
//           ref={input => (this.input = input)} 
//           />
//           <button>Search</button>
//         </form>
//         <div>
//           {this.renderResults()}
//         </div>
//       </div>
//     )
//   }
// }

// const mapStateToProps = state => {
//   const user = state.auth.currentUser;
//   return {
//     albums: state.search.albums,
//     currentUser: user,
//     loggedIn: user !== null,
//     added: state.added,
//     error: state.error
//   };
// };

// export default connect(mapStateToProps)(Search);