import React, { Component } from 'react';
import Calendar from '../components/Calendar';

class CalendarContainer extends Component {

  render() {
    return (
      <div className="currentUnits">
        <h3 className='unitsHeader'>Junior Portion Technical Topics</h3>
        <Calendar 
          key={`FullCalendar`}
          units={this.props.units} 
          onChange={this.props.onChange}
          updateUnit={this.props.updateUnit} 
          addResources={this.props.addResources} 
          deleteUnit={this.props.deleteUnit}
        />
      </div>
      
    )
  }
}

export default CalendarContainer;
