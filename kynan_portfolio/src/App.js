import React, { Component } from 'react';
import ProjectContainer from './Project_Components/ProjectContainer.jsx';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className='title'>
          <h1> Spectrum Solutions </h1>
          <p> Blurb about me </p>
        </div>

        <div className='projects'>
        <ProjectContainer />
        </div>
      </div>

    )
  }
}

export default App;
