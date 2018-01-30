import React from 'react';
import ReactModal from 'react-modal'

class ModalWrapper extends React.Component {

  render() {
    return (

      <div>
        <ReactModal
          isOpen={false}
          // onAfterOpen={afterOpenFn}
          // onRequestClose={requestCloseFn}
          closeTimeoutMS={0}
          // style={customStyle}
          contentLabel="Modal">

            <h1>Modal Content</h1>
            <p>text text</p>
          </ReactModal>
        {/* I should be a modal */}
      </div>
    )
  }
}

export default ModalWrapper;
