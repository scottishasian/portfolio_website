import React from 'react';
import ProjectInfo from './ProjectInfo.jsx';

class ProjectContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      project : [
        {id: 1, projectName: 'Drinkable', about: 'An app all about drinking.', image: 'drinkable.png'},
        {id: 2, projectName: 'MoneySaver', about: 'An app to keep track of your spending.', image: 'moneySaver.png'},
        {id: 3, projectName: 'Geography With Friends', about: 'An game to help you learn about European Capitals.', image: 'GWF.png'}
      ]

    }
  }


  render() {
    return (
      <div className="project-container">
        <ProjectInfo info = {this.state.project} />

      </div>
    )
  }
}

export default ProjectContainer;
