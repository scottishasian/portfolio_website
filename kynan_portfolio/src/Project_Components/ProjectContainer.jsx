import React from 'react';
import ProjectInfo from './ProjectInfo.jsx';

class ProjectContainer extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      project : [
        {id: 1, projectName: 'Drinkable', about: 'An app all about drinking.', image: 'drinkable.png', link:'https://github.com/scottishasian/Drinkable'},
        {id: 2, projectName: 'MoneySaver', about: 'An app to keep track of your spending.', image: 'moneySaver.png', link:'https://github.com/scottishasian/Money_saver_project'},
        {id: 3, projectName: 'Geography With Friends', about: 'An game to help you learn about European Capitals.', image: 'GWF.png', link:'https://github.com/scottishasian/CodeClan-Project-European-Capitals-Game'}
      ]

    };

  }

  render() {
    return (
      <div className="project-container">
        <h1> Projects I Done good </h1>
        <ProjectInfo info = {this.state.project} showModal={this.state.showModal} handleOpen= {this.handleOpenModal} handleClose= {this.handleCloseModal} />

      </div>
    )
  }
}

export default ProjectContainer;
