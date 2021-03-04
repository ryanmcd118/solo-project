import React, { Component } from 'react';
import Calendar from '../components/Calendar';

class CalendarContainer extends Component {

  render() {
    return (
      <div className="currentUnits">
        <h3>Units:</h3>
        <Calendar 
          key={`FullCalendar`}
          units={this.props.units} 
          updateUnit={this.props.updateUnit} 
          addResources={this.props.addResources} 
          deleteUnit={this.props.deleteUnit}
        />;
      </div>
      
    )
  }
}

export default CalendarContainer;
