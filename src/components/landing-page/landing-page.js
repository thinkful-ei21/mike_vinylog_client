import React from 'react';
import './landing-page.css';
import {connect} from 'react-redux';
import { Link }  from 'react-router-dom';

export class LandingPage extends React.Component {

  render () {

    return (
        <div className="landing-page" style={{ minHeight: '100%' }}>
          <div className="landing" role="complementary" aria-live="polite" aria-atomic="true">
            <h2>
            For music collectors to catalog their collection and create a wishlist.
            </h2>
            <p className="desc">Search by album title or artist name to retrieve a list of albums. You can then add them to your collection or wishlist.<br /><br />Once albums are acquired, you can then remove from wishlist and add albums to collection.
            </p>
            {this.props.loggedIn ? '' :
            <button>
              <Link 
                to={{pathname: "/login"}}
                style={{textDecorationLine: "none",
                        color: "white"
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
