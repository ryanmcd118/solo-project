import React, { Component } from 'react';
import Calendar from '../components/Calendar';

class CalendarContainer extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    console.log('this.props', this.props.units)
    let calendar = (<Calendar 
      key={`FullCalendar`}
      units={this.props.units}
      update={this.props.update}
    />);

    return (
      <div className="currentUnits">
        <h3>Units:</h3>
        {calendar}
      </div>
      
    )
  }
}

export default CalendarContainer;
