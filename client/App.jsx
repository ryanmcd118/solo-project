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
      units: ['this is a test unit', 'so is this', 'hope these are on separate lines', 'hey, a box!', 'new words', 'farewell'],
    };

    this.addUnit = this.addUnit.bind(this);
    this.updateUnit = this.updateUnit.bind(this);
    this.addResources = this.addResources.bind(this);
    this.deleteUnit = this.deleteUnit.bind(this);
  }

  addUnit(event, id) {
    console.log('ADD A UNIT BUTTON CLICKED');
    // this.state.units = this.state.newUnits;
    // this.setState({ units: this.state.units})
  }

  updateUnit(event, id) {
    console.log('UPDATE UNIT BUTTON CLICKED');
    // this.state.units = this.state.newUnits;
    // this.setState({ units: this.state.units})
  }

  addResources(event, id) {
    console.log('ADD RESOURCES BUTTON CLICKED');
    // this.state.units = this.state.newUnits;
    // this.setState({ units: this.state.units})
  }

  deleteUnit(event, id) {
    console.log('DELETE UNIT BUTTON CLICKED');
    // this.state.units = this.state.newUnits;
    // this.setState({ units: this.state.units})
  }
  
  render() {
    return (
      <MainContainer 
        units={this.state.units} 
        addUnit={this.addUnit} 
        updateUnit={this.updateUnit} 
        addResources={this.addResources} 
        deleteUnit={this.deleteUnit}
      />
    )
  }
}

export default App;
