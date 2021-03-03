import React, { Component } from 'react';
import { render } from 'react-dom';

import MainContainer from './containers/MainContainer'
import CalendarContainer from './containers/CalendarContainer'
import Calendar from './components/Calendar';
import Unit from './components/Unit'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units: ['this is a test unit', 'so is this', 'hope these are on separate lines', 'new words', 'farewell'],
    };

    // this.update = this.update.bind(this);
  }

  // update(event, id) {
  //   console.log('BUTTON CLICKED');
  //   // this.state.units = this.state.newUnits;
  //   // this.setState({ units: this.state.units})
  // }
  
  render() {
    return (
      <MainContainer units={this.state.units} update={this.state.update}/>
    )
  }
}

export default App;
