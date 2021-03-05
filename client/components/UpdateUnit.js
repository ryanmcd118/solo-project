import React, { Component } from 'react';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

class UpdateUnit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [],
      unitDay: '',
      topic: '',
      description: ''
    };
  }

  componentDidMount() {
    fetch('/api/updateUnit') 
      .then(res => res.json())
      .then((newUnits) => {
        this.setState({units: newUnits})
      })
      .catch(err => console.log('app.jsx componentDidMount error', err));
  }
  render() {
    console.log('UNIT this.props', this.props);
    return(
      <div>
        <div className="updateHeaders">
          <h1>Update unot</h1>
        </div>

        <div className="updateUnit">
          <form onChange={(event) => {
              console.log('onchange is triggered', event.target.value);
              console.log('event id', event.target.id)
              // console.log('onChange invoked')
              this.props.onChange(event)
            }}>
            <div className="unitDay">
              <label htmlFor="unitDay">Enter new unit day: </label>
              <input id="unitDay" name="unitDay" type="text" />
            </div>

            <div className="topic">
              <label htmlFor="topic">Enter new topic: </label>
              <input id="topic" name="topic" type="text" />
            </div>

            <div className="description">
              <label htmlFor="description">Enter new description: </label>
              <input id="description" name="description" type="text" />
            </div>

            <button
              className="btn"
              onClick={(event) => this.props.handleSubmit(event)}
              >Submit change
            </button>
          </form>
        </div>
      </div>   
    )
  }
}

export default UpdateUnit;
