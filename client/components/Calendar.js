import React, { Component } from 'react';
import Unit from './Unit';

class Calendar extends Component {
  render() {
    // console.log('Calendar this.props.units', this.props.units)
    // const units = ['this is a test unit\n', 'so is this\n', 'hope these are on separate lines\n', 'new words\n', 'farewell\n'];
    const newUnits = [];
    for (let i = 0; i < this.props.units.length; i++) {
      newUnits.push(
        <Unit
          key={`Unit${i}`}
          unitDay={this.props.units[i].unitDay}
          topic={this.props.units[i].topic}
          description={this.props.units[i].description}
          onChange={this.props.onChange}
          updateUnit={this.props.updateUnit} 
          addResources={this.props.addResources} 
          deleteUnit={this.props.deleteUnit}
          index={i}
        />
      );
    }
    return(
      <div>
        {/* <h4>inside calendar testing</h4> */}
        <div className="unit">
          {newUnits}
        </div>
      </div>
    )
  }
}

export default Calendar;
