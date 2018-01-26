import React from 'react';
import Project from './Project.jsx';

class ProjectInfo extends React.Component {

  render() {

    console.log(this.props.info);


    const infoNodes = this.props.info.map(function(information) {
      return (
        <Project key={information.id} projectName={information.projectName}>
          <div>
          <h4> {information.about}</h4>
          <img src={information.image}></img>
          <p>Project Image + Hyperlink (Create image component)</p>
          <p>Maybe use a html table and store projects in it</p>

          </div>
        </Project>

      )
    })

    return (
      <div className="project-info">
        {infoNodes}

      </div>
    )
  }

}

export default ProjectInfo;
