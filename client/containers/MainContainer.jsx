import React, { Component } from 'react';
import CalendarContainer from './CalendarContainer';

class MainContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log('this.props', this.props.units)
    return(
      <div>
      <div>
        <div className="outerContainer">
          <h1>Codesmith Immersive Schedule</h1>
          <h2>Junior Portion Technical Topics</h2>
        </div>

          <div className="addUnit"></div>
            <h3>CREATE NEW UNIT HERE</h3>
            <button
              className="btn"
              onClick={(event) => this.props.update(event, this.props.index)}
            >
              Add a unit
            </button>
          </div>
          <CalendarContainer units={this.props.units} update={this.props.update} />
      </div>   
    )
  }
}

export default MainContainer;
