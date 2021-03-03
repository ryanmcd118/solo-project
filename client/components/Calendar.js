import React, { Component } from 'react';
import Unit from './Unit';

class Calendar extends Component {
  render() {
    console.log('this.props', this.props.units)
    // const units = ['this is a test unit\n', 'so is this\n', 'hope these are on separate lines\n', 'new words\n', 'farewell\n'];
    const newUnits = [];
    for (let i = 0; i < this.props.units.length; i++) {
      newUnits.push(
        <Unit
          key={`Unit${i}`}
          text={this.props.units[i]}
          update={this.props.update}
          index={i}
        />
      );
    }
    return(
      <div>
        <h4>inside calendar testing</h4>
        <div className="unit">
          {newUnits}
        </div>
      </div>
    )
  }
}

export default Calendar;
