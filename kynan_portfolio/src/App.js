import React, { Component } from 'react';
import ProjectContainer from './Project_Components/ProjectContainer.jsx';
// import SubmitBox from './submitBoxComponents/submitBox.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <nav><h1> Kynan Song Portfolio </h1></nav>
        <div className='title'>

          <p> Blurb about me </p>
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
