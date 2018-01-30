import React from 'react';
import SubmitForm from './submitForm.jsx';

class SubmitBox extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      location: []
    }
  }

  handleAddressSubmit(address) {
    const newAddress =  this.state.location.concat([address]);
  }

  componentDidMount() {
    console.log("Component Mounted");
    const url = 'https://maps.googleapis.com/maps/api/geocode/outputFormat?parameters';
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', () => {
      if(request.status !== 200) return;
      const jsonString = request.resposeText;
      const location = JSON.parse(jsonString);
      this.setState({location: location});
      console.log(this.state.location);

    })
  }

  render() {
    return(
      <div className='submit-box'>
        <SubmitForm/>
        <h1>lat</h1>
        <h1>lng</h1>
      </div>
    )
  }


}

export default SubmitBox;
