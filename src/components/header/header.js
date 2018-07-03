import React from 'react';
import './header.css';

const Header = (props) => {
  const user = props.username;
  console.log(user);
  return (
  <div className='landing'>
    <p>
        Welcome {user}! To start your collection search for album title.
    </p>
    <button className="logout-button">Logout</button>
  </div>
  )
}
// const mapStateToProps({

// })

export default Header;