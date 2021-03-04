import React, { Component } from 'react';
import CalendarContainer from './CalendarContainer';

class MainContainer extends Component {
  render() {
    return(
      <div>
        <div className="outerContainer">
          <h1>Codesmith Immersive Schedule</h1>
          <h2>Junior Portion Technical Topics</h2>
        </div>

        <div className="addUnit">
          <h3>ADD A NEW UNIT</h3>
          <button
            className="btn"
            onClick={(event) => this.props.addUnit(event, this.props.index)}
            >Add a unit
          </button>
        </div>

        <CalendarContainer 
          units={this.props.units} 
          updateUnit={this.props.updateUnit} 
          addResources={this.props.addResources} 
          deleteUnit={this.props.deleteUnit}
        />
      </div>   
    )
  }
}

export default MainContainer;
