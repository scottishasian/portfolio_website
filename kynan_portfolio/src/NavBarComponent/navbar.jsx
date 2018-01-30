import React from 'react';

class NavItems extends React.Component {

  render() {
    return(
      <div className="Nav-items">
        <div className="dropdown">
        <button className="dropbtn">DropDown</button>
        <div className="dropdown-content">
          <ul>
            <li>About</li>
            <li>Projects</li>
          </ul>
        </div>
      </div>
      <h1> Kynan Song Portfolio </h1>
      </div>
    )
  }
}

export default NavItems;
