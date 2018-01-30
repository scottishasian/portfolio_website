import React from 'react';
import Project from './Project.jsx';
import ModalWrapper from '../Models/Modal.jsx';


class ProjectInfo extends React.Component {

  constructor(){
    super();
    this.state = {
      showModal: false
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }


  render() {

    console.log(this.props.info);


    const infoNodes = this.props.info.map((information) => {
      //need to bind this so => used.
      return (
        <Project key={information.id} projectName={information.projectName}>
          <div>
          <h4> {information.about}</h4>
          <img src={information.image} onClick= {this.handleOpenModal}></img>
          <a href={information.link} target="_blank" > {information.projectName}</a>
          <p>Project Image + Hyperlink (Create image component)</p>
          <p>Maybe use a html table and store projects in it</p>

          </div>
        </Project>

      )
    })

    return (
      <div className="project-info">
        {infoNodes}

        <ModalWrapper isOpen={this.state.showModal}
                    contentLabel="Minimal modal">
                      <button onClick={this.handleCloseModal}></button>
                    </ModalWrapper>

      </div>
    )
  }

}

export default ProjectInfo;
