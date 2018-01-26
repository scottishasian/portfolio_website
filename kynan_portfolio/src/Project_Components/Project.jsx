import React from 'react';

class Project extends React.Component {

  render() {
    return(
      <div className="project">
        <h1>{this.props.projectName}</h1>
        {this.props.children}
      </div>
    )
  }
}

//Make clickable to activate a modal to display more info.

export default Project;
