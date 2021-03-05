import React, { Component } from 'react';
import { render } from 'react-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";

import MainContainer from './containers/MainContainer';
import CalendarContainer from './containers/CalendarContainer';
import Calendar from './components/Calendar';
import Unit from './components/Unit';
import UpdateUnit from './components/UpdateUnit';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: [],
      unitDay: '',
      topic: '',
      description: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.addResources = this.addResources.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
  }

  componentDidMount() {
    fetch('/api/') 
      .then(res => res.json())
      .then((newUnits) => {
        this.setState({units: newUnits})
      })
      .catch(err => console.log('app.jsx componentDidMount error', err));
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      unitDay: this.state.unitDay,
      topic: this.state.topic,
      description: this.state.description
    }
    // console.log('handleSubmit data: ', data);
    fetch('/api/unit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    })

    this.setState({
      unitDay: '',
      topic: '',
      description: ''
    })
  }

  onChange(event) {
    const key = event.target.id;
    // console.log('event.target.value', event.target.value);
    // console.log('event.target.id', event.target.id)
    if (key === 'unitDay') {
      this.setState({unitDay: event.target.value})
    }
    if (key === 'topic') this.setState({topic: event.target.value})
    if (key === 'description') this.setState({description: event.target.value})
    // console.log('onchange new state: ', this.state)
  }

  updateUnit(event) {
    console.log('UPDATE UNIT BUTTON CLICKED');
    console.log('event.target', event.target);

    window.location.href='/api/updateUnit';

    fetch('/api/updateUnit/') 
      .then(res => res.json())
      // .then(resp => resp.redirect('/api/updateUnit'))
      // .then(data => console.log('data', data))
      .catch(err => console.log('app.jsx componentDidMount error', err));
  }

  addResources(event) {
    console.log('ADD RESOURCES BUTTON CLICKED');
    // this.state.units = this.state.newUnits;
    // this.setState({ units: this.state.units})
  }

  deleteUnit(event) {
    console.log('DELETE UNIT BUTTON CLICKED');
    // this.state.units = this.state.newUnits;
    // this.setState({ units: this.state.units})
  }
  
  render() {
    return (
      <MainContainer 
        units={this.state.units} 
        handleSubmit={this.handleSubmit}
        updateUnit={this.updateUnit}
        onChange={this.onChange}
        updateUnit={this.updateUnit} 
        addResources={this.addResources} 
        deleteUnit={this.deleteUnit}
      />
    )
  }
}

export default App;
