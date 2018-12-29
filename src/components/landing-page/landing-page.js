import React from 'react';
import './landing-page.css';
import {connect} from 'react-redux';
import { Link }  from 'react-router-dom';

export class LandingPage extends React.Component {

  render () {

    return (
        <div className="landing-page" style={{ minHeight: '100%' }}>
          <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
            <h1 className="header-title">Vinylog</h1>
            <h2>
              For Music Collectors
            </h2>
            <section className="desc-block">
              <div className="desc-item">
                <i className="fas fa-search"></i>
                <p className="">Search by album title or artist name</p>
              </div>
              <div className="desc-item">
                <i className="fas fa-folder-plus"></i>
                <p className="">Add album to your collection or wishlist</p>
              </div>
              <div className="desc-item">
                <i className="fas fa-exchange-alt"></i>
                <p className="">Move from wishlist to collection</p>
              </div>
            </section>
            {this.props.loggedIn ? '' :
            <button>
              <Link 
                to={{pathname: "/login"}}
                style={{textDecorationLine: "none",
                        color: "#eee"
                      }}
              >Sign In</Link>
            </button>}
          </div>
        </div>
      )
    }
  }


const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null
})

export default connect(mapStateToProps)(LandingPage)
