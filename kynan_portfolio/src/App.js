import React, { Component } from 'react';
import ProjectContainer from './Project_Components/ProjectContainer.jsx';
// import SubmitBox from './submitBoxComponents/submitBox.jsx';
import NavItems from './NavBarComponent/navbar.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav><NavItems/></nav>
        <div className='title'>

          <p> Blurb about me </p>
          <p> Technologies </p>
        </div>

        <div className='projects'>
        <ProjectContainer />
        {/* <SubmitBox/> */}
        </div>
      </div>

    )
  }
}

export default App;
