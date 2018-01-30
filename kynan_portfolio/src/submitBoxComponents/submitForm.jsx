import React from 'react';

class SubmitForm extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      address: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();

    const address = this.state.address.trim();

    if(!address) return;

  }

  render () {
    return (
      <form className="submit-form">
        <input type='text'
          placeholder="Address"
          value={this.state.address}/>
      </form>
    )
  }
}

export default SubmitForm;
